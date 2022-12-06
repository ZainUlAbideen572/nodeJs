const express=require('express')
const app=express();
const port=4000;
const bodyparser=require('body-parser')
const fs=require('fs')
const path=require('path')
const morgan=require('morgan')
const mobileroutes=require('./routes/mobileroutes')
const auth=require('./utils/Auth')
app.use(express.json())
const filepath=path.join(__dirname,'logs','request.log')
const filestream=fs.createWriteStream(filepath,{flags:'a'})
app.use(morgan('combined',{stream:filestream}))
// importing morgan and logging the combined information and passsing it to the filestream.

app.use(auth.basicAuth)
app.use('/',mobileroutes)
app.listen(port,()=>{
    console.log('server is rrunning on'+port)
})
// 2types of logger will be there request logger,application logger