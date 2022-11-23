const bikerpstry=require('./bikesrpstry')
const read=async(req,res)=>{
      const data=await bikerpstry.get()
      res.json(data)
      res.status(200)
}
const post=async(req,res)=>{
    const data=req.body
    await bikerpstry.create(data)
    res.status(201)
    res.send('created')
}
const remove=async(req,res)=>{
    const id=+req.params.id
    await bikerpstry.remove(id)
    res.status(200)
    res.send('deleted')
}
const modify=async(req,res)=>{
    const id=+req.params.id
    const data=req.body
    await bikerpstry.update(id,data)
    res.status(200)
    res.send('updated')
}
module.exports={
    read,post,remove,modify
}
