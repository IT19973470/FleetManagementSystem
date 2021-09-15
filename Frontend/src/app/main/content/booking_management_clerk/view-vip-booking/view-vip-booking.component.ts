import { Component, OnInit } from '@angular/core';
import {BookingManagerService} from "../../../../_service/booking-manager.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-view-vip-booking',
  templateUrl: './view-vip-booking.component.html',
  styleUrls: ['./view-vip-booking.component.css']
})
export class ViewVipBookingComponent implements OnInit {


  vipBooking = [];
  // vipBookings={
  // vipBookingId:'',
  //   vipMember:{
  //   vipMemberId:'',
  //     firstName:'',
  //   }


  bookingId;
  bookingManagementClerkId;
  vipBookingId;


  constructor(private bookingManagerService: BookingManagerService, private router: Router) {
  }

  ngOnInit(): void {
    this.getAllVipBooking();
  }

  goToUpdate(booking) {
    this.bookingManagerService.vipBooking = booking;
    this.router.navigate(['/main/update_vip_booking'])
  }

  getAllVipBooking() {
    this.bookingManagerService.getAllVipBooking().subscribe((vipBooking) => {
      this.vipBooking = vipBooking;
      // console.log(specialBooking)
    })
  }

  getVipBookingByVipBookingId() {
    this.bookingManagerService.getVipBookingByVipBookingId(this.vipBookingId).subscribe((vipBooking) => {
      this.vipBooking = vipBooking;
      console.log(vipBooking)

    })
  }


}
