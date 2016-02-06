module.exports=function($scope,$http,$rootScope){
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

}