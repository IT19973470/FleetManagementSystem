import {Component, OnInit} from '@angular/core';
import {SecurityOfficerService} from "../../../../_service/security-officer.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-completed-trips',
  templateUrl: './completed-trips.component.html',
  styleUrls: ['./completed-trips.component.css']
})
export class CompletedTripsComponent implements OnInit {

  isModalTable = {
    text: '',
    openTable: false,
    foundItem: ''
  };

  bookings = [];
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
      bookingId: '',
      destination: ''
    },
    securityOfficer: {
      securityOfficerID: ''
    },
    tokenDetails: []
  };

  meterDetail = {
    meterId: '',
    outMeter: 0,
    inMeter: 0,
    mileage: 0,
    meters: []
  };

  bookingDestination;
  tokenIdSearch;

  constructor(private securityOfficerService: SecurityOfficerService, private router: Router) {
  }

  ngOnInit(): void {
    this.getCompletedTokens();
  }

  setToken(tokenDetail) {
    this.meterDetail = tokenDetail.meterDetail;
    this.tokenDetail = tokenDetail;
    this.isTrueOrFalse(true);
  }

  isTrueOrFalse(reply) {
    this.isModalTable.openTable = reply;
  }

  getCompletedTokens() {
    this.securityOfficerService.getCompletedTokens().subscribe((tokens) => {
      this.tokens = tokens;
      console.log(this.tokens)
    })
  }

  getTokenByID() {
    this.securityOfficerService.getTokenByID(this.tokenIdSearch).subscribe((tokens) => {
      this.tokens = tokens;
    })
  }

  getBookingByDestination() {
    this.securityOfficerService.getBookingByDestination(this.bookingDestination).subscribe((bookings) => {
      this.bookings = bookings;
    })
  }

}
