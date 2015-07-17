AnimalShelter.AnimalsRoute = Ember.Route.extend({
	/*controllerName: 'posts',
	renderTemplate: function() {
		this.render('posts');
	},*/
	/*model: function() {
		return this.store.find('animal');
	}*/
	model: function() {
		return animals;
	}
});