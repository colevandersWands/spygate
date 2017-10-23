var view = {
	render_one: function(item) {
		res.send(item);
	},
	render_all: function(items) {
		res.send(items);
	}
};

module.exports = view;