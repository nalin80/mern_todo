const express = require('express');
const router = express.Router();

const delete_controller = require('../controller/delete_work_controller');

router.get('/',delete_controller.delete_list);

module.exports=router;