const express=require('express')
const app=express();
const port=4000;
const bodyparser=require('body-parser')
const fs=require('fs')
const path=require('path')
const morgan=require('morgan')
const mobileroutes=require('./routes/mobileroutes')
app.use(express.json())
const filepath=path.join(__dirname,'logs','request.log')
const filestream=fs.createWriteStream(filepath,{flags:'a'})
app.use(morgan('combined',{stream:filestream}))
// importing morgan and logging the combined information and passsing it to the filestream.
function auth(req,res,next){
    const tokens=req.headers.authorization.split()
    const creds=tokens[1]
    let buff=new Buffer(creds,'base64')
    let  decodecreds=buff.toString('ascii')
    const credtokens=decodecreds.split(':')
    console.log(credtokens)
    const[username,password]=credtokens
    if(username=='raquib'&& password=='raquib38'){
        next();
    }
    else{
        res.status(401)
        res.send('unauthorised')
    }
    
}
app.use(auth)
app.use('/',mobileroutes)
app.listen(port,()=>{
    console.log('server is rrunning on'+port)
})
// 2types of logger will be there request logger,application logger