//alert("hello world!");
//console.log("test")

//var AutoInject=require('auto-inject');
//var result={};
//var injectInstance=AutoInject(dep,result)
//injectInstance.load("main")

var main =

  angular.module("app", ['ngRoute', 'highcharts-ng'])
    .controller("main", require('../controllers/main.js'))
    .controller("visualize", require('../controllers/visualize.js'))
    .controller("choices", require('../controllers/choices.js'))
    .controller("review", require('../controllers/review.js'))
    .config(['$routeProvider',
      function ($routeProvider) {
        $routeProvider
          .when('/', {templateUrl: 'templates/landingpage.html', controller: 'main'})
          .when('/signin', {templateUrl: 'templates/signin.html', controller: 'main'})
          .when('/review', {templateUrl: 'templates/review.html', controller: 'review'})
          .when('/choices', {templateUrl: 'templates/choices.html', controller: 'choices'})
          .when('/visualize', {templateUrl: 'templates/visualize.html', controller: 'visualize'})
      }]
  )
    .directive('statefin', function () {
      return {
        scope: {
          data: "=data"
        },
        link: function (scope, element, attrs) {
          //console.log('SCOPE=', scope)
        },
        templateUrl: 'templates/statefin.html'
      }
    })