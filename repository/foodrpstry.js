const foodmodel=require('../models/Foodmodel')
const get=()=>{
    return foodmodel.find()
}
const post=(data)=>{
    const product=new foodmodel(data)
    return  product.save()
}
const remove=(id)=>{
    return foodmodel.remove({_id:id})
}
module.exports={
    get,post,remove
}