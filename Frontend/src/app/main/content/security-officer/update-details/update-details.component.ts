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
    departureTimeActual: '',
    arrivalDate: '',
    arrivalTime: '',
    arrivalDateTime: '',
    arrivalTimeActual: '',
    transportStatus: '',
    tokens: []
  };

  meterDetail = {
    meterId: '',
    outMeter: 0,
    inMeter: 0,
    mileage: 0,
    meters: []
  };

  btnText;
  meter: any;
  token;

  constructor(private securityOfficerService: SecurityOfficerService, private router: Router) {
  }

  ngOnInit(): void {
    this.tokenDetail = this.securityOfficerService.tokenDetail;
    this.meterDetail = this.securityOfficerService.tokenDetail.meterDetail;
    this.chkMeter()
    // console.log(this.tokenDetail)
  }

  onSubmit() {
    // this.tokenDetail.booking = this.booking;
    // this.tokenDetail.securityOfficer.securityOfficerID = this.getUser()['employeeID']
    this.tokenDetail.departureDateTime = this.tokenDetail.departureDate + 'T' + this.tokenDetail.departureTimeActual;
    this.tokenDetail.arrivalDateTime = this.tokenDetail.arrivalDate + 'T' + this.tokenDetail.arrivalTimeActual;
    this.securityOfficerService.updateToken(this.tokenDetail).subscribe((tokenDetail) => {
      this.router.navigate(['/main/update_details'])
    })
  }

  addMeterDetail() {
    this.securityOfficerService.updateMeterDetail(this.meterDetail).subscribe((meterDetail) => {
      this.router.navigate(['/main/arrival_departure_page'])
    })
  }

  chkMeter() {
    if (this.meterDetail.inMeter < this.meterDetail.outMeter) {
      this.meterDetail.inMeter = this.meterDetail.outMeter;
    }
    this.meterDetail.mileage = this.meterDetail.inMeter - this.meterDetail.outMeter
  }
}
