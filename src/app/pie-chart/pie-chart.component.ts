import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent {
  Highcharts=Highcharts
  chartOptions={}

  constructor(){
    this.chartOptions={
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Placement percentage',
        align: 'center'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    credits:{
          enabled:false
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
            }
        }
    },
    series: [{
        name: 'Courses',
        colorByPoint: true,
        data: [{
            name: 'MEARN Stack',
            y: 70.67,
            sliced: true,
            selected: true
        }, {
            name: 'python',
            y: 14.77
        },  {
            name: 'Data Science',
            y: 4.86
        }, {
            name: 'Software Testing',
            y: 2.63
        }, {
            name: 'Flutter',
            y: 1.53
        },  {
            name: '.Net',
            y: 1.40
        }, {
            name: 'Php',
            y: 0.84
        }, {
            name: 'Java',
            y: 0.51
        }, {
            name: 'Other',
            y: 2.6
        }]
    }]
    }
  }
    
}
