import { Component, OnInit } from '@angular/core';
import {DriverService} from '../../../../_service/driver.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-view-over-time',
  templateUrl: './view-over-time.component.html',
  styleUrls: ['./view-over-time.component.css']
})
export class ViewOverTimeComponent implements OnInit {
  isModalTable = {
    text: '',
    openTable: false,
    foundUser: ''
  };

  otDetails = [];

  ot = {
    overTimeID: '',
    otDate: '',
    noOfShifts: '',
    startTime: '',
    endTime: '',
    approval: ''
  };

  constructor(private driverService: DriverService, private router: Router) {

  }


  ngOnInit(): void {
    this.getOT();
  }

  setOT(otDetails) {
    this.ot = otDetails;
    this.isTrueOrFalse(true);
  }

  goToUpdate(otDetails) {
    this.driverService.ot = otDetails;
    this.router.navigate(['/main/update_over_time']);
    console.log(otDetails);
  }

  isTrueOrFalse(reply) {
    this.isModalTable.openTable = reply;
  }

  getOT() {
    this.driverService.getOT().subscribe((ot) => {
      this.otDetails = ot;
    });
  }

}

