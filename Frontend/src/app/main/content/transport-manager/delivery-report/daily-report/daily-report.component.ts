import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {TransportManagerService} from "../../../../../_service/transport-manager.service";

@Component({
  selector: 'app-daily-report',
  templateUrl: './daily-report.component.html',
  styleUrls: ['./daily-report.component.css']
})
export class DailyReportComponent implements OnInit {

  chartOptions;
  reportWeek;

  deliveryItemDetails = [];
  days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  weeklyDeliveries = [
    {
      week: 'Week 1',
      pd: {
        deliveries: 100,
        completed: 50,
        cancelled: 50
      },
      id: {
        deliveries: 90,
        completed: 40,
        cancelled: 50
      },
      pid: {
        deliveries: 80,
        completed: 50,
        cancelled: 30
      }
    },
    {
      week: 'Week 2',
      pd: {
        deliveries: 100,
        completed: 50,
        cancelled: 50
      },
      id: {
        deliveries: 90,
        completed: 40,
        cancelled: 50
      },
      pid: {
        deliveries: 80,
        completed: 50,
        cancelled: 30
      }
    },
  ]

  constructor(private transportManagerService: TransportManagerService) {
    this.fillChart();
  }

  ngOnInit(): void {
    this.reportWeek = this.transportManagerService.reportWeek;
    this.transportManagerService.getDeliveriesReportDaily(this.reportWeek).subscribe((report) => {
      console.log(report)
    })
    this.fillChart();
  }

  fillChart() {
    this.chartOptions = {
      series: [
        {
          name: "Total",
          data: [44, 55, 57, 56],
          color: '#0c8dc0'

        },
        {
          name: "Completed",
          data: [76, 85, 101, 98],
          color: '#018002'
        },
        {
          name: "Cancelled",
          data: [35, 41, 36, 26],
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
          "Week 1",
          "Week 2",
          "Week 3",
          "Week 4"
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

  getChartOptions() {
    return {
      series: [
        {
          name: "Total",
          data: [0, 0, 0],
          color: '#0c8dc0'
        },
        {
          name: "Completed",
          data: [0, 0, 0],
          color: '#018002'
        },
        {
          name: "Cancelled",
          data: [0, 0, 0],
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
          "Passenger Deliveries",
          "Item Deliveries",
          "Passenger Item Deliveries"
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
