const credsrpstry=require('./../repository/credsrpstry')
const crypto=require('./../utils/crypto')
// const bcrypt=require('bcrypt')
const signup=async(req,res)=>{
  const hash=await crypto.hash(req.body.Password,1)
   req.body.Password=hash
  console.log('hash',hash)
  await credsrpstry.create(req.body)
    res.status(201)
    res.send('created')
}
const signin=async(req,res)=>{
    const data=req.body
    const user=await credsrpstry.getbyemail(data.email)
    if(!user){
        res.status(400)
        res.send('invalid')
    }
    const valid=await crypto.verify(data.password,user.password)
    if(valid){
        const token=jwt.sign({email:email},'secret',{
            expiresin:'1d'
        })
        res.status(201)
        res.json({
            email:user.email,
            token:user.token
        })
    }else{
        res.status(400).send('invalid')
    }
}
module.exports={
    signup,signin
}