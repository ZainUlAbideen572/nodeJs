const express=require('express')
const app=express();
const port=3000;
const filmyroutes=require('./routes/filmyroutes')
app.listen(port,()=>{
    console.log('sever is runing on'+port)
}) 
app.use(express.json())
app.use('/',filmyroutes)