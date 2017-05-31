var app = angular.module("studyApp", ["ngRoute", "ui.bootstrap"]);

app.controller("studyController", function($scope, $http) {
  $scope.showForm = false;
  $scope.submitDate = function() {
    $scope.showForm = true;
  }

  $scope.studentInfo = [];

  $scope.addItem = function(info) {
    info.date= $scope.selectedDate;
    console.log(info)
    $scope.studentInfo.push(info);

    // Clear form
    $scope.info = {};
    // Clear the selected date
$scope.selectedDate = null;
    // Hide the form
    $scope.showForm = false;

  }
});

app.config(function($routeProvider) {
  $routeProvider
  .when("/home", {
    controller:"studyController",
    templateUrl:"views/home.html"
  })
  .when("/test", {
    controller: "studyController",
    templateUrl: "views/test.html"
  })
  .when("/extra", {
    controller: "studyController",
    templateUrl:"views/extra.html"
  })
  .otherwise({redirectTo:"/home"});

//
// $http({
//   method: "GET",
//   url: "https://myallies-breaking-news-v1.p.mashape.com/news"
// })
});



// $(document).ready(function() {
//
//     var subject = $('#subject'),
//         hoursToComplete = $('#hour1'),
//         hoursComplete = $('#hour2');
//
// hourInfo = [];
//
// var calNumber;
// var calTotal = [];
// $('.row div').on('click', function(){
//     $(this).toggleClass('red');
//     if( $(this).hasClass('red')){
//       $(this).css('background-color', 'red');
//       calNumber = $(this).html();
//       calTotal.push(calNumber);
//       console.log(calTotal);
//     }else{
//       $(this).css('background-color', 'green');
//       var calNumber = $(this).html();
//       var ind = calTotal.indexOf(calNumber);
//       calTotal.splice(ind, 1);
//       console.log(calTotal);
//     }
//   });
//
//     //    this makes the form appear when the sready button is clicked
//     $('#ready-button').on('click', function(){
//           $('form').css('visibility', 'visible');
//           //$('#marquee').css('visibility', 'hidden');
//         //  $('form').addClass('w3-animate-right');
//     });
//
//     // this links the text fields to create values for our variables
//     $('#form-submit').on('click', function(){
//         console.log('submit complete');
//         var subject = $('#subject').val();
//         var hoursToComplete = $('#hour1').val();
//         var hoursComplete = $('#hour2').val();
//         var userInfo = {
//             subject: subject,
//             assignments: hoursToComplete,
//             hoursComplete: hoursComplete,
//           };
//         console.log(userInfo.subject);
//         hourInfo.push(userInfo);
//         $('form').css('visibility', 'hidden');
//         hoursToComplete = [];
//         assignments = '';
//         console.log(userInfo.subject)
//
//
//     });
//
//     $('#ready-button').on('click', function(){
//           $('form').css('visibility', 'visible')
//           //$('#marquee').css('visibility', 'hidden');
//         //  $('form').addClass('w3-animate-right');
//     });
//
// });
