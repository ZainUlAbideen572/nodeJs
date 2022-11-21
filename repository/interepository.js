const intermodel=require('./../models/intermodel')
const getsort=(sort)=>{
    switch(sort){
        case 'successrate':
            return 'successrate';
            default:
                return 'updateddate';
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

const get=(page,limit,sort,direction,)=>{
    const rowstoskip=(page-1)*limit
    const sortbyfield=getsort(sort)
    const sortdirection=sortbydirection(direction)

    return intermodel.find()
    .sort({[sortbyfield]:sortdirection})
    .skip(rowstoskip)
    .limit(limit)
    
    
}
const getcount=()=>{
    return intermodel.count();
}
const save=(data)=>{
    const student=new intermodel(data)
    return student.save()
}
const remove=(id)=>{
     return intermodel.deleteOne({_id:id})
}
const update=(id,data)=>{
    return intermodel.updateOne({_id:id},{$set:{
           Name:data.Name,
           fullform:data.fullform,
           oppurtinites:data.oppurtinites,
           successrate:data.successrate
    }})
}

const patch=(id,data)=>{
    delete data._id;
    const updateobj={}
    return intermodel.update({_id:id},{$set:updateobj})
}
module.exports={
    get,save,update,remove,patch,getcount
}