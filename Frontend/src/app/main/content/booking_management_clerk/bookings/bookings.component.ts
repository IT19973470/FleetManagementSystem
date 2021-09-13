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
    bookingId: '1',
    bookingDateTime: '',
    destination: '',
    bookingStatus: true,

    bookingManagementClerk: {
      bookingManagementClerkId: 'BMC123'
    },
    // shift:{
    //   shiftId:''
    // }
  };
  // bookingStatuses = [
  //   "Active",
  //   "Inactive"
  // ]
  selected = ""

  update(e) {
    this.selected = e.target.value
  }

  constructor(private bookingManagerService: BookingManagerService, private router: Router) {
  }

  ngOnInit(): void {

  }

  onSubmit() {
    this.booking.bookingManagementClerk.bookingManagementClerkId = JSON.parse(localStorage.getItem('user'))['employeeID'];
    //this.booking.shift.shiftId = JSON.parse(localStorage.getItem('user'))['employeeID'];
    console.log(this.booking);
    this.bookingManagerService.addBooking(this.booking).subscribe(() => {
      this.router.navigate(['/main/view_bookings'])
    })
  }
}


