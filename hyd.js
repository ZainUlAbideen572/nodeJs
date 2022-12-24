const express=require('express')
const app=express();
const bodyparser=require('body-parser')
const mongoose=require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/Hyderabad',()=>{
    console.log('connected to db')
})

const morgan=require('morgan')
const port=9000
const hydroutes=require('./City/hydroute')
app.use(express.json())
app.use(morgan('combined'))
app.use('/',hydroutes)
app.listen(port,()=>{
    console.log('server is running on' +port)
})