import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {BookingManagerService} from "../../../../_service/booking-manager.service";
import {Router} from "@angular/router";
import {NotifierService} from "angular-notifier";
import {AlertBoxService} from "../../../../alert-box/alert-box.service";

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
    shift:{
      shiftId:''
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

  constructor(private bookingManagerService: BookingManagerService, private router: Router,
              private notifierService: NotifierService,
              private alertService: AlertBoxService) {
  }

  ngOnInit(): void {

  }

  alertBox = {
    alert: false,
    msg: '',
    value: ''
  };
  setNewForm()
  {
    this.bookingForm.resetForm();
  }
  onSubmit() {
   this.alertBox.alert = true;
  this.alertBox.msg = 'Do you want to add this booking?';
  this.alertService.reply.observers = [];
  this.alertService.reply.subscribe(reply => {
    if (reply) {
    this.booking.bookingManagementClerk.bookingManagementClerkId = JSON.parse(localStorage.getItem('user'))['employeeID'];
    //this.booking.shift.shiftId = JSON.parse(localStorage.getItem('user'))['employeeID'];
    console.log(this.booking);
    this.bookingManagerService.addBooking(this.booking).subscribe(() => {
      this.notifierService.notify("success", "Booking added successfully");
      this.setNewForm();

    // this.router.navigate(['/main/view_bookings'])
    }, (err) => {
         this.notifierService.notify("error", "Booking failed");
       })
     }
  this.alertBox.alert = false;
  })
 }

}

//
// onSubmit() {
//   this.alertBox.alert = true;
//   this.alertBox.msg = 'Do you want to add this shift?';
//   this.alertService.reply.observers = [];
//   this.alertService.reply.subscribe(reply => {
//     if (reply) {
//       this.shift.bookingManagementClerk.bookingManagementClerkId = JSON.parse(localStorage.getItem('user'))['employeeID'];
//       this.bookingManagerService.addShift(this.shift).subscribe(() => {
//         this.setNewForm();
//         this.notifierService.notify("success", "Shift added successfully");
//
//         // this.router.navigate(['/main/view_shifts'])
//       }, (err) => {
//         this.notifierService.notify("error", "Shift failed");
//       })
//     }
//     this.alertBox.alert = false;
//   })
// }
