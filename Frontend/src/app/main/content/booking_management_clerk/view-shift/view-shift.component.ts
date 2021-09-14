import {Component, OnInit} from '@angular/core';
import {TransportManagerService} from "../../../../_service/transport-manager.service";
import {Router} from "@angular/router";
import {BookingManagerService} from "../../../../_service/booking-manager.service";

@Component({
  selector: 'app-view-shift',
  templateUrl: './view-shift.component.html',
  styleUrls: ['./view-shift.component.css']
})
export class ViewShiftComponent implements OnInit {

  shifts = [];
  // deliveryItem = {
  //   deliveryId: '',
  //   deliveryPersonName: '',
  //   deliveryPersonNic: '',
  //   deliveryStatus: false,
  //   deliveryItemDetails: []
  // };

  driverId;
  vehicleType;
  constructor(private bookingManagerService: BookingManagerService, private router: Router) {
  }

  ngOnInit(): void {
    this.getAllShifts();
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

}
