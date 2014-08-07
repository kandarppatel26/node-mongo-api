var productApp = angular.module('productApp', ['ngRoute']);
productApp.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.when('/products', {
			templateUrl: 'partials/productlist',
			controller: 'ProductController'
		}).when('/product/:productId', {
			templateUrl: 'partials/productdetail',
			controller: 'ProductdetailController'
		}).otherwise({redirectTo: '/products'});
  }]);