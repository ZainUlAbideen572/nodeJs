const express=require('express')
const app=express()
const mongoose=require('mongoose')
mongoose.connect(' mongodb://127.0.0.1:27017/country',()=>{
    console.log('connected to db')
})
const bodyparser=require('body-parser')
const indiaroutes=require('./routes/indiaroutes')
const port=4000;
app.use(express.json())
app.use('/api',indiaroutes)
app.listen(port,()=>{
    console.log('server running on' +port)
})