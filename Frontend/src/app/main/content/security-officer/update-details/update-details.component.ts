import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {SecurityOfficerService} from "../../../../_service/security-officer.service";
import {Router} from "@angular/router";
import {NotifierService} from "angular-notifier";

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

  btnTextToken = 'Update Token';
  btnTextMeter = 'Update Meter Details'
  meter: any;
  token;

  constructor(private securityOfficerService: SecurityOfficerService, private router: Router,private notifierService: NotifierService) {
  }

  ngOnInit(): void {
    this.tokenDetail = this.securityOfficerService.tokenDetail;
    this.meterDetail = this.securityOfficerService.tokenDetail.meterDetail;
    this.chkMeter();
  }

  // onSubmit() {
  //   this.tokenDetail.departureDateTime = this.tokenDetail.departureDate + 'T' + this.tokenDetail.departureTimeActual;
  //   this.tokenDetail.arrivalDateTime = this.tokenDetail.arrivalDate + 'T' + this.tokenDetail.arrivalTimeActual;
  //   this.securityOfficerService.updateToken(this.tokenDetail).subscribe((tokenDetail) => {
  //     this.router.navigate(['/main/update_details'])
  //   })
  // }

  onSubmit() {
    this.tokenDetail.departureDateTime = this.tokenDetail.departureDate + 'T' + this.tokenDetail.departureTimeActual;
    this.tokenDetail.arrivalDateTime = this.tokenDetail.arrivalDate + 'T' + this.tokenDetail.arrivalTimeActual;
    this.securityOfficerService.updateToken(this.tokenDetail).subscribe((tokenDetail) => {
      let count = 0;
      if (this.btnTextToken === 'Update Token' && count === 0 && tokenDetail.transportStatus === true) {
          this.notifierService.notify("success", "Token updated successfully");
        this.router.navigate(['/main/update_details'])
      } else this.notifierService.notify("error", "Token cannot be updated!!");
    })
  }

  // addMeterDetail() {
  //   this.securityOfficerService.updateMeterDetail(this.meterDetail).subscribe((meterDetail) => {
  //     this.router.navigate(['/main/arrival_departure_page'])
  //   })
  // }

  addMeterDetail() {
    this.securityOfficerService.updateMeterDetail(this.meterDetail).subscribe((meterDetail) => {
      let count = 0;
      if (this.btnTextMeter === 'Update Meter Details' && count === 0 && meterDetail.inMeter > meterDetail.outMeter) {
        this.notifierService.notify("success", "Meter Detail updated successfully");
        this.router.navigate(['/main/completed_trips'])
      } else this.notifierService.notify("error", "Meter Detail cannot be updated!!");
    })
  }

  chkMeter() {
    if (this.meterDetail.inMeter < this.meterDetail.outMeter) {
      this.meterDetail.inMeter = this.meterDetail.outMeter;
    }
    this.meterDetail.mileage = this.meterDetail.inMeter - this.meterDetail.outMeter
  }
}
