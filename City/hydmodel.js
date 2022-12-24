const mongoose=require('mongoose')
const schema=new mongoose.Schema({
    name:String,
    hotel:String,
    population:String
})
const model=mongoose.model('area',schema)
module.exports=model;