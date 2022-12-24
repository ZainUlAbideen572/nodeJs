const hydmodel=require('./hydmodel')


const get=(page,limit,search)=>{
    const rowstoskip=(page-1)*limit
    const filter={
        $or:[
               {population:search},
               {hotel:search}
        ]
    }
    return hydmodel.find(filter)
    .skip(rowstoskip)
    .limit(limit)
}
const getcount=(search)=>{
    const filter={
        $or:[
            {population:search},
                {hotel:search}
        ]
    }
   return hydmodel.count(filter)
}
const post=(data)=>{
    const product=new hydmodel(data)
    return product.save()
}
const remove=(id)=>{
    return hydmodel.remove({_id:id})
}
const update=(id,data)=>{
    return hydmodel.updateOne({_id:id},{$set:{
        name:data.name,
        hotel:data.hotel,
        population:data.population

    }})
}
const patch=(id,data)=>{
    const updateobj={}
    for(var keys in updateobj){
        updateobj[keys]=data[keys]
    }
    return hydmodel.updateOne({_id:id},{$set:{updateobj}})
}
module.exports={
    get,post,remove,update,patch,getcount
}