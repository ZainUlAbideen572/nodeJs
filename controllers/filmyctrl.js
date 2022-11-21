const films=[
    {id:1,name:'srk',number:80},
    {id:2,name:'sk',number:70},
    {id:3,name:'aamir',number:30},
    
    
]
const applogger=require('./../utils/applogger')
const home=(req,res)=>{
    applogger.info('home ctrl is called')
    res.status(200);
    res.send('hello')
}
const get=(req,res)=>{
    res.status(200)
    res.json(films)
}
const post=(req,res)=>{
    const data=req.body
    films.push(data)
    res.send('created')
    res.status(201)
}
// get by id method is used for the details.
const getbyid=(req,res)=>{
//     const id=+req.params.id;
//     for(let i=0;i<films.length;i++){
//         if(films[i].id===id)
//         res.status(200)
//         return;
//     }
//     res.status(404)
//     res.send('not found')
}
const remove=(req,res)=>{
    const id=+req.params.id
    for(let i=0;i<films.length;i++){
        if(films[i].id===id){
            films.splice(i,1)
        }
    }
    res.status(204)
    res.send('')
}
const put=(req,res)=>{
    const id=+req.params.id
    const data=req.body
    for(let i=0;i<films.length;i++){
        if(films[i].id===id){
             films[i].name=data.name
            films[i].films=data.films
            res.status(204)
            res.send()
            return;
        

        }

    }
    res.status(404)
    res.send('not found')
}
const patch=(req,res)=>{
    const id=+req.params.id
    const data=req.body
    for(let i=0;i<films.length;i++){
        if(films[i].id===id){
            for(var key in data){
                films[i][key]=data[key]
                res.status(200)
                res.send('')
                return;

            }
        }
    }
    res.status(404).send

}
// put is fully update one,where as patch is partial one.
// we never update an id.
module.exports={
    home,get,post,getbyid,remove,put,patch
}
//  crud operations create read update(partially(patch),put(fully)) delete
// put,post,patch has the body user sending request as a body.

































































































































