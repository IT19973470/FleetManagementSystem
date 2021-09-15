import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {SecurityOfficerService} from "../../../../_service/security-officer.service";
import {Router} from "@angular/router";
import {NotifierService} from "angular-notifier";

@Component({
  selector: 'app-meter-detail',
  templateUrl: './meter-detail.component.html',
  styleUrls: ['./meter-detail.component.css']
})
export class MeterDetailComponent implements OnInit {

  @ViewChild('meterForm', {static: true}) public meterForm: NgForm;
  token;
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

  btnText = 'Add';
  meter: any;

  constructor(private securityOfficerService: SecurityOfficerService, private router: Router,private notifierService: NotifierService) {
  }

  ngOnInit(): void {
    this.token = this.securityOfficerService.tokenDetail;
  }

  // addMeterDetail() {
  //   this.meterDetail.token = this.token;
  //   this.securityOfficerService.addMeterDetail(this.meterDetail).subscribe((meter) => {
  //     this.meters.push(meter);
  //     this.newMeter();
  //     this.router.navigate(['/main/arrival_departure_page'])
  //   })
  // }

  addMeterDetail() {
    this.meterDetail.token = this.token;
    this.securityOfficerService.addMeterDetail(this.meterDetail).subscribe((meter) => {
      let count = 0;
      if (this.btnText === 'Add' && count === 0) {
        this.meters.push(meter);
        this.notifierService.notify("success", "Meter Detail added successfully");
        this.newMeter();
        this.router.navigate(['/main/arrival_departure_page'])
      }
      else
        this.notifierService.notify("error", "Meter Detail cannot be added!!");
    })
  }

  newMeter() {
    this.meterDetail = {
      meterId: '',
      outMeter: '',
      inMeter: '',
      mileage: '',
      token: {
        tokenID: ''
      },
    }
  };

}
