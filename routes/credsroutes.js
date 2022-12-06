const credsctrl=require('./../controllers/credsctrl')
const express=require('express')
const router=express.Router();
router.post('/post',credsctrl.signup)
router.post('/signin',credsctrl.signin)
module.exports=router