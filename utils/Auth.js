const jwt=require('jsonwebtoken')
function basicAuth(req, res, next) {

    if (!req.headers.authorization) {
        res.status(401);
        res.send('Unauthorized');
        return;
    }

    const tokens = req.headers.authorization.split(' ');
    const creds = tokens[1];


    let buff = new Buffer(creds, 'base64');
    let decodedCreds = buff.toString('ascii');

    const credTokens = decodedCreds.split(':');

    const [username, password] = credTokens;

    if (username === 'admin' && password === 'password') {
        next();
    } else {
        res.status(401);
        res.send('Unauthorised');
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
  basicAuth,tokenAuth
}
