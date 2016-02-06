//alert("hello world!");
//console.log("test")

//var AutoInject=require('auto-inject');
//var result={};
//var injectInstance=AutoInject(dep,result)
//injectInstance.load("main")


angular.module("app", ['ngRoute'])
  .controller("main", function () {
  })
  .controller("review",function($scope,$http){
    transactions = [];

    $scope.currentTransaction=false


    $http.get('mock/bank.json')
      .then(function (response) {
        transactions = response.data.spending
        $scope.currentTransaction=transactions && transactions.length>0 &&transactions[0]

      })

    $scope.classify=function(type){

      $scope.currentTransaction=transactions.pop()
      pushToFirebase()
      //update firebase
    }


    var pushToFirebase= _.noop

  })

  .config(['$routeProvider',
    function ($routeProvider) {
      $routeProvider
        .when('/', {templateUrl: 'templates/landingpage.html', controller: 'main'})
        .when('/signin', {templateUrl: 'templates/signin.html', controller: 'main'})
        .when('/review', {templateUrl: 'templates/review.html', controller: 'review'})
        .when('/choices', {templateUrl: 'templates/choices.html', controller: 'main'})
    }]
)
