AnimalShelter.Router.map(function() {
	this.resource('animals', {path: '/'});
	this.resource('about');
	this.resource('contact', function() {
		this.resource('phone');
		this.resource('email');
	});
	this.resource('animal', {path: 'animals/:animal_id'});
});