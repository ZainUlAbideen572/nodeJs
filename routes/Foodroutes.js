const foodctrl=require('../controllers/Foodctrl')
const express=require('express')
const router=express.Router()
router.get('/',foodctrl.get)
router.post('/',foodctrl.post)
module.exports=router