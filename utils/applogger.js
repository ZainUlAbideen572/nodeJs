 const bunyan=require('bunyan')
 const path=require('path')
const applogger=bunyan.createLogger({
    name:"api",
    streams:[
        {
        path:path.join(__dirname,'..','logs','app.log')
    }
]
})
module.exports=applogger;