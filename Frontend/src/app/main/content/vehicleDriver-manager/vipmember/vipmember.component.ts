import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {VehicleDriverManagerService} from "../../../../_service/vehicle-driver-manager.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-vipmember',
  templateUrl: './vipmember.component.html',
  styleUrls: ['./vipmember.component.css']
})
export class VipmemberComponent implements OnInit {

  @ViewChild('vipmemberForm', {static: true}) public vipmemberForm: NgForm;
  vipmemberDetail = {

    vipMemberId:'',
    firstName:'',
    lastName:'',
    contactNumber:'',
    address:'',
    position:''


  };
  vipmember:any;
  constructor(private vehicleDriverManagerService: VehicleDriverManagerService, private router: Router) {
    this.vipmember = this.getNewVipmember();
  }

  ngOnInit(): void {
  }

  OnSubmitVipmember() {
    console.log(this.vipmemberDetail)
    this.vehicleDriverManagerService.addVipmember(this.vipmemberDetail).subscribe((vipmember) => {
      this.router.navigate(['/main/view_vipmembers'])
    })
  }
  getNewVipmember() {
    return {
      vipMemberId:'',
      firstName:'',
      lastName:'',
      contactNumber:'',
      address:'',
      position:''
    };
  }
}
