const mongoose=require('mongoose')
const schema=new mongoose.Schema({
    Name:String,
    price:Number,
    discount:Number,
    company:String
})
const bikesmodel= mongoose.model('bike',schema)
module.exports=bikesmodel