var controller = require('./controller');
var express = require('express');
var router = express.Router();

var view = require('./views/send');
var model = require('../model/index');

controller.model = model;

router.use(function(req, res, next) {
	view.res = res;
	controller.view = view;
	res.locals.controller = controller;
	next();
})

router.get('/get_one/:id', (req, res) => {
	var id = Number(req.params.id);
	controller.get_one(id);
});
router.get('/get_all', (req, res) => {
	controller.get_all();
});

module.exports = router;
