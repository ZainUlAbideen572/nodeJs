const credsmodel=require('./../models/credmodel')
const create=(data)=>{
    const product=new credsmodel(data)
    return product.save()
}
const getbyemail=(email)=>{
    return credsmodel.findOne({email:email})
}
module.exports={
    create,getbyemail
}