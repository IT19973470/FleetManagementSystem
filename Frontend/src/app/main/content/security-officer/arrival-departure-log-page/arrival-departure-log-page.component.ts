import { Component, OnInit } from '@angular/core';
import {SecurityOfficerService} from "../../../../_service/security-officer.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-arrival-departure-log-page',
  templateUrl: './arrival-departure-log-page.component.html',
  styleUrls: ['./arrival-departure-log-page.component.css']
})
export class ArrivalDepartureLogPageComponent implements OnInit {

  isModalTable = {
    text: '',
    openTable: false,
    foundItem: ''
  };

  booking;
  tokens = [];
  tokenDetail = {
    tokenID: '',
    departureDate: '',
    departureTime: '',
    departureDateTime: '',
    arrivalDate: '',
    arrivalTime: '',
    arrivalDateTime: '',
    transportStatus: '',
    booking: {
      bookingId: ''
    },
    securityOfficer: {
      securityOfficerID: ''
    },
    tokenDetails:[]
  };

  tokenIdSearch;

  constructor(private securityOfficerService: SecurityOfficerService, private router: Router) { }

  ngOnInit(): void {
    this.tokenDetail.departureDate = this.securityOfficerService.getCurDate();
    this.getAllTokens();
  }

  setToken(tokenDetail) {
    this.tokenDetail = tokenDetail;
    this.isTrueOrFalse(true);
  }

  goToMeter(tokenDetail) {
    this.securityOfficerService.token = tokenDetail;
    this.router.navigate(['/main/add_meter_detail'])
  }

  goToUpdate(tokenDetail) {
    this.securityOfficerService.tokenDetail = tokenDetail;
    this.router.navigate(['/main/update_details'])
  }

  isTrueOrFalse(reply) {
    this.isModalTable.openTable = reply;
  }

  getAllTokens() {
    this.securityOfficerService.getAllTokens().subscribe((tokens) => {
      this.tokens = tokens;
      // console.log(this.vehicles)
    })
  }

  getTokenByID() {
    this.securityOfficerService.getTokenByID(this.tokenIdSearch).subscribe((tokens) => {
      this.tokens = tokens;
      // console.log(this.vehicles)
    })
  }

}
