const foodmodel=require('../models/Foodmodel')
const get=()=>{
    return foodmodel.find()
}
const post=(data)=>{
    const product=new foodmodel(data)
    return  product.save()
}
module.exports={
    get,post
}