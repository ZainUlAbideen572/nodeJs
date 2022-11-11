const express=require('express')
const books1=[
    {id:1,name:'refractring'},
    {id:2,name:'clone'},
    {id:4,name:'physics',price:200}
]
const home=(req,res)=>{
    res.status(200);
    res.send('whatsup')
}
const get=(req,res)=>{
    res.status(200);
    res.json(books1)
}
const post=(req,res)=>{
    const data=req.body;
    res.status(201);
    books1.push(data)
    res.send('created')
    console.log(books1)
}
const getbyid=(req,res)=>{
    const id=+req.params.id;
    // + operator in javascript converts string into number or parseint method can also be used.
    for(let i=0;i<books1.length;i++){
        if(books1[i].id===id){
            res.status(200);
            res.json(books1[i])
            return;
        }
        res.status(404);
        res.send('not found')
    }

}
const remove=(req,res)=>{
    const id=+req.params.id
    for(let i=0;i<books1.length;i++){
        if(books1[i].id===id){
            books1.splice(i,1)
            res.status(204).send
        }
    }

    res.status(404).send();
}
const put=(req,res)=>{
    const id=+req.params.id;
    const data=req.body
    for(let i=0;i<books1.length;i++){
        if(books1[i].id===id){
            books1[i].name=data.name
            books1[i].id=data.id
            res.status(204);
            res.send();
            return;

        }
    }
    res.status(404);
    res.send('not found')

}
const patch=(req,res)=>{
    const id=+req.params.id;
    const data=req.body;

    for(let i=0;i<books1.length;i++){
        if(books1[i].id===id){
            for(let key in data){
                books1[i][key]=data[key];
            }
            res.status(204);
                res.send();
                return;
        }

        res.status(404).send();

    }
   

}
module.exports={
    post,
    get,
    home,
    getbyid,
    remove,
    put,
    patch
}
// crud operrations get post put patch delete
// put post patch have body
// status code:it is one of the standard conventions used in the world irrespective of the developer it doesnt visible for us
// 1--information/request is pending
// 2-- succeesfully passed information
// 3--redirects web page
// 4-- clinet error
// 5-- sever error