const companymodel=require('../models/companymodel');
const get=()=>{
    return companymodel.find({},{_id:0})
}
const create=(data)=>{
    const product=new companymodel(data)
    return product.save()
}
module.exports={
    get,create
}