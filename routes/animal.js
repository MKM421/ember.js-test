AnimalShelter.AnimalRoute = Ember.Route.extend({
	model: function(params) {
		return animals.findBy('id', params.animal_id);
	}


});