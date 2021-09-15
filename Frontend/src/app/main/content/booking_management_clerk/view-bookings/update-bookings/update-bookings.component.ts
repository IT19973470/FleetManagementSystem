import { Component, OnInit } from '@angular/core';
import {BookingManagerService} from "../../../../../_service/booking-manager.service";
import {Router} from "@angular/router";
import {NotifierService} from "angular-notifier";
import {AlertBoxService} from "../../../../../alert-box/alert-box.service";

@Component({
  selector: 'app-update-bookings',
  templateUrl: './update-bookings.component.html',
  styleUrls: ['./update-bookings.component.css']
})
export class UpdateBookingsComponent implements OnInit {


  booking = {
    bookingId: '',
    bookingDate:'',
    bookingTime:'',
    bookingTimeActual:'',
    bookingDateTime: '',
    destination:'',
    bookingStatus:'',

    bookingManagementClerk: {
      bookingManagementClerkId: ''
    }
  };

  selected = ""

  update(e) {
    this.selected = e.target.value
  }

  constructor(private bookingManagerService: BookingManagerService, private router: Router,
              private notifierService: NotifierService,
              private alertService: AlertBoxService) {
  }

  ngOnInit(): void {
    this.booking.bookingDateTime = this.bookingManagerService.getCurDate();
    this.booking = this.bookingManagerService.booking;

  }


  alertBox = {
    alert: false,
    msg: '',
    value: ''
  };

  onSubmit() {
      this.alertBox.alert = true;
  this.alertBox.msg = 'Do you want to update booking?';
  this.alertService.reply.observers = [];
  this.alertService.reply.subscribe(reply => {
    if (reply) {
    this.booking.bookingDateTime= this.booking.bookingDate + 'T' + this.booking.bookingTimeActual

    this.booking.bookingManagementClerk= {
      bookingManagementClerkId: JSON.parse(localStorage.getItem('user'))['employeeID']
    };
    console.log(this.booking);
    this.bookingManagerService.updateBooking(this.booking).subscribe(() => {
      this.notifierService.notify("success", "Booking updated successfully");
         this.router.navigate(['/main/view_bookings'])
      })
    }
    this.alertBox.alert = false;
  })

}

  removeBooking() {
    this.alertBox.alert = true;
  this.alertBox.msg = 'Do you want to delete this booking?';
  this.alertService.reply.observers = [];
  this.alertService.reply.subscribe(reply => {
    if (reply) {
    this.bookingManagerService.deleteBooking(this.booking.bookingId).subscribe(() => {
      if (reply) {
        this.notifierService.notify("success", "Booking deleted successfully");
      this.router.navigate(['/main/view_bookings'])
      }
      })
    }
    this.alertBox.alert = false;
  })
}


}
//
// removeShift() {
//   this.alertBox.alert = true;
//   this.alertBox.msg = 'Do you want to delete this shift?';
//   this.alertService.reply.observers = [];
//   this.alertService.reply.subscribe(reply => {
//     if (reply) {
//       this.bookingManagerService.deleteDriverShift(this.shift.shiftId).subscribe(() => {
//         if (reply) {
//           this.router.navigate(['/main/view_shifts'])
//         }
//       })
//     }
//     this.alertBox.alert = false;
//   })
// }
