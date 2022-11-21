const mongoose=require('mongoose')
const schema=new mongoose.Schema({

    Name:String,
    email:String,
    college:String

})
const model=new mongoose.model('user',schema)
module.exports=model;