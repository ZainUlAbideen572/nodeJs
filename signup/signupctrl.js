const signuprpstry=require('./Signuprpstry')
const bcrypt=require('bcrypt')
const post=async(req,res)=>{
    bcrypt.hashSync(req.body.Password,1)
    const data=req.body
    await signuprpstry.create(data)
    res.status(201)
    res.send('created')
}
module.exports={
    post
}