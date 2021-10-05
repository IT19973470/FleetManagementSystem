import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {TransportManagerService} from "../../../../../_service/transport-manager.service";
import {jsPDF} from "jspdf";
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-weekly-report',
  templateUrl: './weekly-report.component.html',
  styleUrls: ['./weekly-report.component.css']
})
export class WeeklyReportComponent implements OnInit {

  chartOptionsP;
  weekValue = 1;

  deliveryItemDetails = [];
  days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  weeklyDeliveries = [[0, 0], [0, 0], [0, 0]]

  constructor(private router: Router, private transportManagerService: TransportManagerService,) {
    this.fillChart();
  }

  ngOnInit(): void {
    this.fillChart();
  }

  getDeliveriesReportWeekly(weeks) {
    this.weekValue = weeks;
    // this.transportManagerService.reportYear = year.value;
    // this.transportManagerService.reportMonth = month.value;
    this.transportManagerService.getDeliveriesReportWeekly(weeks).subscribe((report) => {
      // console.log(this.weeklyDeliveries)
      this.weeklyDeliveries = report.weeklyDeliveries;
      // console.log(this.weeklyDeliveries)
      this.refillChart(this.chartOptionsP);
    })
  }

  goToDailyReport() {
    this.transportManagerService.reportWeek = this.weekValue;
    this.router.navigate(['/main/delivery_report/daily_report'])
  }

  refillChart(chartOptions) {
    chartOptions.series = [
      {
        data: [this.weeklyDeliveries[0][0], this.weeklyDeliveries[1][0], this.weeklyDeliveries[2][0]]
      },
      {
        data: [this.weeklyDeliveries[0][1], this.weeklyDeliveries[1][1], this.weeklyDeliveries[2][1]]
      },
      {
        data: [this.weeklyDeliveries[0][0] - this.weeklyDeliveries[0][1], this.weeklyDeliveries[1][0] - this.weeklyDeliveries[1][1], this.weeklyDeliveries[2][0] - this.weeklyDeliveries[2][1]]
      }
    ]
  }

  fillChart() {
    this.chartOptionsP = this.getChartOptions();
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

  sendToPdf() {
    let data = document.getElementById("pdf");
    // let data = document.getElementById("maindiv");
    // console.log(data);
    html2canvas(data).then(canvas => {
      const contentDataURL = canvas.toDataURL('image/jpeg', 2.0)
      console.log(contentDataURL);
      let pdf = new jsPDF('l', 'cm', 'a3'); //Generates PDF in landscape mode
      // let pdf = new jspdf('p', 'cm', 'a4'); //Generates PDF in portrait mode
      pdf.addImage(contentDataURL, 'PNG', 0, 0, 45.7, 21.0);
      pdf.save('Filename.pdf');
    });
  }
}
