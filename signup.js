const express=require('express')
const app=express()
const mongoose=require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/signup',()=>{
    console.log('connected to db')
})
const port=3000;
const Signuproute=require('./signup/Signuproute')
app.use('/',Signuproute)
app.listen(port,()=>{
    console.log('server is running on'+port)
})
