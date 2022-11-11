
const productmodel=require('./../models/productsmodel')
const get=(page)=>{
    const rowstoskip=(page-1)*10
    return productmodel.find({},{price:0},{createddate:0})
    .skip(rowstoskip)
    .limit(1)

}
const save=(data)=>{
        const product=new productmodel(data);
        return product.save();
}
const getbyid=id=>{
 return productmodel.findById(id)
}
const remove=(req,res)=>{
    return productmodel.removeone((id));
}
const update=(id,data)=>{
    return productmodel.updateOne({_id:id},{$set:{
        brand:data.brand,
    model:data.model,
    price:data.price,
    discount:data.discount,
    }
}
    )}

    

    const patch=(id,data)=>{
        delete data._id;
        const updateobj={};
        for(let key in data){
            updateobj[key]=data[key]
        }
        return productmodel.updateOne({_id:id},{
            $set:updateobj
        })
    
    }

module.exports={
    get,save,getbyid,remove,update,patch

}
// product repository itself is an object inside it it has method and method is returning a promise.
// prodcut 