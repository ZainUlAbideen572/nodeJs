const hydrpstry=require('./hydrpstry')
const get=async(req,res)=>{
    const page=+req.params.page
    const limit=+req.params.limit
    const search=req.query.search
    const data=await hydrpstry.get(page,limit,search)
    const count=await hydrpstry.getcount(search)
    const response={
        count:count,
        data:data
    }
    res.status(200)
    res.json(response)
}
const post=async(req,res)=>{
    const data=req.body
    await hydrpstry.post(data)
    res.status(201)
    res.send('created')
}
const remove=async(req,res)=>{
    const id=req.params.id
    await hydrpstry.remove(id)
    res.status(200)
    res.send('')

}
const update=async(req,res)=>{
    const id=req.params.id
    const data=req.body
    await hydrpstry.update(id,data)
    res.status(201)
    res.send('updated')
}
const patch=async(req,res)=>{
    const id=req.params.id
    const data=req.body
    await hydrpstry.patch(id,data)
    res.status(200)
    res.send('')
}
module.exports={
    get,post,remove,update,patch
}