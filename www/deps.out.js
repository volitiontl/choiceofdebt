var dep={}
dep["calculatePaths"]=function (events) {


  var temp = _(events)
    .groupBy("id")
    .map(function (a) {
      return _.indexBy(a, "time")
    })
    .value()


  var objects = _.map(temp, function (a) {
    return {x: 0, y: 0, income: 0, net: 0, eventsIndex: a}
  })
  var i = 0;


  function process(a) {
    if (a.eventsIndex[i]) {
      a.income = a.eventsIndex[i].income
      a.net += a.eventsIndex[i].net
    }
    a.net += a.income;
    a.x = a.income
    a.y = a.net
  }


  return {
    tick: function () {
      _.forEach(objects, process)//mutate state
      i++
      return objects;
    }
  }


}
dep["main"]=function main() {
  console.log("hi")
  console.log("hello world")


}
