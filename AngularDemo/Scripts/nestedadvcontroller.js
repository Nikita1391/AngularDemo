/// <reference path="Script.js" />
var app = angular
          .module("Demo", [])
.controller('countrycontroller', function () {


    this.Name = "INDIA";
})
.controller('statecontroller', function () {


    this.Name = "Maharashtra";

})
.controller('citycontroller', function () {


    this.Name = "Mumbai";
})