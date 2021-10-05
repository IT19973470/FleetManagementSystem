import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {TransportManagerService} from "../../../../../_service/transport-manager.service";

@Component({
  selector: 'app-daily-report',
  templateUrl: './daily-report.component.html',
  styleUrls: ['./daily-report.component.css']
})
export class DailyReportComponent implements OnInit {

  chartOptionsP;
  chartOptionsI;
  chartOptionsPI;

  reportWeek;

  deliveryItemDetails = [];
  days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  dailyDeliveries = [
    [[0, 0], [0, 0], [0, 0]],
    [[0, 0], [0, 0], [0, 0]],
    [[0, 0], [0, 0], [0, 0]],
    [[0, 0], [0, 0], [0, 0]],
    [[0, 0], [0, 0], [0, 0]],
    [[0, 0], [0, 0], [0, 0]],
    [[0, 0], [0, 0], [0, 0]]
  ]

  constructor(private transportManagerService: TransportManagerService) {
    this.fillChart();
  }

  ngOnInit(): void {
    this.reportWeek = this.transportManagerService.reportWeek;
    this.transportManagerService.getDeliveriesReportDaily(this.reportWeek).subscribe((report) => {
      console.log(this.dailyDeliveries)
      this.dailyDeliveries = report.dailyDeliveries;
      this.refillChart(this.chartOptionsP,0)
      this.refillChart(this.chartOptionsI,1)
      this.refillChart(this.chartOptionsPI,2)
      console.log(this.dailyDeliveries)
    })
    // this.fillChart();
  }

  refillChart(chartOptions,i) {
    chartOptions.series = [
      {
        data: [this.dailyDeliveries[0][i][0], this.dailyDeliveries[1][i][0], this.dailyDeliveries[2][i][0], this.dailyDeliveries[3][i][0], this.dailyDeliveries[4][i][0], this.dailyDeliveries[5][i][0], , this.dailyDeliveries[6][i][0]]
      },
      {
        data: [this.dailyDeliveries[0][i][1], this.dailyDeliveries[1][i][1], this.dailyDeliveries[2][i][1], this.dailyDeliveries[3][i][1], this.dailyDeliveries[4][i][1], this.dailyDeliveries[5][i][1], , this.dailyDeliveries[6][i][1]]
      },
      {
        data: [this.dailyDeliveries[0][i][1], this.dailyDeliveries[1][i][1], this.dailyDeliveries[2][i][1], this.dailyDeliveries[3][i][1], this.dailyDeliveries[4][i][1], this.dailyDeliveries[5][i][1], , this.dailyDeliveries[6][i][1]]
      }
    ]
  }

  fillChart() {
    this.chartOptionsP = this.getChartOptions();
    this.chartOptionsI = this.getChartOptions();
    this.chartOptionsPI = this.getChartOptions();
  }

  getChartOptions() {
    return {
      series: [
        {
          name: "Total",
          data: [0, 0, 0, 0, 0, 0, 0],
          color: '#0c8dc0'

        },
        {
          name: "Completed",
          data: [0, 0, 0, 0, 0, 0, 0],
          color: '#018002'
        },
        {
          name: "Cancelled",
          data: [0, 0, 0, 0, 0, 0, 0],
          color: '#ff0a03'
        }
      ],
      chart: {
        type: "bar",
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "35%",
          endingShape: "rounded"
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"]
      },
      xaxis: {
        categories: [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ]
      },
      yaxis: {
        title: {
          text: "Deliveries"
        }
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return "$ " + val + " thousands";
          }
        }
      }
    };
  }
}
