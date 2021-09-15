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
  vipMembers = [];

  vipBooking = {
    booking: {
      bookingId: '1',
      bookingDateTime: '',
      destination: '',
      bookingStatus: true,
      bookingManagementClerk: {
        bookingManagementClerkId: 'BMC123'
      }
    },
    purpose: '',
    timePeriod: '',
    approvedFuelAmount: '',
    approval: true,
    vipMember:{
      vipMemberId:'',
    }
  };

  vipMemberId;
  selected = ""


  update(e) {
    this.selected = e.target.value
  }

  selectVipMember(vipMember) {
    this.vipBooking.vipMember.vipMemberId= vipMember.vipMemberId;
  }
  constructor(private bookingManagerService: BookingManagerService, private router: Router) {
  }

  ngOnInit(): void {

  }

  getVipMember() {
    this.bookingManagerService.getVipMember(this.vipMemberId).subscribe((vipMembers) => {
      this.vipMembers = vipMembers;
      console.log(this.vipMembers)
    })
  }

  onSubmit() {
    this.vipBooking.booking.bookingManagementClerk.bookingManagementClerkId = JSON.parse(localStorage.getItem('user'))['employeeID'];

    this.bookingManagerService.addVipBooking(this.vipBooking).subscribe(() => {
      this.router.navigate(['/main/view_vip_booking'])
    })
    console.log(this.vipBooking);
  }
}
