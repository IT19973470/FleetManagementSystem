import { Component, OnInit } from '@angular/core';
import {BookingManagerService} from "../../../../../_service/booking-manager.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-update-vip-booking',
  templateUrl: './update-vip-booking.component.html',
  styleUrls: ['./update-vip-booking.component.css']
})
export class UpdateVipBookingComponent implements OnInit {

  vipBooking = {
    approvedFuelAmount: '',
    purpose: '',
    timePeriod:'',
    approval:'',
    noOfPassengers: '',
    bookingManagementClerk: {
      bookingManagementClerkId: ''
    },
    booking: {
      bookingId: '',
      bookingDate: '',
      bookingTime: '',
      bookingTimeActual: '',
      bookingDateTime: '',
      destination: '',
      bookingStatus: '',
    },



  };

  selected = ""

  update(e) {
    this.selected = e.target.value
  }

  constructor(private bookingManagerService: BookingManagerService, private router: Router) {
  }

  ngOnInit(): void {
    this.vipBooking.booking.bookingDateTime = this.bookingManagerService.getCurDate();
    this.vipBooking = this.bookingManagerService.vipBooking;

  }

  onSubmit() {
    this.vipBooking.booking.bookingDateTime= this.vipBooking.booking.bookingDate + 'T' + this.vipBooking.booking.bookingTimeActual

    this.vipBooking.bookingManagementClerk= {
      bookingManagementClerkId: JSON.parse(localStorage.getItem('user'))['employeeID']
    };
    console.log(this.vipBooking);
    this.bookingManagerService.updateVipBooking(this.vipBooking).subscribe(() => {
      this.router.navigate(['/main/view_vip_booking'])
    })
  }

  removeVipBooking() {
    this.bookingManagerService.deleteVipBooking(this.vipBooking.booking.bookingId).subscribe(() => {
      this.router.navigate(['/main/view_vip_booking'])
    })
  }


}
