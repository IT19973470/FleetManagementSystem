import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {SecurityOfficerService} from "../../../../_service/security-officer.service";
import {Router} from "@angular/router";

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

  btnText;
  meter: any;

  constructor(private securityOfficerService: SecurityOfficerService, private router: Router) {
  }

  ngOnInit(): void {
  }

  addMeterDetail() {
    this.meterDetail.token = this.token;
    this.securityOfficerService.addMeterDetail(this.meterDetail).subscribe((meter) => {
      this.meters.push(meter);
      this.newMeter();
      this.router.navigate(['/main/add_meter_detail'])
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
