const express=require('express')
const mongoose=require('mongoose')
const app=express();
mongoose.connect('mongodb://127.0.0.1:27017/family',()=>{
    console.log('connected to db')
})
const familyroutes=require('./routes/familyroutes')
const port=7000
app.use(express.json())
app.use('/api/family',familyroutes)
app.listen(port,()=>{
    console.log('server is running on'+port)
})