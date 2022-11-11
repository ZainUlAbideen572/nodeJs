const express=require('express');
const router=express.Router();
const filmyctrl=require('./../controllers/filmyctrl')
router.get('/',filmyctrl.home)
router.get('/films',filmyctrl.get)
router.post('/',filmyctrl.post)
router.put('/:id',filmyctrl.put)
router.delete('/:id',filmyctrl.remove)
router.patch('/:id',filmyctrl.patch)
module.exports=router