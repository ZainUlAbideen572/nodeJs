const sortingmodel=require('./sorting model')
const get=()=>{
    return sortingmodel.find({})
}
const create=(data)=>{
    const product=new sortingmodel(data)
    return product.save()
}
const remove=(id)=>{
    return sortingmodel.delete({_id:id})
}
const update=(id,data)=>{
    return sortingmodel.updateOne({_id:id},{$set:{
        product:data.product,
    company:data.company,
    price:data.price,
    discount:data.discount
    }})
}
module.exports={
    get,create,remove,update
}