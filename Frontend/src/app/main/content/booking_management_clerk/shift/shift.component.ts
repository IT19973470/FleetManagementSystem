import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {TransportManagerService} from "../../../../_service/transport-manager.service";
import {Router} from "@angular/router";
import {BookingManagerService} from "../../../../_service/booking-manager.service";

@Component({
  selector: 'app-shift',
  templateUrl: './shift.component.html',
  styleUrls: ['./shift.component.css']
})
export class ShiftComponent implements OnInit {

  @ViewChild('shiftForm', {static: true}) public shiftForm: NgForm;
  driverVehicles = [];
  shift = {
    shiftId: '',
    shiftDate: '',
    startingTime: '',
    endingTime: '',
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
    this.shift.bookingManagementClerk.bookingManagementClerkId = JSON.parse(localStorage.getItem('user'))['employeeID'];
    this.bookingManagerService.addShift(this.shift).subscribe(() => {
      this.router.navigate(['/main/view_shifts'])
    })
  }
}
