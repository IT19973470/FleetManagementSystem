import { Component, OnInit } from '@angular/core';
import {DriverService} from '../../../../_service/driver.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-shift-details',
  templateUrl: './shift-details.component.html',
  styleUrls: ['./shift-details.component.css']
})
export class ShiftDetailsComponent implements OnInit {
  isModalTable = {
    text: '',
    openTable: false,
    foundUser: ''
  };

  shiftDetails={
  driver_driverid: ''
  };
  shift: any;

  constructor(private driverService: DriverService, private router: Router) {

  }


  ngOnInit(): void {
    // this.getShift();
  }

  onSubmit() {
    return false;
  }

  setShift(shiftDetails) {
    this.shiftDetails = shiftDetails;
    this.isTrueOrFalse(true);
  }

  goToUpdate(shiftDetails) {
    this.driverService.shift = this.shiftDetails;
    this.router.navigate(['/main/update_over_time']);
  }

  isTrueOrFalse(reply) {
    this.isModalTable.openTable = reply;
  }

  // getShift() {
  //   this.driverService.getShift(JSON.parse(localStorage.getItem('user'))['employeeID']).subscribe((shift) => {
  //     this.shiftDetails = shift;
  //   });
  // }
}
