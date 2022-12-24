const mongoose=require('mongoose')
const schema=mongoose.Schema({
    Name:{type:String},
    email:{type:String,unique:true},
    Password:{type:String}
})
const model=mongoose.model('nodes',schema)
module.exports=model;