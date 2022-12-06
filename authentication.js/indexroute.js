const indexctrl=require('./indexctrl')
const express=require('express')
const router=express.Router();
router.get('/',indexctrl.get)
router.get('/home',indexctrl.read)
module.exports=router