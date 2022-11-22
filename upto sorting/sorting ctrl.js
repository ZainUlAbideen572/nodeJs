const sortingrpstry=require('./sortingrpstry')
const read=async(req,res)=>{
    try{
    const data=await sortingrpstry.get()
    res.json(data)
    res.status(200)
    }
    catch(err){
        
    }
}
const post=async(req,res)=>{
    const data=req.body
    await sortingrpstry.create(data)
    res.send('created')
    res.status(200)
}
const rrr=async(req,res)=>{
    const id=+req.params.id
    await sortingrpstry.remove(id)
    res.send('deleted')
    res.status(200)
    
}
const modify=async(req,res)=>{
    const id=+req.params.id
    const data=req.body
    await sortingrpstry.update(id,data)
    res.send('updated')
    res.status(200)

}
module.exports={
    read,rrr,modify,post
}