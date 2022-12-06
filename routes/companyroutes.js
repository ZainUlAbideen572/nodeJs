const companyctrl=require('../controllers/companyctrl')
const express=require('express')
const router=express.Router();
router.get('/',companyctrl.read)
router.post('/',companyctrl.post)
router.delete('/:id',companyctrl.rrr)
router.put('/:id',companyctrl.modify)
router.patch('/:id',companyctrl.modifyone)
module.exports=router;