/// <reference path="angular.js" />
var demoapp = angular.module("demoapp", [])
             .controller('CountryController', function ($scope, $http, $location, $anchorScroll) {

                 $http.get("countryservice.asmx/Getdata")
                 .then(function (response) {

                     $scope.countries = response.data;


                 });

                 debugger;
                 $scope.scrollto = function (countryName) {
                     $location.hash(countryName);
                     $anchorScroll();


                 }

});