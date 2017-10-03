/// <reference path="angular.js" />
/// <reference path="angular-route.js" />




var app = angular.module("myModule", ['ngRoute']);

app.config(function ($routeProvider,$locationProvider) {

    $routeProvider.caseInsensitiveMatch = true;
    $routeProvider
		.when('/Home', {
		    templateUrl: 'Templates/Home.html',
		    // controller: 'homeController as homectrl',
		    controller: 'homeController',
		    controllerAs: 'homectrl',
           

            
		    //controller: 'homeController'
		})
		.when('/Courses', {
		    templateUrl: 'Templates/Courses.html',

		    //controller: 'coursesController as coursectrl'
		    controller: 'coursesController',
		    controllerAs:'coursectrl'
		    //controller: 'coursesController'
		})

        .when('/Students', {
            templateUrl: 'Templates/Students.html',
            //controller: 'studentsController as studctrl'
            controller: 'studentsController as studctrl',
            controllerAs: 'studctrl'
           // controller: 'studentsController'
        })

       
        .when('/Students/:ID', {
            templateUrl: 'Templates/StudentsDetails.html',

            // controller: 'studentsDetailsController as studetailctrl'
            controller: 'studentsDetailsController as studetailctrl',
            controllerAs:'studetailctrl'
            //controller: 'studentsDetailsController'
        })
        .when('/StudentsSearch/:Name?', {
            templateUrl: 'Templates/StudentSearch.html',

            // controller: 'studentsDetailsController as studetailctrl'
            controller: 'studentsSearchController ',
            controllerAs: 'studsearchctrl'
            //controller: 'studentsDetailsController'
        })

		.otherwise({
		    redirectTo: '/Home'
		})

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    })
})



app.controller("coursesController", function () {

    //$scope.courses = ["C#", "VB.NET", "SQL SERVER", "ASP.NET", "NODE.JS"];

    this.courses = ["C#", "VB.NET", "SQL SERVER", "ASP.NET", "NODE.JS"];
})




app.controller("homeController", function () {

    //$scope.message = "Home Page";

   this.message = "Home Page";
})

app.controller("studentsDetailsController", function ($http, $routeParams) {
    var vm = this;

$http({

        url: "Students.asmx/GetStudents",
        params: { ID: $routeParams.ID },
        method:"get"


    }).then(function (response) {

        //$scope.student = response.data;
        //this.student = response.data;
        vm.student = response.data;
    })



});

app.controller("studentsSearchController", function ($http, $routeParams) {
    var vm = this;

    if ($routeParams.Name) {
        $http({

            url: "Students.asmx/GetStudentByName",
            params: { Name: $routeParams.Name },
            method: "get"


        }).then(function (response) {

            //$scope.student = response.data;
            //this.student = response.data;
            vm.student = response.data;
        })
    }

    else {


        $http.get("Students.asmx/GetallStudents")
       .then(function (response) {
      // $scope.students = response.data;
      //this.students = response.data;
       vm.students = response.data;

  })


    }

    



});

app.controller("studentsController", function ($http, $route, $rootScope,$log,$location) {

   


    $rootScope.$on("locationChangeStart", function () {
    
        $log.debug("locationstartfired");
    
    
    });
    $rootScope.$on("routeChangeStart", function () {
    
        $log.debug("routeChangeStartfired");
    
    
    });
    $rootScope.$on("locationChangeSuccess", function () {
    
        $log.debug("locationChangeSuccessfired");
    
    
    });
    $rootScope.$on("routeChangeSuccess", function () {
    
        $log.debug("routeChangeSuccessfired");
    
    
    });
    // $scope.$on("$locationChangeStart", function (event, next, current) {


    //    if (!confirm("Are you sure" + next)) {
    //        event.preventDefault();
    //    }

    //});

    var vm = this;


    vm.searchstudent = function () {

        if (vm.Name) {
            $location.url("/studentsSearch/" + vm.Name);

        }
        else {

            $location.url("/studentsSearch/");


        }


    }
    vm.reloaddata = function () {
        $route.reload();


    }
    $http.get("Students.asmx/GetallStudents")
    .then(function (response) {
        // $scope.students = response.data;
        //this.students = response.data;
        vm.students = response.data;

    })

 });






//var app = angular.module ("myModule", ["ngRoute"])
//      .config(function ($routeProvider) {
//          $routeProvider
//           .when("/Home", {

//               templateUrl: 'Templates/Home.html'//,
//               //controller: "homeController"

//           })
//           .when("/Courses", {
     //         templateUrl: "Templates/Courses.html"//,
//               //controller: "coursesController"


//           })
//           .when("/Students", {

//               templateUrl: "Templates/Students.html"//,
//               //controller: "studentsController"

//           })

//      })







          //.controller("homeController", function ($scope) {

          //    debugger;

          //    $scope.message = "Home Page";
          //})
          //.controller("coursesController", function ($scope) {

          //    $scope.courses = ["C#", "VB.NET", "SQL SERVER", "ASP.NET", "NODE.JS"];
          //})
          //.controller("studentsController", function ($scope, $http) {


          //    debugger;
          //    $http.get("Students.asmx/GetallStudents")
          //    .then(function (response) {
          //        $scope.students = response.data;

          //    })

         // });





//var app = angular
//        .module("myModule", [])
//       .controller("myController", function ($scope, $http) {
//           $http.get('EmployeeService.asmx/GetAllEmployees')
//               .then(function (response) {
//                   $scope.employees = response.data;
//               });
//       });

//var app = angular
//      .module("myModule", [])
//       .controller("myController", function ($scope, $http, $log) {


//           var successcallback = function (response) {

//               $scope.employees = response.data;
//              // $log.info(response);

//           };
//          var Errorcallback = function (response) {

//               $scope.error = response.data;
//              // $log.info(response);

//           };

//           $http({
//               method:'GET',
//               url: 'EmployeeService.asmx/GetAllEmployees'})
//              .then(successcallback,Errorcallback);

// });

//var app = angular
//          .module("myModule", [])
//          .controller("myController", function ($scope, stringService) {
//              $scope.transformString = function (input) {

//                  //if(!input)
//                  //{
//                  //    return input;
//                  //}
                 
//                  // var output = "";
//                  //    for (var i = 0; i < input.length;i++)
                      
//                  //    {
//                  //        if(i>0 && input[i]==input[i].toUpperCase())

//                  //        {

//                  //            output = output + " ";


//                  //        }
                         
//                  //         output = output + input[i];
//                  //    }
                         
                          
//                  $scope.output = stringService.processString(input);
                      
                      
                      
//                      }
//});






     
