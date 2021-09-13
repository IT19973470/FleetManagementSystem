import { Component, OnInit } from '@angular/core';
import {BookingManagerService} from "../../../../../_service/booking-manager.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-update-bookings',
  templateUrl: './update-bookings.component.html',
  styleUrls: ['./update-bookings.component.css']
})
export class UpdateBookingsComponent implements OnInit {


  booking = {
    bookingId: '',
    bookingDateTime: '',
    destination:'',
    bookingStatus:'',

    bookingManagementClerk: {
      bookingManagementClerkId: 'BMC123'
    }
  };
  bookingStatus = [
    "Active",
    "Inactive"
  ]
  selected = ""

  update(e) {
    this.selected = e.target.value
  }

  constructor(private bookingManagerService: BookingManagerService, private router: Router) {
  }

  ngOnInit(): void {
    this.booking.bookingDateTime = this.bookingManagerService.getCurDate();
    this.booking = this.bookingManagerService.booking;

  }

  onSubmit() {
    this.booking.bookingManagementClerk= {
      bookingManagementClerkId: JSON.parse(localStorage.getItem('user'))['employeeID']
    };
    console.log(this.booking);
    this.bookingManagerService.updateBooking(this.booking).subscribe(() => {
      this.router.navigate(['/main/view_bookings'])
    })
  }

  removeBooking() {
    this.bookingManagerService.deleteBooking(this.booking.bookingId).subscribe(() => {
      this.router.navigate(['/main/view_bookings'])
    })
  }


}
