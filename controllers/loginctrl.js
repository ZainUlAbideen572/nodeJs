const loginrpstry=require('./../repository/loginrpstry')
const crypto=require('./../utils/crypto')
const jwt=require('jsonwebtoken')
const get=async(req,res)=>{
    const hash=await crypto.hash(req.body.password)
    req.body.password=hash;
    console.log('hash',hash)
    const data=req.body
        await loginrpstry.create(data)
        res.status(200)
        res.send('created')
}
const signin=async(req,res)=>{
     const data=req.body
     const user=await loginrpstry.getbyemail(data.email)
     if(!user){
        res.status(400)
        res.send('invalid')
        return;
     }
   
     const valid=await crypto.verify(data.password,user.password)
     if(valid){
      const token=jwt.sign({email:user.email},'secret',{
         expiresIn:'3m'
      });
        res.status(200)
        res.json({
         email:user.email,
         token:token
        })
     }else{
        res.status(500)
        res.send('invalid email or password')
     }
}
module.exports={
    get,signin
}