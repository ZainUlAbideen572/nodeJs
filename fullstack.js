const express=require('express')
const mongoose=require('mongoose')
const app=express();
mongoose.connect('mongodb://127.0.0.1:27017/course',()=>{
    console.log('connected to db')
})
const port=8000
const fullstackroutes=require('./routes/fullstackroutes')
app.use(express.json())
app.use('/api/fullstack',fullstackroutes)
app.listen(port,()=>{
    console.log('server is running on'+port)
})