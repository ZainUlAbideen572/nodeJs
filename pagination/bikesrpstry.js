const bikesmodel=require('./bikesmodel')
const get=()=>{
    return bikesmodel.find({})
}
const create=(data)=>{
    const product=new bikesmodel(data)
    return product.save()
}
const remove=(id)=>{
    return bikesmodel.remove({_id:id})
}
const update=(id,data)=>{
    return bikesmodel.updateOne({_id:id},{$set:{
        Name:data.name,
        price:data.price,
        discount:data.discount,
        company:data.company
    }})
}
module.exports={
    get,create,remove,update
}