const express=require('express')
const app=express();
const mongoose=require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/userauthentication',()=>{
    console.log('connected to db')
})
const port=2000;
const loginroutes=require('./routes/loginroute')
app.use(express.json())
app.use('/api',loginroutes)
app.listen(port,()=>{
    console.log('sever is runing on'+port)
}) 