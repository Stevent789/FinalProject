var app = angular.module("studyApp", ["ngRoute", "ui.bootstrap"]);

app.controller('studyController', function($scope, $http) {
  $scope.showForm = false;
  $scope.submitDate = function() {
    $scope.showForm = true;
  }
$scope.news = {};
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

  $http({
    method: 'GET',
    url: "https://newsapi.org/v1/articles?source=cnn&apiKey=bcb99f65fdfd4b1ebd19e980289db48d",
    // method: "GET",
    // url: "https://myallies-breaking-news-v1.p.mashape.com/news",
    // headers: {'X-Mashape-Key: fizuv7sHv4mshh0xLUKAS6bF2a48p1vIspRjsn7p1geEoyVCaf'}
  }).then(function successCallback(response) {
    $scope.news = response.data.articles;
    console.log($scope.news);
  }, function errorCallback(response) {
    $scope.news = response.statusText;
  });

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
});

app.directive("footerTag", function() {
  return {
    restrict: "A",
    template: "<footer>© 2017 Steven Turner</footer>"
  };
});
