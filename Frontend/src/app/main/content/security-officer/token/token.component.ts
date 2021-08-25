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
    tokenID: 'N/A',
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
    }
  };

  btnText = 'Add';
  tblIndex;

  constructor(private securityOfficerService: SecurityOfficerService) {
  }

  ngOnInit(): void {

  }

  addToken() {
    this.tokenDetail.booking = this.booking;
    this.tokenDetail.securityOfficer.securityOfficerID = this.getUser()['employeeID']
    this.tokenDetail.departureDateTime = this.tokenDetail.departureDate + 'T' + this.tokenDetail.departureTime;
    this.tokenDetail.arrivalDateTime = this.tokenDetail.arrivalDate + 'T' + this.tokenDetail.arrivalTime;
    console.log(this.tokenDetail)
    this.securityOfficerService.addToken(this.tokenDetail).subscribe((token) => {
      this.tokens.push(token);
      this.newToken()
    })
  }

  newToken() {
    this.tokenDetail = {
      tokenID: 'N/A',
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
      }
    }
  };

  getUser() {
    return JSON.parse(localStorage.getItem('user'));
  }

  // onSubmit() {
  //   if (this.btnText === 'Add') {
  //     this.tokenDetail.push(this.token);
  //   } else if (this.btnText === 'Update') {
  //     this.tokenDetail.tokenDetails[this.tblIndex] = this.token
  //   }
  //   this.setNewToken();
  // }

  // setToken(token, i) {
  //   this.tblIndex = i;
  //   this.token. = item.itemName;
  //   this.item.itemType = item.itemType;
  //   this.item.itemQty = item.itemQty;
  //   this.btnText = 'Update';
  // }

  // private setNewToken() {
  //   this.token = this.getNewToken();
  //   this.tokenForm.resetForm(this.token);
  //   this.btnText = 'Add';
  // }
  //
  // private getNewToken() {
  //   return {
  //     departureDateTime: '',
  //     arrivalDateTime: '',
  //     transportStatus:'',
  //   };
  // }
  onSubmit() {
    return true;
  }
}
