import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {TransportManagerService} from "../../../../_service/transport-manager.service";
import {Router} from "@angular/router";
import {SecurityOfficerService} from "../../../../_service/security-officer.service";

@Component({
  selector: 'app-token',
  templateUrl: './token.component.html',
  styleUrls: ['./token.component.css']
})
export class TokenComponent implements OnInit {

  @ViewChild('tokenForm', {static: true}) public tokenForm: NgForm;
  booking;
  tokens = [];
  tokenDetail = {
    tokenID: '',
    departureDate: '',
    departureTime: '',
    departureDateTime: '',
    // arrivalDate: '',
    // arrivalTime: '',
    // arrivalDateTime: '',
    transportStatus: '',
    booking: {
      bookingId: ''
    },
    securityOfficer: {
      securityOfficerID: ''
    },
  };

  isModalTable = {
    text: '',
    openTable: false,
    foundItem: ''
  };

  token;
  btnText;
  tblIndex;

  constructor(private securityOfficerService: SecurityOfficerService, private router: Router) {
  }

  ngOnInit(): void {
    this.getAllTokens();
  }


  onSubmit() {
    this.tokenDetail.booking = this.booking;
    this.tokenDetail.securityOfficer.securityOfficerID = this.getUser()['employeeID']
    this.tokenDetail.departureDateTime = this.tokenDetail.departureDate + 'T' + this.tokenDetail.departureTime;
    //this.tokenDetail.arrivalDateTime = this.tokenDetail.arrivalDate + 'T' + this.tokenDetail.arrivalTime;
    console.log(this.tokenDetail)
    this.securityOfficerService.addToken(this.tokenDetail).subscribe((token) => {
      this.tokens.push(token);
      this.newToken()
      this.router.navigate(['/main/arrival_departure_page'])
    })
  }

  newToken() {
    this.tokenDetail = {
      tokenID: '',
      departureDate: '',
      departureTime: '',
      departureDateTime: '',
      // arrivalDate: '',
      // arrivalTime: '',
      // arrivalDateTime: '',
      transportStatus: '',
      booking: {
        bookingId: ''
      },
      securityOfficer: {
        securityOfficerID: ''
      }
    }
  };

  getUser() {
    return JSON.parse(localStorage.getItem('user'));
  }

  goToMeter(tokenDetail) {
    this.securityOfficerService.token = tokenDetail;
    this.router.navigate(['/main/add_meter_detail'])
  }

  getAllTokens() {
    this.securityOfficerService.getAllTokens().subscribe((tokens) => {
      this.tokens = tokens;
    })
  }

  isTrueOrFalse(reply) {
    this.isModalTable.openTable = reply;
  }


}
