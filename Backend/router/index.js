const express = require('express');
const router = express.Router();
const homeController = require('../controller/home_controller');

router.get('/',homeController.home);
router.use('/add_work',require('./add_work'));
router.use('/delete_work',require('./delete_work'));

module.exports=router;