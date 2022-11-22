const mongoose=require('mongoose')
const schema=new mongoose.Schema({
    product:String,
    company:String,
    price:Number,
    discount:Number
})
const model=new mongoose.model('faang',schema)
module.exports=model;