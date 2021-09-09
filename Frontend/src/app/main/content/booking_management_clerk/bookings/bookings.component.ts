import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {BookingManagerService} from "../../../../_service/booking-manager.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {


  @ViewChild('bookingForm', {static: true}) public bookingForm: NgForm;

  booking = {
    bookingId: '',
    bookingDate: '',
    bookingTime: '',
    bookingDateTime: '',
    destination:'',
    bookingStatus:'',

    bookingManagementClerk: {
      bookingManagementClerkId: ''
    }
  };


  constructor(private bookingManagerService: BookingManagerService, private router: Router) {
  }

  ngOnInit(): void {

  }

  // setItem(deliveryItem) {
  //   this.deliveryItem = deliveryItem;
  // }




  onSubmit() {
    this.booking.bookingDateTime = this.booking.bookingDate + 'T' + this.booking.bookingTime
    this.booking.bookingManagementClerk.bookingManagementClerkId = JSON.parse(localStorage.getItem('user'))['employeeID'];
    this.bookingManagerService.addBooking(this.booking).subscribe(() => {
      this.router.navigate(['/main/view_bookings'])
    })
  }

}
