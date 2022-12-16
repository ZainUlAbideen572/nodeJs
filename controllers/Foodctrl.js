const foodrpstry=require('../repository/foodrpstry')
const get=async(req,res)=>{
     await foodrpstry.get()
     res.status(200)
     res.json(data)
}
const post=async(req,res)=>{
    const data=req.body
    await foodrpstry.post(data)
    res.status(201)
    res.send('created')
}
module.exports={
    get,post
}