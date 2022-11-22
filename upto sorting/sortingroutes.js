const sortingctrl=require('./sorting ctrl')
const express=require('express')
const router=express.Router()
router.get('/',sortingctrl.read)
router.post('/',sortingctrl.post)
router.put('/:id',sortingctrl.modify)
router.delete('/:id',sortingctrl.rrr)
module.exports=router