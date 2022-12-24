const mongoose=require('mongoose')
const schema=new mongoose.Schema({
    Name:{type:String},
    Origin:{type:String},
    Price:{type:String}
})
const model=new mongoose.model('food',schema)
module.exports=model;