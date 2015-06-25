angular.module('myApp', ['ngRoute'])
  
  // Config to set Routes
  .config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/', {
      templateUrl : 'home.html',
      controller : 'myController'
    }).when('/new-meal', {
      templateUrl : 'meal.html',
      controller : 'myController'
    }).when('/earnings', {
      templateUrl : 'earnings.html',
      controller : 'myController'
    }).otherwise('/');
  }])


  // The Controller
  .controller('myController', ['$scope', function($scope){

    $scope.meal = {};
    $scope.customer = {};
    $scope.earnings = {};

    $scope.submit = function() {
      if($scope.myForm.$valid) {
        
        // Customer Charges
        $scope.customer.subtotal = $scope.meal.price + ($scope.meal.price * ($scope.meal.tax/100));
        $scope.customer.tip = $scope.customer.subtotal * ($scope.meal.tip/100);
        $scope.customer.total = $scope.customer.subtotal + $scope.customer.tip;

        // Earnings Info
        $scope.earnings.total = $scope.customer.tip + ($scope.earnings.total || 0);
        $scope.earnings.count = ++$scope.earnings.count || 1;
        $scope.earnings.avg = $scope.earnings.total / $scope.earnings.count;
        
      }
    };

    // Clear Meal Details
    $scope.clear = function () {
      $scope.meal = {};
      $scope.customer = {};
      $scope.myForm.$setPristine();
    };

    // Reset All Data
    $scope.resetAll = function () {
      $scope.myForm.$setPristine();

      $scope.meal = {};
      $scope.customer = {};
      $scope.earnings = {};
    };

}]);