const mongoose=require('mongoose')
const schema=new mongoose.Schema({
    companyid:{type:String},
    subject:{type:String},
    message:{type:String},
    rating:{type:String},
     date:{
        type:Date,
        default:Date.now
     }

})
module.exports=mongoose.model('review',schema)