const signuprpstry=require('./Signuprpstry')
const crypto=require('../utils/crypto')
const bcrypt=require('bcrypt')
const signup=async (req,res)=>{
    console.log(req.body)
    const hash=await bcrypt.hash(req.body.Password,1)
    req.body.Password=hash;
    console.log(hash)
    const data=req.body
    await signuprpstry.create(data)
    res.status(201)
    res.send('created')
}
const signin=async(req,res)=>{
    const data=req.body
    console.log(data)
      const user=await signuprpstry.getbyemail(data.email)
    console.log(user)
    if(!user){
        res.status(401)
        res.send('unauthorised')
        return;
    }
      const valid=await crypto.verify(data.Password,user.Password)
    if(valid){
       res.status(200)
       res.send('Success')
    }else{
        res.status(400)
        res.send('invalidemail')
    }

}

module.exports={
    signup,signin
}