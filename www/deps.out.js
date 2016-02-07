var dep={}
dep["ShowMoney"]=function ShowMoney(rawData) {

  return function (rawData1) {


    return {
      RawData: function () {

        return rawData.renderData1
      },
      FilterData: function () {
        return rawData.renderData2
      }

    }


  }


}
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
dep["dom"]=function dom() {

  return {
    get totalIncome() {

    },
    set totalIncome(a) {
      document.getElementById("totalIncome").innerText=a
    },
    set totalExpense(a) {
      document.getElementById("totalExpenses").innerText=a
    },
    click:function(id,fn){
      document.getElementById(id).addEventListener('click',fn)
    }


  }


}
dep["highchart"]=function highchart() {

  return {
    render:function(dataSeries){


      $('#container').highcharts({

        title: {
          text: 'Spending',
          x: -20 //center
        },
        subtitle: {
          text: 'Source: WorldClimate.com',
          x: -20
        },
        xAxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        yAxis: {
          title: {
            text: 'Savings($)'
          },
          plotLines: [{
            value: 0,
            width: 1,
            color: '#808080'
          }],
          min:-100,max:100
        },
        tooltip: {
          valueSuffix: '°C'
        },
        legend: {
          layout: 'vertical',
          align: 'right',
          verticalAlign: 'middle',
          borderWidth: 0
        },
        series: dataSeries

      });
    },
    renderCoffeeExpenses:function(dataSeries){
      $('#container').highcharts({

        title: {
          text: 'Expenses',
          x: -20 //center
        },
        subtitle: {
          text: 'Coffee Spending',
          x: -20
        },
        xAxis: {
          //categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
          //  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        yAxis: {
          title: {
            text: 'Savings($)'
          },
          plotLines: [{
            value: 0,
            width: 1,
            color: '#808080'
          }],
          min:-100,max:100
        },
        tooltip: {
          valueSuffix: '$'
        },
        legend: {
          layout: 'vertical',
          align: 'right',
          verticalAlign: 'middle',
          borderWidth: 0
        },
        series: [{name:"coffee",data:[[1,100,"test"],[2,100],[2,90],[3,90],[3,80],[4,80],[4,70],[5,70],[5,60]]},
          {
            type: 'arearange',
            name: 'Average Customer Spending',
            data: [[1,1,1],[2,3,6],[3,5,9]]
          }
        ]

      });



    }

  }

}
dep["main"]=function main(highchart, rawData,dom) {


  console.log("hello world, lets do this, pivot of the century.")


  dom.totalIncome=123
  dom.totalExpense=1234


  highchart.renderCoffeeExpenses(rawData.renderData)

  window.test = highchart.render


  //$('#container').highcharts({
  //
  //  chart: {
  //    type: 'arearange',
  //    zoomType: 'x'
  //  },
  //
  //  title: {
  //    text: 'Temperature variation by day'
  //  },
  //
  //  xAxis: {
  //    type: 'datetime'
  //  },
  //
  //  yAxis: {
  //    title: {
  //      text: null
  //    }
  //  },
  //
  //  tooltip: {
  //    crosshairs: true,
  //    shared: true,
  //    valueSuffix: '°C'
  //  },
  //
  //  legend: {
  //    enabled: false
  //  },
  //
  //  series: [{
  //    type: 'arearange',
  //    name: 'Temperatures',
  //    data: [[1,1,1],[2,3,6],[3,5,9]]
  //  }]
  //
  //});


}
dep["rawData"]=function rawData() {


  return {
    renderData: [
      {data: [1, 2, 3, 4, 5]},
      {data: [2, 3, 4, 5, 6]}
    ],
    renderData1: [
      {data: [3, 3, 3, 3, 3]},
      {data: [4, 5, 4, 5, 4]}
    ],
    renderData2: [
      {data: [1, 3, 2, 5, 4]},
      {data: [2, 7, 9, 3, 7]}
    ],
    fullExpense: [
      {v:-10,category:"cat1",name:"name1"},
      {v:-20,category:"cat1",name:"name2"},
      {v:-30,category:"cat1",name:"name3"},
      {v:-10,category:"cat2",name:"name1"},
      {v:-20,category:"cat2",name:"name2"},
      {v:-30,category:"cat2",name:"name3"},
      {v:-10,category:"cat3",name:"name1"},
      {v:-20,category:"cat3",name:"name2"},
      {v:-30,category:"cat3",name:"name3"},
      {v:1000,category:"income",name:"paycheck1"},
      {v:1000,category:"income",name:"paycheck2"}
    ]

  }

}
