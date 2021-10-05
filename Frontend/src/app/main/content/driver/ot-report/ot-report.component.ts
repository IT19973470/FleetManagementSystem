import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {DriverService} from "../../../../_service/driver.service";

@Component({
  selector: 'app-ot-report',
  templateUrl: './ot-report.component.html',
  styleUrls: ['./ot-report.component.css']
})
export class OtReportComponent implements OnInit {

  driver = {
    driverID: '',
    userAccount: {
      employeeID: '',
      name: '',
    },
  };
  driverDetails: [];

  constructor(private driverService: DriverService) {

  }

  ngOnInit(): void {
    this.getDriver();
  }

  getDriver() {
    this.driverService.getDriver(JSON.parse(localStorage.getItem('user'))['employeeID']).subscribe((driver) => {
      this.driver = driver;
      console.log(this.driverDetails);
    });
  }
  // constructor (private httpService: HttpClient) { }
  //
  // // ADD CHART OPTIONS.
  // pieChartOptions = {
  //   responsive: true
  // }
  //
  // pieChartLabels =  ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
  //
  // // CHART COLOR.
  // pieChartColor:any = [
  //   {
  //     backgroundColor: ['rgba(30, 169, 224, 0.8)',
  //       'rgba(255,165,0,0.9)',
  //       'rgba(139, 136, 136, 0.9)',
  //       'rgba(255, 161, 181, 0.9)',
  //       'rgba(255, 102, 0, 0.9)'
  //     ]
  //   }
  // ]
  //
  // pieChartData:any = [
  //   {
  //     data: []
  //   }
  // ];
  //
  // ngOnInit () {
  //   this.httpService.get('./assets/sales.json', {responseType: 'json'}).subscribe(
  //     data => {
  //       this.pieChartData = data as any [];	 // FILL THE CHART ARRAY WITH DATA.
  //     },
  //     (err: HttpErrorResponse) => {
  //       console.log (err.message);
  //     }
  //   );
  // }
  //
  // onChartClick(event) {
  //   console.log(event);
  // }
}
