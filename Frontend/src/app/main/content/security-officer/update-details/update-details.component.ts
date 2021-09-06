import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {SecurityOfficerService} from "../../../../_service/security-officer.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-update-details',
  templateUrl: './update-details.component.html',
  styleUrls: ['./update-details.component.css']
})
export class UpdateDetailsComponent implements OnInit {

  @ViewChild('tokenForm', {static: true}) public tokenForm: NgForm;

  tokenDetail = {
    tokenID: '',
    departureDate: '',
    departureTime: '',
    departureDateTime: '',
    departureTimeActual:'',
    arrivalDate: '',
    arrivalTime: '',
    arrivalDateTime: '',
    arrivalTimeActual:'',
    transportStatus: '',
    tokens: []
  };

  meters = [];
  meterDetail = {
    meterId: '',
    outMeter: '',
    inMeter: '',
    mileage: '',
    token: {
      tokenID: ''
    },
  };

  btnText;
  meter: any;
  token;

  constructor(private securityOfficerService: SecurityOfficerService, private router: Router) {
  }

  ngOnInit(): void {
    this.tokenDetail = this.securityOfficerService.tokenDetail;
  }

  onSubmit() {
    // this.tokenDetail.booking = this.booking;
    // this.tokenDetail.securityOfficer.securityOfficerID = this.getUser()['employeeID']
    this.tokenDetail.departureDateTime = this.tokenDetail.departureDate + 'T' + this.tokenDetail.departureTimeActual;
    this.tokenDetail.arrivalDateTime = this.tokenDetail.arrivalDate + 'T' + this.tokenDetail.arrivalTimeActual;
    this.securityOfficerService.updateToken(this.tokenDetail).subscribe((tokenDetail) => {
      this.router.navigate(['/main/arrival_departure_page'])
    })
  }

  addMeterDetail() {
    this.meterDetail.token = this.token;
    this.securityOfficerService.addMeterDetail(this.meterDetail).subscribe((meter) => {
      this.router.navigate(['/main/arrival_departure_page'])
    })
  }

}
