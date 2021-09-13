import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {BookingManagerService} from "../../../../_service/booking-manager.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-vip-booking',
  templateUrl: './vip-booking.component.html',
  styleUrls: ['./vip-booking.component.css']
})
export class VipBookingComponent implements OnInit {


  @ViewChild('bookingForm', {static: true}) public bookingForm: NgForm;

  vipBooking = {
    bookingId: '1',
    bookingDateTime: '',
    destination: '',
    bookingStatus: true,
    purpose: '',
    timePeriod:'',
    approvedFuelAmount:'',
    approval:true,

    bookingManagementClerk: {
      bookingManagementClerkId: 'BMC123'
    }
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
    this.vipBooking.bookingManagementClerk.bookingManagementClerkId = JSON.parse(localStorage.getItem('user'))['employeeID'];
    console.log(this.vipBooking);
    this.bookingManagerService.addBooking(this.vipBooking).subscribe(() => {
      this.router.navigate(['/main/view_bookings'])
    })
  }

}
