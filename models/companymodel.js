const mongoose=require('mongoose')
const schema=new mongoose.Schema({
    Name:{type:String},
    assests:{type:Number},
    origin:{type:String}
})
const model=new mongoose.model('Itcompany',schema)
module.exports=model;