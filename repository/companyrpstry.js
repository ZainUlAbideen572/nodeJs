const companymodel=require('../models/companymodel');
const sortby=(sort)=>{
     switch(sort){
        case 'origin':
            return 'origin'
            case 'Name':
                return 'Name'
        case 'default':
            return 'update date'
     }
}
const sortbydirection=(direction)=>{
    switch(direction){
        case 'asc':
            return 1
            case 'desc':
                return -1;
                default:
                    return 1;
    }
}
const get=(options)=>{
    const {page,limit,search,sort,direction}=options
    const rowstoskip=(page-1)*5
    const filter={
        $or:[
            {Name:search},
            {origin:search}
        ]
    }
    return companymodel.find(filter)
    .skip(rowstoskip)
    .limit(limit)
    .sort({[sortby(sort)]:sortbydirection(direction)})
}
const getcount=(options)=>{
    const { search }=options
    const filter={
        $or:[
            {Name:search},
            {origin:search}
        ]
    };
    return companymodel.count(filter)
}
const create=(data)=>{
    const product=new companymodel(data)
    return product.save()
}

const remove=(id)=>{
    return companymodel.remove({_id:id});

}
const update=(id,data)=>{
    return  companymodel.update({_id:id},{$set:{
        Name:data.Name,
        asssets:data.asssets,
        origin:data.origin
    }})
}
const patch=(id,data)=>{
    delete data._id;
    const updateobj={}
    for(let key in updateobj){
        updateobj[key]=data[key]
    }
    return companymodel.updateOne({_id:id},{$set:updateobj})
}

module.exports={
    get,create,remove,update,patch,getcount
}