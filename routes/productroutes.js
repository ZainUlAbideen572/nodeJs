const express = require('express')
const router = express.Router();
const productctrl = require('./../controllers/productctrl');
router.get('/page/:page', productctrl.get)
router.post('/',productctrl.post)
router.get('/:id',productctrl.getbyid)
router.delete('/:id',productctrl.remove)
router.put('/:id',productctrl.update)
router.patch('/:id',productctrl.patch)
module.exports = router;