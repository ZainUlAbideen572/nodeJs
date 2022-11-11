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

    return fullstackmodel.updateOne({_id:id},{$set:{
        Name:data.Name,
        fees:data.fees,
        tech:data.tech
    }

    })
}




 module.exports={
    get,save,remove,update
 }