const jwt=require('jsonwebtoken')
function basicauth(req,res,next){
    // credentials has to be sent in headers 
    // in headers there will be authorization header which convert username and password into base64 string and append basic
    const tokens=req.headers.authorization.split(' ')
    const creds=tokens[1]
    let buff=new Buffer(creds,'base64')
    let  decodecreds=buff.toString('ascii')
    const credTokens=decodecreds.split(':')
    console.log(credTokens)
    const[username,Password]=credTokens
    if(username=='mdzayan'&& Password=='12345678'){
        next();
    }else{

        res.status(401)
        res.send('unauthorised')
    }
}

    function tokenAuth(req,res,next){
        const tokens=req.headers.authorization.split('')
        const auth=tokens[1]
        const valid=jwt.verify(auth,'secret')
        if(valid){
            next();
        }
        else{
            res.status(401)
            res.send('unauthorised')
        }
    }

module.exports={
  basicauth,tokenAuth
}
