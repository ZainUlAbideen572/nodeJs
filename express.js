const express=require('express');
const app=express();
const mongoose=require('mongoose');
const homerouter=require('./routes/homerouter')
// second line states that we have registred the router
const productroutes=require('./routes/productroutes')
const bodyparser=require('body-parser');
mongoose.connect('mongodb://127.0.0.1:27017/products',()=>{console.log('connected to db')})
// body parser is used in order to parse the body in suitable format.
const port=4000;
app.use(express.json())
app.use('/',homerouter)
app.use('/api/products',productroutes)
app.listen(port,()=>{
    console.log('server is running on'+''+port)
})
// app.get('/',(req,res)=>{
    //      res.send('hi expess');
    // })
    // app.get('/books',(req,res)=>{
        //     res.send('hi zayan')
        // })
        // app.get('/authors',(req,rees)=>{
//      res.send('products')
// })

