import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {DriverService} from "../../../../../_service/driver.service";
import {Router} from "@angular/router";
import {CommonService} from "../../../../../_service/common.service";

@Component({
  selector: 'app-update-over-time',
  templateUrl: './update-over-time.component.html',
  styleUrls: ['./update-over-time.component.css']
})
export class UpdateOverTimeComponent implements OnInit {
  @ViewChild('otForm', {static: true}) public otForm: NgForm;

  OT = {
    overTimeID:'',
    otDate:'',
    noOfShifts:0,
    startTime:'',
    endTime:''
  };


  constructor(private driverService: DriverService, private router: Router, private commonService: CommonService) {
    this.OT = this.getOT();
  }

  getOT() {
    return {
      overTimeID:'',
      otDate:'',
      noOfShifts:0,
      startTime:'',
      endTime:''
    };
  }

  ngOnInit(): void {
    this.OT = this.driverService.ot;
  }

  onSubmit() {
    console.log(this.OT);
    this.driverService.updateOT(this.OT).subscribe((OT)=>{
      this.router.navigate(['main/view_over_time']);
    })
  }

  setNumberPositive(val) {
    return this.commonService.setNumberPositive(val);
  }

}
