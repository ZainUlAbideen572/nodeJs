const mongoose=require('mongoose')
const schema=new mongoose.Schema({
    Name:String,
    Language:String,
    Chiefminister:String

})
const indiamodel= new mongoose.model('state',schema)
module.exports=indiamodel;
