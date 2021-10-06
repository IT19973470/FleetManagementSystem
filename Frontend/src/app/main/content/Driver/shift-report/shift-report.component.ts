import { Component, OnInit } from '@angular/core';
import {DriverService} from "../../../../_service/driver.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-shift-report',
  templateUrl: './shift-report.component.html',
  styleUrls: ['./shift-report.component.css']
})
export class ShiftReportComponent implements OnInit {

  driver = {
    driverID: '',
    userAccount: {
      employeeID: '',
      name: '',
    },
  };
  driverDetails: [];
  currentYear: number = new Date().getFullYear();


  constructor(private driverService: DriverService,private router: Router) {

  }

  ngOnInit(): void {
    this.getDriver();
    this.getMyShift();
  }

  getDriver() {
    this.driverService.getDriver(JSON.parse(localStorage.getItem('user'))['employeeID']).subscribe((driver) => {
      this.driver = driver;
      console.log(this.driverDetails);
    });
  }

  shiftDetails = [];

  shift = {
    shiftId: '',
    attendance: '',
    endingTime: '',
    shiftDate: '',
    startingTime: '',
    driverID: ''
  };

  getMyShift() {
    this.driverService.getMyShift(JSON.parse(localStorage.getItem('user'))['employeeID']).subscribe((myShift) => {
      this.shift = myShift;
      console.log(this.shift);
    });
  }
}
