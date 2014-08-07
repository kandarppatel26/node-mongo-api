

productApp.controller('ProductController', function ($scope, $http) {
    $http.get('api/products').success(function(data) {
        $scope.products = data;
    });
    $scope.orderProp = 'title';

});

productApp.controller('ProductdetailController', function ($scope, $routeParams,$http) {
    $http.get('api/product/id/'+$routeParams.productId).success(function(data) {
        $scope.prod = data;
    });
});