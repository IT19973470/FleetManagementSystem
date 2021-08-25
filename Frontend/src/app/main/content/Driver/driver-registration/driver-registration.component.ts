import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";
import {DriverService} from "../../../../_service/driver.service";

@Component({
  selector: 'app-driver-registration',
  templateUrl: './driver-registration.component.html',
  styleUrls: ['./driver-registration.component.css']
})
export class DriverRegistrationComponent implements OnInit {

  @ViewChild('driverRegistrationForm', {static: true}) public driverRegistrationForm: NgForm;
  driverDetail = {
    employeeID:'',
    accountType:'',
    nic:'',
    dob:'',
    name:'',
    address:'',
    contactNo:'',
    email:'',
    registeredDate:'',
    nameWithInitials:'',
    password:'',
    lisenseID:'',
    driverDetails:[]
  };

  constructor(private driverService:DriverService) {

  }

  // Register(){
  //   this.driverService.Register(this.driverDetail).subscribe(){
  //     this.driverDetail.push(driverDetail);
  //     this.
  //   }
  // }

  ngOnInit(): void {
  }

  onSubmit() {
    return false;
  }
}

