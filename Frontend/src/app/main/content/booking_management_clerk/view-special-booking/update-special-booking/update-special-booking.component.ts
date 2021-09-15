import { Component, OnInit } from '@angular/core';
import {BookingManagerService} from "../../../../../_service/booking-manager.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-update-special-booking',
  templateUrl: './update-special-booking.component.html',
  styleUrls: ['./update-special-booking.component.css']
})
export class UpdateSpecialBookingComponent implements OnInit {


  specialBooking = {
    approvedFuelAmount: '',
    description: '',
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
    this.specialBooking.booking.bookingDateTime = this.bookingManagerService.getCurDate();
    this.specialBooking = this.bookingManagerService.specialBooking;

  }

  onSubmit() {
    this.specialBooking.booking.bookingDateTime= this.specialBooking.booking.bookingDate + 'T' + this.specialBooking.booking.bookingTimeActual

    this.specialBooking.bookingManagementClerk= {
      bookingManagementClerkId: JSON.parse(localStorage.getItem('user'))['employeeID']
    };
    console.log(this.specialBooking);
    this.bookingManagerService.updateSpecialBooking(this.specialBooking).subscribe(() => {
      this.router.navigate(['/main/view_special_booking'])
    })
  }

  removeSpecialBooking() {
    this.bookingManagerService.deleteSpecialBooking(this.specialBooking.booking.bookingId).subscribe(() => {
      this.router.navigate(['/main/view_special_booking'])
    })
  }


}
