var view = require('./views/send');
var model = require('../model');

var controller = {
	get_one: function(req, res) {
		var item = model.read(req.params.id);
		view.render_one(item);
	},
	get_all: function(req, res) {
		var allItems = model.getAll();
		view.render_all(allItems);
	}
};

module.exports = controller;