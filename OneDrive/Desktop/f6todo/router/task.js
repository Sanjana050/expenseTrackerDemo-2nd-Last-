const path = require('path');
const express = require('express');
const User = require('../models/task');
const adminController = require('../controllers/task');

const router = express.Router();


router.get('/task', adminController.getAddTask);
router.post('/task', adminController.postAddTask);





module.exports = router;
