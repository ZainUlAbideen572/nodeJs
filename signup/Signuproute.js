const express=require('express')
const signupctrl=require('./signupctrl')
const router=express.Router()
router.post('/',signupctrl.signup)
router.post('/signin',signupctrl.signin)
module.exports=router;