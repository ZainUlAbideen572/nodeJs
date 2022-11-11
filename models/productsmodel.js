const mongoose=require('mongoose');
// schema is Json object which defines the structure and contents of data
const schema=new mongoose.Schema({
    brand:{type:String,required:true,
    minlength:[3,"minlength3 characters"],maxlength:[20,"maximumlength20characters."]},
    model:String,
    price:{type:Number, required:true},
    discount:Number,
    date:{
      type:Date,
      default:Date.now
    }
    

    // whatever the dta is given will be stored in this format.
})
// schema generally we call it as structure. in database.
// mongoose is odm(object data modelling) library for mongodb
const model=mongoose.model('product',schema)
module.exports=model;