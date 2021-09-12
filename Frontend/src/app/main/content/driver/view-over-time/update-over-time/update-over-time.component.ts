import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {DriverService} from "../../../../../_service/driver.service";
import {Router} from "@angular/router";

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
    noOfShifts:'',
    startTime:'',
    endTime:''
  };


  constructor(private driverService: DriverService, private router: Router) {
    this.OT = this.getOT();
  }

  getOT() {
    return {
      overTimeID:'',
      otDate:'',
      noOfShifts:'',
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

}
