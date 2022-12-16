const express=require('express')
const app=express();
const port=3000;
const bodyparser=require('body-parser')
const filmyroutes=require('./routes/filmyroutes')
app.use(express.json())
app.use('/',filmyroutes)
app.listen(port,()=>{
    console.log('sever is runing on'+port)
}) 