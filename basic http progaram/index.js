const http=require('http');
function handler(req,res){
    switch(req.url){
        case '/':
            res.write('books');
            res.end();
            case '/books':
                res.write('authors')
                res.end();
    }
}
const server=http.createServer(handler);
// when some user making request node js takes that request and pass that  handler functuon
const port=4000;
server.listen(port,()=>{
    console.log('server is running on '+''+port);
})

