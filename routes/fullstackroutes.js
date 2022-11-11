const express=require('express')
const router=express.Router()
const fullstackctrl=require('./../controllers/fullstackctrl')
router.get('/',fullstackctrl.get)
router.post('/',fullstackctrl.post)
router.delete('/:id',fullstackctrl.remove)
router.put('/:id',fullstackctrl.put)
module.exports=router;
