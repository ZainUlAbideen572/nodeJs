const productmodel = require('./../models/productsmodel')
const productrepository=require('./../repository/productrepository')
const hasValidationError=(err)=>{
    return err && err.message&& err.message.indexOf('validation failed')>-1
   
    }

class productctrl {
    async get(req, res) {
        const page=+req.params.page;
        const data=await productrepository.get(page)
        //product repository is responsiblefor writing data base code.
                res.status(200);
                res.json(data)

    }
    async post(req,res){
        try{
    await productrepository.save()
               res.status(201);
               res.send('created');
        }
        catch(err){
            if(hasValidationError){
                // if the error message contains string (validation failed) then if block will execute 
                res.status(400)
                res.send(err.errors)
            }else{

                res.status(500)
                res.send('intrenal server error')
            }
            }
        }

    
    async getbyid(req,res){
        const id=req.params.id
        const product=await productrepository.getbyid(id)
        res.json(product)
        res.status(200)
        return product.getbyid();

    }
    async remove(req,res){
        res.send('done')
        const id=req.params.id
        await productrepository.remove(id)
        res.status(200)

    }
    async update(req,res){
        const id=req.params.id
        const data=req.body
        await productrepository.update(id,data)
        res.status(200)
        res.send('Updated')
    }
    async patch(req,res){
        const id=req.params.id
        const data=req.body
        await productrepository.patch(id,data)
        res.status(200)
        res.send('')
        
}
}
module.exports = new productctrl();
// validations modify the structure of data it will throw an error when we dont follow the strucutre of data.
// pagination setup the limit of displaying number of records in the page it is very fast.