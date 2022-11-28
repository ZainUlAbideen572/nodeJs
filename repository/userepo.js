const usermodel=require('../models/usermodel')
const getsortby=(sort)=>{
    switch(sort){
        case'email':
        return "email"
        case 'name':
            return "name"
            case 'college':
                return 'college'

    }
}
const sortbydirecction=(direction)=>{
    switch(direction){
     case 'asc':
        return '1'
        case 'desc':
            return '-1'

    }
}


const get=(page,limit,sort,direction)=>{
    const rowstoskip=(page-1)*limit
    const sortbyfield=getsortby(sort)
    const sortdirection=sortbydirecction(direction)
    return usermodel.find({})
    .sort({[sortbyfield]:sortdirection})
    .skip(rowstoskip)
    .limit(limit)
}
const count=()=>{
    return usermodel.count()
}
const save=(data)=>{
    const product=new usermodel(data)
    return product.save()
}
 const remove=(id)=>{
    return usermodel.remove({_id:id})
 }
 const update=(id,data)=>{
    return usermodel.updateOne({_id:id},{$set:{
        
    Name:data.Name,
    email:data.email,
    college:data.college
    }})
 }

 module.exports={
    get,save,remove,count,update
 }
