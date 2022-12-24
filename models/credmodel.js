const mongoose=require('mongoose')
const schema=new mongoose.Schema({
    name:{type:String},
    email:{type:String,unique:true},
    password:{type:String}
})
const model=mongoose.model('detail',schema)
module.exports=model