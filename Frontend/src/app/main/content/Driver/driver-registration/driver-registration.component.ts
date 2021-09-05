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
    employeeID: '',
    accountType: 'DR',
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

  constructor(private driverService: DriverService, private router: Router) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.driverDetail);
    let driver = {
      userAccount: this.driverDetail
    }
    this.driverService.addDriver(driver).subscribe((driverDetail) => {
      this.router.navigate(['main/driver_account'])
    })
  }
}

