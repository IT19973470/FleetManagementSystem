import {Component, OnInit} from '@angular/core';
import {DriverService} from "../../../../_service/driver.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-over-time',
  templateUrl: './over-time.component.html',
  styleUrls: ['./over-time.component.css']
})
export class OverTimeComponent implements OnInit {

  addOT = {
    overTimeID: '',
    otDate: '',
    noOfShifts: '',
    startTime: '',
    endTime: '',
    driver: {
      driverID: ''
    }
  };

  constructor(private driverService: DriverService, private router: Router) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.addOT);
    this.addOT.driver.driverID = JSON.parse(localStorage.getItem('user'))['employeeID']
    this.driverService.addOT(this.addOT).subscribe((addOT) => {
      this.router.navigate(['main/view_over_time']);
    })
  }

  getMinDate() {
    return this.driverService.getCurDate();
  }

}
