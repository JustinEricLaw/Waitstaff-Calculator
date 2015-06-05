angular.module('myApp', ['ngMessages'])
  .controller('myController', function($scope){
    $scope.celebrity = '';
    $scope.noun = '';
    $scope.objects = '';
    $scope.adjective = '';
    $scope.noun2 = '';
    $scope.beverage = '';
    $scope.dogname = '';
    $scope.place = '';
    $scope.liquid = '';
    

    $scope.submit = function() {
      if($scope.myForm.$valid) {
        console.log('The form is valid');
      } else {
        console.log('The form is invalid');
      }
    };
});