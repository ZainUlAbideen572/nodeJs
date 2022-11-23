const mongoose=require('mongoose')
const schema=new mongoose.Schema({
    Name:String,
    price:Number,
    discount:Number,
    company:String
})
const model=new mongoose.model('bike',schema)
module.exports=model