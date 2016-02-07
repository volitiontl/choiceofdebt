function highchart() {

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
module.exports = highchart;