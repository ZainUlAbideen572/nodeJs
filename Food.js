const express=require('express')
const app=express();
const mongoose=require('mongoose')
const bodyparser=require('body-parser')
const foodroutes=require('./routes/Foodroutes')
const morgan=require('morgan')
const port=5000
mongoose.connect('mongodb://127.0.0.1:27017/cuisines',()=>{
    console.log('connected to db')
})
app.use(express.json())
app.use(morgan('combined'))
app.use('/',foodroutes)
app.listen(port,()=>{
    console.log('server is running on '+port)
})