const express=require('express')
const app=express();
const path=require('path')
const fs=require('fs')
const morgan=require('morgan')
const auth=require('./utils/Auth')
const bodyparser=require('body-parser')
const mongoose=require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/MNC',()=>{
    console.log('connected to db')
})
const companyroutes=require('./routes/companyroutes')
const port=2000;
app.use(bodyparser.json())
app.use(morgan('combined'))
app.use(auth.basicauth)
app.use('/',companyroutes)
app.listen(port,()=>{
    console.log('server is running on'+port)
})