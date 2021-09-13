import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {BookingManagerService} from "../../../../../_service/booking-manager.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-update-shift',
  templateUrl: './update-shift.component.html',
  styleUrls: ['./update-shift.component.css']
})
export class UpdateShiftComponent implements OnInit {

  @ViewChild('shiftForm', {static: true}) public shiftForm: NgForm;
  driverVehicles = [];
  shift = {
    shiftId: '',
    shiftDate: '',
    startingTime: '',
    startingTimeActual: '',
    endingTime: '',
    endingTimeActual: '',
    driverVehicle: {
      driverVehicleID: {
        driverID: '',
        vehicleId: ''
      }
    },
    bookingManagementClerk: {
      bookingManagementClerkId: ''
    }
  };

  deliveryDate;
  driverId;

  // selectedDriver;

  constructor(private bookingManagerService: BookingManagerService, private router: Router) {
  }

  ngOnInit(): void {
    this.shift.shiftDate = this.bookingManagerService.getCurDate();
    this.shift = this.bookingManagerService.shift;
  }

  // setItem(deliveryItem) {
  //   this.deliveryItem = deliveryItem;
  // }

  selectDriver(driver) {
    // this.selectedDriver = driver;
    this.shift.driverVehicle.driverVehicleID.driverID = driver.driverVehicleID.driverID;
    this.shift.driverVehicle.driverVehicleID.vehicleId = driver.driverVehicleID.vehicleId;
  }

  getDriveVehicles() {
    this.bookingManagerService.getDriveVehicles(this.driverId).subscribe((driverVehicles) => {
      this.driverVehicles = driverVehicles;
      console.log(this.driverVehicles)
    })
  }

  onSubmit() {
    this.shift.startingTime = this.shift.startingTimeActual;
    this.shift.endingTime = this.shift.endingTimeActual;
    this.shift.bookingManagementClerk = {
      bookingManagementClerkId: JSON.parse(localStorage.getItem('user'))['employeeID']
    };
    this.bookingManagerService.updateShift(this.shift).subscribe(() => {
      this.router.navigate(['/main/view_shifts'])
    })
  }

  removeShift() {
    this.bookingManagerService.deleteDriverShift(this.shift.shiftId).subscribe(() => {
      this.router.navigate(['/main/view_shifts'])
    })
  }

}
