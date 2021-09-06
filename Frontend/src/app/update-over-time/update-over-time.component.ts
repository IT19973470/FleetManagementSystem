import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {DriverService} from "../_service/driver.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-update-over-time',
  templateUrl: './update-over-time.component.html',
  styleUrls: ['./update-over-time.component.css']
})
export class UpdateOverTimeComponent implements OnInit {
  addOT = {
    overTimeID:'',
    otDate:'',
    noOfShifts:'',
    startTime:'',
    endTime:''
  };

  constructor(private driverService: DriverService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.addOT);
    this.driverService.addOT(this.addOT).subscribe((addOT)=>{
      this.router.navigate(['main/View_Over_Time']);
    })
  }

}
