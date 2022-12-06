const express=require('express')
const app=express();
const port=3000;
const indexroute=require('./authentication.js/indexroute')
app.use(express.json())
function fn(req,res,next){
    const tokens=req.headers.authorization.split('')
    const creds=tokens[1]
    let buff=new Buffer(creds,'base64')
    let decodecreds=buff.toString('ascii')
    const credTokens=decodecreds.split(':')
    const[userName,password]=credTokens
    if(userName==='admin'  && password==='password'){
        next();
    }else{

        res.status(401)
        res.send('unauthorised')
    }
}
app.use(fn)
app.use('/',indexroute)
app.listen(port,()=>{
    console.log('sever is runing on'+ port)
}) 