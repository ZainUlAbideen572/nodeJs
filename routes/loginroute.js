const express=require('express');
const router=express.Router();
const loginctrl=require('./../controllers/loginctrl')
router.post('/signup',loginctrl.get)
router.post('/signin',loginctrl.signin)
module.exports=router