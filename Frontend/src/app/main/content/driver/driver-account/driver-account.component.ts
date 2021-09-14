import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {DriverService} from '../../../../_service/driver.service';

@Component({
  selector: 'app-driver-account',
  templateUrl: './driver-account.component.html',
  styleUrls: ['./driver-account.component.css']
})
export class DriverAccountComponent implements OnInit {
  @ViewChild('itemForm', {static: true}) public itemForm: NgForm;
  driver = {
    driverID: '',
    userAccount: {
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
    },
    lisenseID: ''
  };
  driverDetails: [];

  isModalTable = {
    text: '',
    openTable: false,
    foundUser: ''
  };

  constructor(private driverService: DriverService, private router: Router) {

  }


  ngOnInit(): void {

    this.getDriver();
  }

  onSubmit() {
    return false;
  }

  setDriver(driverDetails) {
    this.driver = driverDetails;
    this.isTrueOrFalse(true);
  }

  goToUpdate(driverDetails) {
    this.driverService.driver = this.driver;
    this.router.navigate(['/main/update_driver']);
  }

  isTrueOrFalse(reply) {
    this.isModalTable.openTable = reply;
  }

  getDriver() {
    this.driverService.getDriver(JSON.parse(localStorage.getItem('user'))['employeeID']).subscribe((driver) => {
      this.driver = driver;
      console.log(this.driverDetails);
    });
  }

  deleteDriver() {
    this.driverService.deleteDriver(this.driver.driverID).subscribe((reply) => {
        if (reply) {
          this.router.navigate(['/main/driver_registration'])
        }
      }
    )
  }

}
