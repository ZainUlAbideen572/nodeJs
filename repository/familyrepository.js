const familymodel=require('./../models/familymodel')
const  get=()=>{
    return familymodel.find()
}
const save=(data)=>{
    const f1=new familymodel(data)
    return f1.save()
}
const remove=()=>{
       return familymodel.removeone({id})
}

module.exports={
    get,remove,save
}