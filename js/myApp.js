angular.module('myApp', [])
  .controller('myController', function($scope){

    $scope.submit = function() {
      if($scope.myForm.$valid) {
        console.log('The Form is Valid');
        compute();
      } else {
        console.log('The Form is Not Valid');
      }
    };

    // Why do I need to do this?
    $scope.customer_subtotal = 0;
    $scope.customer_tip = 0;
    $scope.customer_total = 0;


    var compute = function () {

      // Customer Charges
      $scope.customer_subtotal = function () {
        return $scope.meal_price + ($scope.meal_price * $scope.meal_tax/100);
      };
      $scope.customer_tip = function () {
        return $scope.customer_subtotal() * ($scope.meal_tip/100);
      };
      $scope.customer_total = function () {
        return $scope.customer_subtotal() + $scope.customer_tip();
      };

      // Earnings Info
        $scope.tip_total += $scope.customer_tip();
        $scope.meal_count++;
        $scope.avg_tip = $scope.tip_total / $scope.meal_count;
    };


    // Reset All Data


});