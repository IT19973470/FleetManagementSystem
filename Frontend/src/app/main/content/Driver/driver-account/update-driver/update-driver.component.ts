import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {DriverService} from "../../../../../_service/driver.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-update-driver',
  templateUrl: './update-driver.component.html',
  styleUrls: ['./update-driver.component.css']
})
export class UpdateDriverComponent implements OnInit {
  @ViewChild('driverRegistrationForm', {static: true}) public driverRegistrationForm: NgForm;
  driverDetail = {
    lisenseID: '',
    userAccount: {
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
    }
  };

  constructor(private driverService: DriverService, private router: Router) {
    this.driverDetail = this.getDriver();
  }

  ngOnInit(): void {
    this.driverDetail =this.driverService.driver;
  }

  onSubmit() {
    console.log(this.driverDetail);
    this.driverService.addDriver(this.driverDetail).subscribe((driverDetail) => {
      this.router.navigate(['main/driver_account'])
    })
  }

  getDriver() {
    return {
      lisenseID: '',
      userAccount: {
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
      }
  };
}}
