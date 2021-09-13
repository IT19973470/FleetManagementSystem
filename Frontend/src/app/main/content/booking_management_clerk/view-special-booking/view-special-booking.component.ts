import { Component, OnInit } from '@angular/core';
import {BookingManagerService} from "../../../../_service/booking-manager.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-view-special-booking',
  templateUrl: './view-special-booking.component.html',
  styleUrls: ['./view-special-booking.component.css']
})
export class ViewSpecialBookingComponent implements OnInit {

  specialBooking = [];
   booking ={
     bookingId: '1',
     bookingDateTime: '',
     destination: '',
     bookingStatus: '',
     bookings : []
  };

  bookingId;
  bookingManagementClerkId;


  constructor(private bookingManagerService: BookingManagerService, private router: Router) {
  }

  ngOnInit(): void {
    this.getAllBookings();
  }

  goToUpdate(booking) {
    this.bookingManagerService.booking = booking;
    this.router.navigate(['/main/update_special_booking'])
  }

  getAllBookings() {
    this.bookingManagerService.getAllBookings().subscribe((specialBooking) => {
      this.specialBooking = specialBooking;
      console.log(specialBooking)
    })
  }

  getBookingsByBookingId(){
    this.bookingManagerService.getBookingsByBookingId(this.bookingId).subscribe((specialBooking) => {
      this.specialBooking=specialBooking;


    })
  }


  getBookingsByBookingManagementClerkId() {
    this.bookingManagerService.getBookingsByBookingManagementClerkId(this.bookingManagementClerkId).subscribe((specialBooking) => {
      this.specialBooking=specialBooking;
    })
  }

}
