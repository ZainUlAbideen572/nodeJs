const express=require('express')
const signupctrl=require('./signupctrl')
const router=express.Router()
router.post('/',signupctrl.post)
module.exports=router;