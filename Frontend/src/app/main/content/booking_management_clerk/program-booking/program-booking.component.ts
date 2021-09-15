import {Component, OnInit, ViewChild} from '@angular/core';
import {BookingManagerService} from "../../../../_service/booking-manager.service";
import {Router} from "@angular/router";
import {NotifierService} from "angular-notifier";
import {AlertBoxService} from "../../../../alert-box/alert-box.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-program-booking',
  templateUrl: './program-booking.component.html',
  styleUrls: ['./program-booking.component.css']
})
export class ProgramBookingComponent implements OnInit {

  @ViewChild('programBookingForm', {static: true}) public programBookingForm: NgForm;

  programBooking = {
    booking: {
      bookingId: '',
      bookingDateTime: '',
      destination: '',
      bookingStatus: true,
      bookingManagementClerk: {
        bookingManagementClerkId: ''
      }
    },
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

  }

  alertBox = {
    alert: false,
    msg: '',
    value: ''
  };

  setNewForm()
  {
    this.programBookingForm.resetForm();
  }

  onSubmit() {
    this.alertBox.alert = true;
    this.alertBox.msg = 'Do you want to add this program booking?';
    this.alertService.reply.observers = [];
    this.alertService.reply.subscribe(reply => {
      if (reply) {
        this.programBooking.booking.bookingManagementClerk.bookingManagementClerkId = JSON.parse(localStorage.getItem('user'))['employeeID'];
        console.log(this.programBooking);
        this.bookingManagerService.addSpecialBooking(this.programBooking).subscribe(() => {
          this.setNewForm();
          this.notifierService.notify("success", "Program Booking added successfully");

          //this.router.navigate(['/main/view_program_booking'])
        }, (err) => {
          this.notifierService.notify("error", "Program booking failed");
        })
      }
      this.alertBox.alert = false;
    })
  }


}
