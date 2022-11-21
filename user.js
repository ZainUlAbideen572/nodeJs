const express=require('express')
const app=express();
const mongoose=require('mongoose')
const bodyparser=require('body-parser')
mongoose.connect('mongodb://127.0.0.1:27017/users',()=>{
      console.log('sever is connected to db')
})
const port=5000;
const userroutes=require('./routes/userroute')
app.use(express.json())
app.use('/',userroutes)
app.listen(port,()=>{
    console.log('server is rrunning on'+port)
})