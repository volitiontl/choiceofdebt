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
      }
    },
    legend: {
      enabled: false
    },
    yAxis: {min: -1000, max: 1000},
    xAxis: {min: -2, max: 20},

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
  var instance = CalculatePaths(events)

  var delay = 20;
  var i = 0;
  var duration = 100
  var loopInterval;


  function tick() {
    if (i > duration) {
      clearInterval(loopInterval)
    }
    _.forEach(instance.tick(), function (a, b) {
      tt[b] = {x: a.x, y: a.y, z: 1}
    })
    i++
    $scope.$apply()
  }

  setTimeout(tick, 0)

  $scope.start = function () {
    i = 1;
    loopInterval = setInterval(tick, delay)
  }
  $scope.pause = function () {
  }
  $scope.replay = function () {
    instance = calculatePaths(events)
    tick()
  }


}