const mongoose=require('mongoose')
const schema=new mongoose.Schema({
    Name:String,
    fees:String,
    tech:String

})
const model=new mongoose.model('itcourses',schema)
module.exports=model;