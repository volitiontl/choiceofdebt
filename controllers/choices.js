module.exports=function($scope,$rootScope){

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

}