const signupmodel=require('./Signupmodel')
const create=(data)=>{
    const product=new signupmodel(data)
    return product.save()
}
module.exports={
    create
}