const express=require('express');
const router=express.Router();
// second line states that instance of router has created
const homectrl=require('./../controllers/homectrl')
router.get('/',homectrl.home)
router.get('/books',homectrl.get)
router.post('/books',homectrl.post)
router.get('/books/:id',homectrl.getbyid)
router.delete('/books/:id',homectrl.remove)
router.put('/books/:id',homectrl.put)
router.patch('/books/:id',homectrl.patch)
module.exports=router;