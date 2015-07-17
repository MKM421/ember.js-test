AnimalShelter.AboutController = Ember.Controller.extend({
	isPictureShowing: false,
	actions: {
		showLearnMore: function() {
			alert('This is a pop up');
		},
		showPicture: function() {
			this.set('isPictureShowing', true);
		},
		hidePicture: function() {
			this.set('isPictureShowing', false);
		}
	}
});