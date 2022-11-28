const companyrpstry=require('../repository/companyrpstry')
const read=async(req,res)=>{
     const data=await companyrpstry.get()
     res.status(200)
     res.json(data)
}
const post=async(req,res)=>{
    const data=req.body
    await companyrpstry.create(data)
    res.status(201)
    res.send('created')
}
module.exports={
    read,post
}