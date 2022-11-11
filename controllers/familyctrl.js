const familyrepository=require('./../repository/familyrepository')
class familyctrl{
    async get(req,res){
        const data=await familyrepository.get()
        res.status(200)
        res.json(data)
    }
    async post(req,res){
        const data=req.body;
    
            await familyrepository.save(data)
        res.status(201)
        res.send('created')
        }
    async remove(req,res){
        await familyrepository.remove(id)
        const id=req.params.id
        res.status(200)
        res.send('')
    }
}
module.exports=new familyctrl();


