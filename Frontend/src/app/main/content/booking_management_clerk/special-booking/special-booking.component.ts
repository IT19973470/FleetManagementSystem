import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {BookingManagerService} from "../../../../_service/booking-manager.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-special-booking',
  templateUrl: './special-booking.component.html',
  styleUrls: ['./special-booking.component.css']
})
export class SpecialBookingComponent implements OnInit {

  @ViewChild('specialBookingForm', {static: true}) public specialBookingForm: NgForm;

  specialBooking = {
    booking: {
      bookingId: '',
      bookingDateTime: '',
      destination: '',
      bookingStatus: true,
      bookingManagementClerk: {
        bookingManagementClerkId: ''
      }
    },
    description: '',
    noOfPassengers: '',
    approvedFuelAmount: ''
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
    this.specialBooking.booking.bookingManagementClerk.bookingManagementClerkId = JSON.parse(localStorage.getItem('user'))['employeeID'];
    console.log(this.specialBooking);
    this.bookingManagerService.addSpecialBooking(this.specialBooking).subscribe(() => {
      this.router.navigate(['/main/view_special_booking'])
    })
  }

}
