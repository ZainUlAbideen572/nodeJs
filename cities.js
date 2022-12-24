const http=require('http')
const express=require('express')
const bodyparser=require('body-parser')
const morgan=require('morgan')
const cityroute=require('./city/cityroute')
const app=express();
const port=9000
const basicauth=require('./utils/Auth')
app.use(express.json())
app.use(morgan('combined'))
app.use(basicauth.basicAuth)
app.use('/',cityroute)
app.listen(port,()=>{

    console.log('server ie running on'+port)
})