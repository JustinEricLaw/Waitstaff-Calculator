angular.module('myApp', [])
  .controller('myController', function($scope){
    $scope.celebrity='Celebrity';
    $scope.noun='Noun';
    $scope.objects='Objects';
    $scope.adjective='Adjective';
    $scope.noun2='Noun 2';
    $scope.beverage='Type of Beverage';
    $scope.dogname='Name';
    $scope.place='Place';
    $scope.liquid='Type of Liquid';
    $scope.gender= {
      type: 'female',
      her_his: 'her',
      she_he: 'she',
      her_him: 'her'
    }
});