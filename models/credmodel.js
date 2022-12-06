const mongoose=require('mongoose')
const schema=new mongoose.Schema({
    Name:{type:String},
    email:{type:String},
    Password:{type:String}
})
const model=new mongoose.model('detail',schema)
module.exports=model