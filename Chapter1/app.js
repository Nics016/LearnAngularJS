(function(){
	var app = angular.module('store', ['store-directives']);
	app.serverUrl = 'http://yii.com/ex_15/web';

	app.controller('StoreController', ['$http', function($http){
		var store = this;		

		store.products = [ ]; // to show smth until data is loaded
		store.films = [ ]; // to show smth until data is loaded

		this.getFilms = function(){
			return $http.get(app.serverUrl + '/films');
		}

		this.getFilms().then(function(data){
			store.films = data.data;
		});

		store.products = gems;
	}]);

	app.controller("ReviewController", function(){
		this.review = {};

		this.addReview = function(product){
			product.reviews.push(this.review);
			this.review = {};
		};
	});

	var gems = [
		{
			name: 'Dodecahedron',
			price: 2,
			description: 'Cool gem which looks like Diamond',
			canPurchase: true,
			images: [
				'https://scontent.cdninstagram.com/t51.2885-19/s150x150/14533737_186649848471908_7275876467181879296_a.jpg',
			],
			reviews: [
				{
					stars: 5,
					body: "I love this project!",
					author: "joe@thomas.com",
				},
				{
					stars: 4,
					body: "Quite good",
					author: "infiltrator@gmail.com",
				},
			],
		},
		{
			name: 'Pentagonal Gem',
			price: 5.95,
			description: 'That might be Korund (Rubin)',
			canPurchase: true,
			images: [
				'https://sites.google.com/site/korundhlinik/_/rsrc/1472873022017/home/videogalerie/korund-cerveny.jpg?height=200&width=200',
				'http://www.cms.fu-berlin.de/geo/fb/e-learning/petrograph/bilder/mi_korund_080.jpg',
			],
			reviews: [
				{
					stars: 5,
					body: "I love this project!",
					author: "joe@thomas.com",
				},
			],
		},
	];
})();