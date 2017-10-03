/// <reference path="angular.js" />
var demoapp = angular.module("demoapp", [])
               .controller("demoController", function ($scope,$location,$anchorScroll) {

                   $scope.scrollto = function (scrolllocation) {
                       $location.hash(scrolllocation);
                       $anchorScroll.yoffset = 20;
                       $anchorScroll();
                   }


               });