const mongoose=require('mongoose')
const schema=mongoose.Schema({
    Name:{type:String},
    email:{type:String},
    Password:{type:String,required:true}
})
const model=mongoose.model('nodes',schema)
module.exports=model;