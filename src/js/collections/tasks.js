fun.models.tasks = Backbone.Collection.extend({
	model: fun.models.task,
	parse: function (response) {
		return response.results
	}
});