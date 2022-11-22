const express=require('express')
const app=express();
const mongoose=require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/uptosorting',()=>{
    console.log('connected to db')
})
const morgan=require('morgan')
const fs=require('fs')
const path=require('path')
const port=1000;
const filepath=path.join(__dirname,'logs','request.log')
const filestream=fs.createWriteStream(filepath,{flags:'a'})
const sortingroutes=require('./upto sorting/sortingroutes')
app.use(morgan('combined',{stream:filestream}))
app.use('/api',sortingroutes)
app.listen(port,()=>{
    console.log('server is running on'+port)
})