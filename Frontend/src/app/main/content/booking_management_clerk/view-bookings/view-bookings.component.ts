import { Component, OnInit } from '@angular/core';
import {BookingManagerService} from "../../../../_service/booking-manager.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-view-bookings',
  templateUrl: './view-bookings.component.html',
  styleUrls: ['./view-bookings.component.css']
})
export class ViewBookingsComponent implements OnInit {


  bookings = [];
  //  booking ={
  //    bookingId: '1',
  //    bookingDateTime: '',
  //    destination: '',
  //    bookingStatus: '',
  //    bookings : []
  // };

  bookingId;
  bookingManagementClerkId;


  constructor(private bookingManagerService: BookingManagerService, private router: Router) {
  }

  ngOnInit(): void {
    this.getAllBookings();
  }



  goToUpdate(booking) {
    this.bookingManagerService.booking = booking;
    this.router.navigate(['/main/update_bookings'])
  }

  getAllBookings() {
    this.bookingManagerService.getAllBookings().subscribe((bookings) => {
      this.bookings = bookings;
      console.log(bookings)
    })
  }

  getBookingsByBookingId(){
    this.bookingManagerService.getBookingsByBookingId(this.bookingId).subscribe((bookings) => {
      this.bookings=bookings;


    })
  }


  getBookingsByBookingManagementClerkId() {
    this.bookingManagerService.getBookingsByBookingManagementClerkId(this.bookingManagementClerkId).subscribe((bookings) => {
      this.bookings=bookings;
  })
}
}
