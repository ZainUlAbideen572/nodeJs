const express=require('express')
const app=express();
const port=3000;
// function fn(req,res,next){
//     const tokens=req.headers.authorization.split('');
//     const creds=tokens[1];
//     let buff=new Buffer(creds,'base64')
//     let  decodecreds=buff.toString('ascii')
//     const credtokens=decodecreds.split(':')
//     console.log(credtokens)
//     const[username,Password]=credtokens
//     if(username=='mdzayan' && Password=='zayan5728'){
//         next();
//     }else{
//         res.status(401)
//         res.send('unauthorized')
//     }

// }
// app.use(fn)
const Auth=require('./utils/Auth')
app.use(Auth.basicauth)
const filmyroutes=require('./routes/filmyroutes')
app.use(express.json())
app.use('/',filmyroutes)
app.listen(port,()=>{
    console.log('sever is runing on'+port)
}) 