const mongoose=require('mongoose')
const schema=new mongoose.Schema({
      name:String,
      Age:Number,
      weight:Number,
      pay:String
})
const model=new mongoose.model('family',schema)
module.exports=model;