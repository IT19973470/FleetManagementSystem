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
    bookingId: '',
    bookingDate:'',
    bookingTime:'',
    bookingTimeActual:'',
    bookingDateTime: '',
    destination:'',
    bookingStatus:'',
    approvedFuelAmount:'',
    description:'',
    noOfPassengers:'',

    bookingManagementClerk: {
      bookingManagementClerkId: ''
    }
  };

  selected = ""

  update(e) {
    this.selected = e.target.value
  }

  constructor(private bookingManagerService: BookingManagerService, private router: Router) {
  }

  ngOnInit(): void {
    this.specialBooking.bookingDateTime = this.bookingManagerService.getCurDate();
    this.specialBooking = this.bookingManagerService.specialBooking;

  }

  onSubmit() {
    this.specialBooking.bookingDateTime= this.specialBooking.bookingDate + 'T' + this.specialBooking.bookingTimeActual

    this.specialBooking.bookingManagementClerk= {
      bookingManagementClerkId: JSON.parse(localStorage.getItem('user'))['employeeID']
    };
    console.log(this.specialBooking);
    this.bookingManagerService.updateBooking(this.specialBooking).subscribe(() => {
      this.router.navigate(['/main/view_special_booking'])
    })
  }

  removeSpecialBooking() {
    this.bookingManagerService.deleteSpecialBooking(this.specialBooking.bookingId).subscribe(() => {
      this.router.navigate(['/main/view_special_booking'])
    })
  }


}
