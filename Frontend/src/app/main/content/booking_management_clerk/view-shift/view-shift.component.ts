import {Component, OnInit, ViewChild} from '@angular/core';
import {TransportManagerService} from "../../../../_service/transport-manager.service";
import {Router} from "@angular/router";
import {BookingManagerService} from "../../../../_service/booking-manager.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-view-shift',
  templateUrl: './view-shift.component.html',
  styleUrls: ['./view-shift.component.css']
})
export class ViewShiftComponent implements OnInit {
  @ViewChild('shiftForm', {static: true}) public shiftForm: NgForm;
  shifts = [];
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

  selectedShift;

  driverId;
  vehicleType;

  constructor(private bookingManagerService: BookingManagerService, private router: Router) {
  }

  ngOnInit(): void {
    this.getAllShifts();
  }

  selectShift(shift) {
    this.selectedShift = shift;
  }

  goToUpdate(shift) {
    this.bookingManagerService.shift = shift;
    this.router.navigate(['/main/update_shift'])
  }

  getAllShifts() {
    this.bookingManagerService.getAllShifts().subscribe((shifts) => {
      this.shifts = shifts;
      console.log(shifts)
    })
  }

  // getShift() {
  //   this.bookingManagerService.getShift(this.shiftId).subscribe((shifts) => {
  //     this.shifts = shifts;
  //     console.log(this.shifts)
  //   })
  // }

  getAllShiftsByDriver() {
    this.bookingManagerService.getAllShiftsByDriver(this.driverId).subscribe((shifts) => {
      this.shifts = shifts;
    })
  }

  getAllShiftsByVehicle() {
    this.bookingManagerService.getAllShiftsByVehicle(this.vehicleType).subscribe((shifts) => {
      this.shifts = shifts;
    })
  }

  goToApplicationBooking() {

  }

  goToSpecialBooking() {
    this.bookingManagerService.shift = this.selectedShift;
    this.router.navigate(['/main/special_booking'])
  }

  goToVipBooking() {
    // this.bookingManagerService.shift = this.selectedShift;
    // this.router.navigate(['/main/vip_booking'])
  }

  goToProgramBooking() {

  }
}
