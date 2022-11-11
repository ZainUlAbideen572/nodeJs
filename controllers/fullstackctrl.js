const fullstackrepository=require('./../repository/fullstackrepository')
class fullstackctrl{
    async get(req,res){
        const data=await fullstackrepository.get()
        res.json(data)
        res.status(200)
    }
    async post(req,res){
        const data=req.body
        await fullstackrepository.save(data)
         res.send('created')
        res.status(200)

}
  async remove(req,res){
        const id=req.params.id
        await fullstackrepository.remove(id)
        res.send('')
        res.status(200)
  }
  async put(req,res){
    const data=req.body;
    const id=req.params.id
    await fullstackrepository.update(id,data)
    res.status(200)
    res.json('')
  }
}
module.exports=new fullstackctrl();