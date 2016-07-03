(function() {
	var app = angular.module('photoStore', []);

	app.directive("navBar", function() {
		return {
			restrict: "E",
			templateUrl: "nav-bar.html",
			controller: function() {
				this.tab = 1;

				this.setTab = function(newTab){
					this.tab = newTab
				};

				this.isSet = function(checkTab){
					return this.tab === checkTab;
				};
			},
			controllerAs: "tab"
		};
	});

	app.directive("photoGallery", function(){
		return{
			restrict: "E",
			templateUrl: "photo-gallery.html",
			controller: function() {
				this.photos = photos;
			},
			controllerAs: "gallery"
		};
	});

	app.directive("photo", function(){
		return{
			restrict: "E",
			templateUrl: "photo.html"
		};
	});

	var photos=[
	{
		title: "Title",
		description: "Description",
		source: "JessicaACusick_1.JPG"
	},
	{
		title: "Title",
		description: "Description",
		source: "JessicaACusick_2.JPG"
	},
	{
		title: "Title",
		description: "Description",
		source: "JessicaACusick_3.JPG"
	},
	{
		title: "Title",
		description: "Description",
		source: "JessicaACusick_4.JPG"
	},
	{
		title: "Title",
		description: "Description",
		source: "JessicaACusick_5.JPG"
	},
	];

})();