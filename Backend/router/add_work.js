const express = require('express');
const router = express.Router();

const add_controller = require('../controller/add_work_controller');

router.post('/',add_controller.add);

module.exports=router;