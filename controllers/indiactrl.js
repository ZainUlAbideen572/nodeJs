
const indiarpstry=require('./../repository/indiarpstry')
const get=async(req,res)=>{
    const read=await indiarpstry.get()
    res.json(read)
    res.status(200)

}
const post=async(req,res)=>{
    const data=req.body
    await indiarpstry.create(data)
    res.send('created')
    res.status(201)
}
module.exports={
    get,post
}