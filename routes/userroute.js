const express=require('express');
const router=express.Router();
const userctrl=require('./../controllers/userctrl')
router.get('/',userctrl.get)
router.get('/page/:page/limit/:limit ',userctrl.get)
router.post('/',userctrl.post)
router.delete('/:id',userctrl.remove)
router.put('/:id',userctrl.update)
module.exports=router