const userrepo=require('./../repository/userepo')
const bcrypt=require('bcrypt')
class userctrl{
     async get(req,res){
        const page=+req.params.page||1
        const limit=+req.params.page||5

        
        const sort=req.query.sort
        const direction=req.query.direction||1
        const search=req.query.search|''
        const data=await userrepo.get(page,limit,sort,direction)
         const count=await userrepo.count()
         const response={
             count,
            data

         }
         res.status(200)
         res.json(response)
    }
    async post(req,res){
        const data=req.body
        await userrepo.save(data)
        res.status(200)
        res.send('')
    }
    async remove(req,res){
        const id=req.params.id
        await userrepo.remove(id)
        res.status(200)
        res.send('')

    }
    async update(req,res){
        const data=req.body
        const id=req.params.id
        await userrepo.update(id,data)
        res.status(200)
        res.send('')


    }

    }
module.exports=new userctrl();
