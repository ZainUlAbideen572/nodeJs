const hydctrl=require('./hydctrl')
const express=require('express')
const router=express.Router()
router.get('/page/:page/limit/:limit',hydctrl.get)
router.post('/',hydctrl.post)
router.delete('/:id',hydctrl.remove)
router.put('/:id',hydctrl.update)
router.patch('/:id',hydctrl.update)
module.exports=router;