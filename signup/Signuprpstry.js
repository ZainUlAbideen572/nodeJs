const model=require('./Signupmodel')
const create=(data)=>{
    const product=new model(data)
    return product.save()
}
const getbyemail=(email)=>{
    return model.findOne({email:email})
}
module.exports={
    create,
    getbyemail
}