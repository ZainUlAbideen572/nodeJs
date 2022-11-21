const mongoose=require('mongoose')
const schema=new mongoose.Schema({
    Name:{type:String ,required:true},
    password:{type:String,required:true},
    firstname:{type:String,required:true},
    email:{type:String,required:true}
    
})
const model=new mongoose.model('logins',schema)
module.exports=model