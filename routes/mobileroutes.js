const express=require('express');
const router=express.Router();
const mobilectrl=require('./../controllers/mobilectrl')
router.get('/',mobilectrl.home)
router.get('/mobiles',mobilectrl.get)
router.post('/',mobilectrl.post)
router.put('/:id',mobilectrl.put)
router.delete('/:id',mobilectrl.remove)
router.patch('/:id',mobilectrl.patch)
module.exports=router