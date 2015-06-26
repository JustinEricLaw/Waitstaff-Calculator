var app = angular.module('myApp', ['ngRoute']);
  

app.config(['$routeProvider', function($routeProvider){
  $routeProvider.when('/', {
    templateUrl : 'home.html',
    controller : 'myController'
  })
  .when('/new-meal', {
    templateUrl : 'meal.html',
    controller : 'myController'
  })
  .when('/earnings', {
    templateUrl : 'earnings.html',
    controller : 'myController'
  })
  .otherwise('/');
}]);


app.factory('info', function(){
  return {
    meal: {},
    customer: {},
    earnings: {}
  };

});


app.controller('myController', ['$scope', 'info', function($scope, info){

  $scope.meal = info.meal;
  $scope.customer = info.customer;
  $scope.earnings = info.earnings;


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


  // Clear Meal Data
  $scope.clear = function () {
    $scope.meal = {};
    $scope.customer = {};
    $scope.myForm.$setPristine();
  };


  // Reset All Data
  $scope.resetAll = function () {
    $scope.meal = {};
    $scope.customer = {};
    $scope.earnings = {};
    $scope.myForm.$setPristine();
  };

}]);

