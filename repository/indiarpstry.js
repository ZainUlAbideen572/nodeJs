const indiamodel=require('./../models/indiamodel')
const get=()=>{
    return indiamodel.find({})
}
const create=(data)=>{
    const model=new indiamodel(data)
    return model.save()
}
module.exports={
    get,create
}