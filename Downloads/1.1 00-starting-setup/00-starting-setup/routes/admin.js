const path = require('path');

const express = require('express');

const productsController=require('../controllers/products');
const errorController=require('../controllers/error')
const router = express.Router();



// /admin/add-product => GET
router.get('/add-product',productsController.getAddProduct );

// /admin/add-product => POST
router.post('/add-product', productsController.postAddProduct);

router.use(errorController.getError);

module.exports=router;