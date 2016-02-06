//alert("hello world!");
//console.log("test")

//var AutoInject=require('auto-inject');
//var result={};
//var injectInstance=AutoInject(dep,result)
//injectInstance.load("main")

var main =require('../controllers/main.js')
var visualize=require('../controllers/visualize.js')
var choices=require('../controllers/choices.js')
var review =require('../controllers/review.js')
var test=require('../controllers/test.js')

  angular.module("app", ['ngRoute', 'highcharts-ng'])
    .controller("main", main)
    .controller("visualize",visualize)
    .controller("choices", choices)
    .controller("review", review)
    .controller("test",test )
    .config(['$routeProvider',
      function ($routeProvider) {
        $routeProvider
          .when('/', {templateUrl: 'templates/landingpage.html', controller: 'main'})
          .when('/signin', {templateUrl: 'templates/signin.html', controller: 'main'})
          .when('/review', {templateUrl: 'templates/review.html', controller: 'review'})
          .when('/choices', {templateUrl: 'templates/choices.html', controller: 'choices'})
          .when('/visualize', {templateUrl: 'templates/visualize.html', controller: 'visualize'})
          .when('/test', {templateUrl: 'templates/test.html', controller: 'test'})
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