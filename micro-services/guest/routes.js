var controller = require('./controller');

var express = require('express');
var router = express.Router();

router.get('/get_one/:id', controller.get_one);
router.get('/get_all', controller.get_all);

module.exports = router;
