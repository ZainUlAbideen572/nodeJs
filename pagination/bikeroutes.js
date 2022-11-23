const bikectrl=require('./bikectrl')
const express=require('express')
const router=express.Router();
router.get('/',bikectrl.read)
router.post('/',bikectrl.post)
router.delete('/:id',bikectrl.remove)
router.put('/:id',bikectrl.modify)
module.exports=router;