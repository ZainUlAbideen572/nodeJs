const express=require('express')
const app=express()
const mongoose=require('mongoose')
const morgan=require('morgan')
mongoose.connect('mongodb://127.0.0.1:27017/engines',()=>{console.log('connected to db')})
const port=1000;
const bikeroutes=require('./pagination/bikeroutes')
app.use(morgan('combined'))
app.use('/api',bikeroutes)
app.listen(port,()=>{
    console.log('server is running on'+port)
})
