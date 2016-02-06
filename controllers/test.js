module.exports=function($scope){



  $scope.income=0;
  $scope.net=0;
  $scope.time=0;

  $scope.test=[];


  $scope.addWidget=function(income,net,time){
    console.log($scope.income)
    $scope.test.push({id:0,income:$scope.income,net:$scope.net,time:$scope.time})

  }



  $scope.profiles=[
    [
      {id:0,income:0,net:0,time:0,name:"part time job"},
      {id:0,income:0,net:0,time:0,name:"part time job"},
      {id:0,income:0,net:0,time:0,name:"part time job"}
    ]
  ];



}