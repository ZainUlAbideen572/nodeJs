const companyrpstry=require('../repository/companyrpstry')
const read=async(req,res)=>{
    const page=+req.params.page
    const limit=+req.params.limit
    const sort=req.query.sort
    const direction=req.query.direction||1
    const search=req.query.search||1
    const options={
      page,limit,sort,direction,search
    }
     const data=await companyrpstry.get(options)
     const count=await companyrpstry.getcount(options)
     const response={
        count,
        data
     }
  res.json(response)
}
const post=async(req,res)=>{
    await companyrpstry.create (req.body)
    res.status(201)
    res.send('created')
}
const rrr=async(req,res)=>{
    const id=req.params.id;
    await companyrpstry.remove(id)
    res.status(201)
    res.send('')
}
const modify=async(req,res)=>{
    const id=req.params.id
     const data=req.body
     await companyrpstry.update(id,data)
     res.status(200)
     res.send('updated')
}
const modifyone=async(req,res)=>{
    const data=req.body
    const id=req.params.id
    await companyrpstry.patch(id,data)
     res.status(200).send('')
}
module.exports={
    read,post,rrr,modify,modifyone
}