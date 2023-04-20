const path = require('path');
const express = require('express');
const User = require('../models/user');
const adminController = require('../controller/user');

const router = express.Router();


router.get('/user', adminController.getAddProduct);
router.post('/user', adminController.postAddProduct);




router.get('/userlist', adminController.getUserList);




router.post('/edit',adminController.getEditPage)



 router.post('/save',adminController.postEditPage)

router.post('/delete',adminController.postDeleteProduct);
module.exports = router;
