const express=require('express')
const app=express();
const mongoose=require('mongoose')
const bodyparser=require('body-parser')
mongoose.connect('mongodb://127.0.0.1:27017/users',()=>{
      console.log('connected to db')
})
// .catch((err)=>{
// console.log('Not connected to db',err)
// })
const port=5000;
// const auth=require('./utils/Auth')
const userroutes=require('./routes/userroute')
const credroutes=require('./routes/credsroutes')
app.use(express.json())
// app.use(auth.tokenAuth)
 
//  app.use(auth.basicauth)
//  for everyproduct or route client has to validate in order to get the response.
app.use('/',userroutes)
app.use('/api',credroutes)
app.listen(5000,()=>{
    console.log('server is running on'+port)
})