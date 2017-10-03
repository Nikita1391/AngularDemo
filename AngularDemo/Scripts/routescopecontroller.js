/// <reference path="Script.js" />
var app = angular
          .module("Demo", [])
.controller('redcolourcontroller', function ($scope, $rootScope) {

    $rootScope.rootScopeColour = "I am routescope colour";
    $scope.redcolour = "I am red colour";
    
})
.controller('greencolourcontroller', function ($scope) {

    //$rootScope.rootScopeColour = "I am routescope colour"
    $scope.greencolour = "I am green colour";
  
})
