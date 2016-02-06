//alert("hello world!");
//console.log("test")

//var AutoInject=require('auto-inject');
//var result={};
//var injectInstance=AutoInject(dep,result)
//injectInstance.load("main")


angular.module("app", ['ngRoute'])
  .controller("main", function ($rootScope) {

  })
  .controller("visualize",function($scope){


    var events=[
      {id:0,income:1,net:0,time:0,name:"part-time job"},
      {id:0,income:0,net:-10,time:10,name:"going to school"},
      {id:0,income:0,net:-10,time:20,name:"another loan"},
      {id:0,income:1,net:0,time:100,name:""},
      {id:2,income:0,net:-10,time:11,name:""},
      {id:2,income:0,net:-10,time:23,name:""},
      {id:2,income:0,net:-10,time:104,name:""}
    ]




    var temp=_(events)
      .groupBy("id")
      .map(function(a){
        return _.indexBy(a,"time")
      })
      .value()

    var eventsIndex= _.indexBy(events,"time")
    var delay=20;
    var i=0;
    var duration=500
    var loopInterval;

    function update(){
      i=0;

      $scope.balls=_(temp)
        .map(function(a,b){
          return {id:b,x:0,y:0,color:"red",size:10,income:0,net:0,eventsIndex:a}
        })
        .value()

    }
    update()

    function process(a) {

      if (a.eventsIndex[i]) {
        a.income = eventsIndex[i].income
        a.net += eventsIndex[i].net
      }

      a.x = a.income*20
      a.net+= a.income
      a.y = -a.net+200
    }




    function tick() {

      if (i >= duration) clearInterval(loopInterval);
      var t = $scope.balls;
      _.forEach(t, process)
      i++
      $scope.$apply()
    }


    $scope.start=function(){
      loopInterval=setInterval(tick,delay)
    }
    $scope.pause=function(){}
    $scope.replay=function(){
      update()
    }


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
        .when('/visualize', {templateUrl: 'templates/visualize.html', controller: 'visualize'})
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