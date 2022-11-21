const mobile=[
    {id:1,brand:'realme',price:10000},
    {id:2,brand:'redmi',price:20000},
    {id:3,brand:'oppo',price:30000}
]

const home=(req,res)=>{
    res.status(200)
    res.send('mobile show room')
}
const get=(req,res)=>{
    res.status(200)
    res.json(mobile)
}
const post=(req,res)=>{
    const data=req.body
    res.status(200)
    res.send('created')
    mobile.push(data)
}
const remove=(req,res)=>{
    const id=+req.params.id
    for(i=0;i<mobile.length;i++){
        if(mobile[i].id===id){
        mobile.splice(i,1)
    
    }
    res.status(200)
    res.send('')
}
}
const put=(req,res)=>{
    const id=+req.params.id
    const data=req.body
    for(i=0;i<mobile.length;i++){
        if(mobile[i].id===id){
            mobile.price=data.price,
            mobile.brand=data.brand
        }
    }
    res.status(200)
    res.send('updated')
    return;
}
const patch=(req,res)=>{
    const id=+req.params.id
    const data=req.body
    for(i=0;i<mobile.length;i++){
        for(var key in data){
            if(mobile[i].id===id)
                {
                   mobile[key]=data[key]   
                }
                res.status(200)
                res.send('')
        }

    return;
    }
    
}
module.exports={
   home, get,post,remove,put,patch
}