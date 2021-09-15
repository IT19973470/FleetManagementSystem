import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";
import {DriverService} from "../../../../_service/driver.service";
import {NotifierService} from "angular-notifier";
import {AlertBoxService} from "../../../../alert-box/alert-box.service";

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

  alertBox = {
    alert: false,
    msg: '',
    value: ''
  };
  constructor(private driverService: DriverService,
              private router: Router,
              private notifierService: NotifierService,
              private alertService: AlertBoxService) {

  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.alertBox.alert = true;
    this.alertBox.msg = 'Do you want to add this account?';
    this.alertService.reply.observers = [];
    this.alertService.reply.subscribe(reply => {
      if (reply) {
    console.log(this.driverDetail);
    this.driverService.addDriver(this.driverDetail).subscribe((driverDetail) => {
      this.notifierService.notify("success", "Driver added successfully. Please wait for the approval");
      this.router.navigate(['/login'])
    }, (err) => {
      this.notifierService.notify("error", "Adding failed");
    })
      }
      this.alertBox.alert = false;
    })
  }
}

