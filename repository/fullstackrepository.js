const fullstackmodel=require('./../models/fullstackmodel')
 const get=()=>{
     return fullstackmodel.find({})
 }
 const save=(data)=>{
    const f1=new fullstackmodel(data)
    return f1.save()

 }
 const remove=(id)=>{
       return fullstackmodel.remove({_id:id})
 }
 const update=(id,data)=>{

    return fullstackmodel.update({_id:id},{$set:{
        Name:data.Name,
        fees:data.fees,
        tech:data.tech
    }})


}

const patch=(id,data)=>{
    delete data._id;
    const updateobj={};
    for(let key in updateobj){
        updateobj[key]=data[key]
    }
    return fullstackmodel.updateOne({_id:id},{$set:updateobj})
}


 module.exports={
    get,save,remove,update,patch
 }