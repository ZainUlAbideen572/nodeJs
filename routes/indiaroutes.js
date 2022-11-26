const indiactrl=require('./../controllers/indiactrl')
const express=require('express')
const router=express.Router();
router.get('/',indiactrl.get)
router.post('/',indiactrl.post)
module.exports=router