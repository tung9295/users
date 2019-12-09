var express = require('express');
var router = express.Router();
var controller = require('../controllers/user_controller');
router.get('/list', controller.index);

module.exports = router;