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
      vehicle_driver_management_clerk_vehicle_driver_management_id: 'EM001'
    }
  };

  constructor(private driverService: DriverService, private router: Router) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.driverDetail);
    this.driverService.addDriver(this.driverDetail).subscribe((driverDetail) => {
      this.router.navigate(['/login'])
    })
  }
}

