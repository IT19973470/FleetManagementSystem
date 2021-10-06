import { Component, OnInit } from '@angular/core';
import {DriverService} from "../../../../_service/driver.service";
import {Router} from "@angular/router";
import {DatePipe} from "@angular/common";
import html2canvas from "html2canvas";
import {jsPDF} from "jspdf";
import {BookingManagerService} from "../../../../_service/booking-manager.service";

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

  providers: [DatePipe]

  transformDate(date) {
    return this.datapipe.transform(date, 'MM-yyyy');
  }

  constructor(private driverService: DriverService,private router: Router, private datapipe: DatePipe) {

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

  sendToPdf(){
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
