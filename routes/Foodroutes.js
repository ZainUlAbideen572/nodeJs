const foodctrl=require('../controllers/Foodctrl')
const express=require('express')
const router=express.Router()
router.get('/',foodctrl.get)
router.post('/',foodctrl.post)
router.delete('/:id',foodctrl.remove)
module.exports=router