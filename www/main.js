//alert("hello world!");
//console.log("test")

//var AutoInject=require('auto-inject');
//var result={};
//var injectInstance=AutoInject(dep,result)
//injectInstance.load("main")


angular.module("app", ['ngRoute'])
  .controller("main", function ($rootScope) {

  })
  .controller("choices",function($scope,$rootScope){

    $scope.test=$rootScope.transactions

    var expenses=[
      {interval:10,value:10},
      {interval:20,value:11},
      {interval:30,value:10}
    ]


    function calculateValue(current,expenses,time){

      return Math.floor(_(expenses)
        .map(function(a){
            if(!a.enable) return 0
          return a.$*time/ a.interval
        })
        .sum()+current)
    }


    function update(){
      $scope.one=calculateValue(0,$scope.test,1000)
      $scope.two=calculateValue(0,$scope.test,2000)
      $scope.three=calculateValue(0,$scope.test,5000)
    }

    update()
    $scope.update=update;

  })
  .controller("review",function($scope,$http,$rootScope){
    //transactions = [];

    var total=0
    var index=0

    $scope.currentTransaction=false


    $http.get('mock/bank.json')
      .then(function (response) {
        $rootScope.transactions=response.data.spending;
        total=response.data.spending.length;


        //transactions = response.data.spending
        var t = $rootScope.transactions
        $scope.currentTransaction = t && t.length > 0 && t[index]
        console.log($scope.currentTransaction)

      })

    $scope.classify=function(type){
      if(index>=total)return
      $scope.currentTransaction["want"] = type
      pushToFirebase()
      $scope.currentTransaction=$rootScope.transactions[++index]
      console.log($rootScope.transactions)
      //update firebase
    }


    var pushToFirebase = _.noop

  })

  .config(['$routeProvider',
    function ($routeProvider) {
      $routeProvider
        .when('/', {templateUrl: 'templates/landingpage.html', controller: 'main'})
        .when('/signin', {templateUrl: 'templates/signin.html', controller: 'main'})
        .when('/review', {templateUrl: 'templates/review.html', controller: 'review'})
        .when('/choices', {templateUrl: 'templates/choices.html', controller: 'choices'})
    }]
)
  .directive('statefin',function(){
    return {
      scope: {
        data: "=data"
      },
      link: function(scope, element, attrs) {
        //console.log('SCOPE=', scope)
      },
      templateUrl: 'templates/statefin.html'
    }
  })