const loginmodel=require('../models/loginmodel')
const create=(data)=>{
    const f1=new loginmodel(data)
    return f1.save()
}
const getbyemail=(email)=>{
    return loginmodel.findOne({email:email})
}

module.exports={
    create,getbyemail
}