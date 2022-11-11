const familyctrl=require('./../controllers/familyctrl')
const express=require('express')
const router=express.Router()
router.get('/',familyctrl.get)
router.post('/',familyctrl.post)
router.delete('/',familyctrl.remove)
router.patch('/:id',familyctrl.patch)
module.exports=router;