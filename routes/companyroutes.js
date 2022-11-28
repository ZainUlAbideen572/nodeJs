const companyctrl=require('../controllers/companyctrl')
const express=require('express')
const router=express.Router();
router.get('/',companyctrl.read)
router.post('/',companyctrl.post)
module.exports=router;