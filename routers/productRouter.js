const express = require('express');
const router = express.Router()
const createProduct=require('../controllers/createProduct')
const getProduct=require('../controllers/getProduct')
const getallProduct=require('../controllers/getallProduct')
const deleteProduct=require('../controllers/deleteProduct')
const searchProduct=require('../controllers/searchProduct.js')
const updateByproductId=require('../controllers/updateByproductId.js')
const updateVarient=require('../controllers/updateVarient.js')
router.post('/createproduct',createProduct)
router.get('/getproduct/:id',getProduct)
router.get('/getallproduct',getallProduct)
router.delete('/deleteproduct/:id',deleteProduct)
router.get('/search',searchProduct);
router.put('/updatebyproductid/:id',updateByproductId)
router.put('/:productId/variants/:variantId',updateVarient)


module.exports = router;