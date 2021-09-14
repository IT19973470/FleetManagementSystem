import { Component, OnInit } from '@angular/core';
import {DriverService} from "../_service/driver.service";
import {Router} from "@angular/router";
import {ApplicantService} from "../_service/applicant.service";
import {NotifierService} from "angular-notifier";

@Component({
  selector: 'app-applicant-regestration',
  templateUrl: './applicant-regestration.component.html',
  styleUrls: ['./applicant-regestration.component.css']
})
/** @title Form field with prefix & suffix */

export class ApplicantRegestrationComponent implements OnInit {

App={
  userAccount:{
    employeeID: "",
    accountType: "AP",
    nic: "",
    dob: "",
    name: "",
    address: "",
    nameWithInitials:"",
    contactNo: "",
    email: "",
    registeredDate: "",
    password: "",
    approved:true
  }
}
  driverDetails: [];

  isModalTable = {
    text: '',
    openTable: false,
    foundUser: ''
  };

  btn:boolean=true;
  type="text";

  constructor(private applicant: ApplicantService, private router: Router) {

  }
  ngOnInit(): void {


  }

  onSubmit() {
    console.log(this.App);

    // this.passengerpassengerApp.passengerApplication.noOfPassengers=this.z
    this.applicant.RegisterApplicant(this.App).subscribe((deliveryDetail) => {
      this.router.navigate(['/login'])
    })
    return false;
  }

  hide(){
this.type="password"
    this.btn=false
  }
  show(){
    this.type="text"
    this.btn=true
  }




}
