const foodrpstry=require('../repository/foodrpstry')
const get=async(req,res)=>{
    const data= await foodrpstry.get()
     res.status(200)
     res.json(data)
}
const post=async (req,res)=>{
    const data=req.body
    console.log(data)
     await foodrpstry.post(data)
    res.status(200)
    res.send('created')
}
const remove=async(req,res)=>{
    const id=req.params.id
    await foodrpstry.remove(id)
    res.status(200)
    res.send('removed')
}
module.exports={
    get,post,remove
}