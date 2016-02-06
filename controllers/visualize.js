module.exports = function ($scope) {

  $scope.highchartsNG = {

    plotOptions: {
      series: {
        animation: false,
        duration: 0
      },
      bubble: {
        minSize: 3,
        maxSize: 3
      }
    },
    options: {
      chart: {
        type: 'bubble'
      },
      navigator: {enabled: false}
    },
    legend: {
      enabled: false
    },
    yAxis: {min: -1000, max: 1000,title:{text:"Debt/Savings($)"}},
    xAxis: {min: -2, max: 20,title:{text:"Income($1000/year)"}},

    series: [{
      data: [],
      sizeBy: 'width',
      enableMouseTracking: false
    }],
    title: {
      text: ''
    },
    loading: false
  }

  var tt = $scope.highchartsNG.series[0].data


  var events = [
    {id: 0, income: 0.5, net: 0, time: 0, name: "part-time job"},
    {id: 0, income: 3, net: 0, time: 10, name: "going to school"},
    {id: 2, income: 0, net: -10, time: 11, name: ""},
    {id: 2, income: 0, net: -10, time: 23, name: ""},
    {id: 3, income: 0, net: -400, time: 0, name: ""},
    {id: 4, income: 3.5, net: -400, time: 0, name: ""},
    {id: 5, income: 9, net: -400, time: 0, name: ""}
  ]

  var CalculatePaths = require('../dependencies/calculatePaths.js')

  var delay = 20;
  var duration = 100
  var loopInterval;


  function render(events) {
    $scope.highchartsNG.series[0] = {
      data: [],
      sizeBy: 'width',
      enableMouseTracking: false
    }
    var i = 0;
    var instance = [];
    instance[0] = CalculatePaths(events)
    function tick() {
      if (i > duration) {
        clearInterval(loopInterval)
      }
      _.forEach(instance[0].tick(), function (a, b) {
        $scope.highchartsNG.series[0].data[b] = {x: a.x, y: a.y, z: 1}
      })
      i++
      $scope.$apply()
    }

    loopInterval = setInterval(tick, delay)
  }


  $scope.start = function () {
    render(events)
  }
  $scope.pause = function () {

  }
  $scope.replay = function () {
    instance[0] = CalculatePaths(events)
    tick()
  }

  var list = {
    "one": events,
    "two": [
      {id: 0, income: 1, net: 0, time: 0, name: "part-time job"}
    ],
    "three": [
      {id: 0, income: 3, net: 0, time: 0, name: "part-time job"},
      {id: 1, income: 3, net: -20, time: 0, name: "part-time job"},
      {id: 2, income: 3, net: -60, time: 0, name: "part-time job"}
    ]
  }

  $scope.testabc = ["one", "two", "three"]
  $scope.changeEvent = function (a) {
    if (list[a]) {
      render(list[a])
    }
  }

}