import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {TransportManagerService} from "../../../../_service/transport-manager.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-driver-account',
  templateUrl: './driver-account.component.html',
  styleUrls: ['./driver-account.component.css']
})
export class DriverAccountComponent implements OnInit {
  @ViewChild('itemForm', {static: true}) public itemForm: NgForm;
  driverDetail = {
    employeeID: '',
    accountType: '',
    nic: '',
    dob: '',
    name: '',
    address: '',
    contactNo: '',
    email: '',
    registeredDate: '',
    nameWithInitials: '',
    password: '',
    lisenseid: ''
  };
  driverDetails: [];

  ngOnInit(): void {
  }


  setDriver(driverDetails: []) {
    
  }

  goToUpdate(driverDetails: []) {
    
  }
}
