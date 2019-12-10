var express = require('express');
var router = express.Router();

var controller = require('../controllers/user_controller');

router.get('/', controller.index);
router.get('/list', controller.index);
router.get('/search', controller.search);

module.exports = router;