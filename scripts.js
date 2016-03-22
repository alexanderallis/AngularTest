var firstApp = angular.module('firstApp',["second"]);

// firstApp.controller('FirstController', ["$scope", function($scope) {
//     $scope.first = 'Some';
//     $scope.last = 'One';
//     $scope.heading = 'Message: ';
//     $scope.updateMessage = function(){
//       $scope.message = 'Hello, ' + $scope.first + ' ' + $scope.last + '!';
//     };
//
// }]);

firstApp.controller('FirstController', ["$scope", "message", function($scope, message) {
    $scope.first = 'some';
    $scope.last = 'one';
    $scope.heading = 'This is the message: ';
    $scope.updateMessage = function(){
      $scope.message = message + $scope.first + ' ' + $scope.last + '!';
    };

}]);


angular.module("second", [])
  .value("message", "Hello there, ");
