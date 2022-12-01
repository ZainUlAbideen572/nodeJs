const express=require('express');
const multer=require('multer')
const storage=multer.diskStorage({
    destination:'uploads/',
    filename: function(req,file,cb){
        console.log(file.originalname)
        const prefix=Date.now();
        cb(null,prefix +'-' +'uploads/'+file.originalname)
    }
})
const  upload=multer({
    storage:storage
})
const router=express.Router();
const userctrl=require('./../controllers/userctrl')
router.get('/',userctrl.get)
router.get('/page/:page/limit/:limit ',userctrl.get)
router.post('/',upload.single('image'),userctrl.post)
router.delete('/:id',userctrl.remove)
router.put('/:id',userctrl.update)
module.exports=router