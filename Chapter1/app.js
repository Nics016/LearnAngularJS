(function(){
	var app = angular.module('store', [ ]);

	app.directive('productTitle', function(){
		return {
			restrict: 'E', // html-element
			templateUrl: 'product-title.html',
		};
	});

	app.directive('productPanels', function(){
		return {
			restrict: 'E',
			templateUrl: 'product-panels.html',
			controller: function(){
				this.tab = 1;

				this.selectTab = function(setTab){
					this.tab = setTab;
				};

				this.isSelected = function(checkTab){
					return (this.tab === checkTab);
				}
			},
			controllerAs: 'panel',
		}
	});

	app.controller('StoreController', function(){
		this.products = gems;
	});

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
			description: '. . .',
			canPurchase: true,
			images: [
				{
					full: 'http://www.tiffany.com/shared/images/engagement/diamond-dark-mobile.jpg',
					thumb: 'https://scontent.cdninstagram.com/t51.2885-19/s150x150/14533737_186649848471908_7275876467181879296_a.jpg',
				},
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
			description: '. . .',
			canPurchase: true,
			images: [
				{
					full: 'https://s-media-cache-ak0.pinimg.com/originals/b5/42/91/b54291068e39035e991f8bc632fb286b.jpg',
					thumb: 'https://sites.google.com/site/korundhlinik/_/rsrc/1472873022017/home/videogalerie/korund-cerveny.jpg?height=200&width=200',
				},
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