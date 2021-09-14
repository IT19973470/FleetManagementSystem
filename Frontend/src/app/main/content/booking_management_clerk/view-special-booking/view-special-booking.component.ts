import {Component, OnInit} from '@angular/core';
import {BookingManagerService} from "../../../../_service/booking-manager.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-view-special-booking',
  templateUrl: './view-special-booking.component.html',
  styleUrls: ['./view-special-booking.component.css']
})
export class ViewSpecialBookingComponent implements OnInit {

  specialBooking = [];
  //  booking ={
  //    bookingId: '1',
  //    bookingDateTime: '',
  //    destination: '',
  //    bookingStatus: '',
  //    bookings : []
  // };

  bookingId;
  bookingManagementClerkId;
  specialBookingId;


  constructor(private bookingManagerService: BookingManagerService, private router: Router) {
  }

  ngOnInit(): void {
    this.getAllSpecialBooking();
  }

  goToUpdate(booking) {
    this.bookingManagerService.specialBooking = booking;
    this.router.navigate(['/main/update_special_booking'])
  }

  getAllSpecialBooking() {
    this.bookingManagerService.getAllSpecialBooking().subscribe((specialBooking) => {
      this.specialBooking = specialBooking;
      // console.log(specialBooking)
    })
  }

  getSpecialBookingBySpecialBookingId() {
    this.bookingManagerService.getSpecialBookingBySpecialBookingId(this.specialBookingId).subscribe((specialBooking) => {
      this.specialBooking = specialBooking;
       console.log(specialBooking)

    })
  }


}
