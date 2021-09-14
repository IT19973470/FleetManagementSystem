import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {VehicleDriverManagerService} from "../../../../_service/vehicle-driver-manager.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-update-vipmember',
  templateUrl: './update-vipmember.component.html',
  styleUrls: ['./update-vipmember.component.css']
})
export class UpdateVipmemberComponent implements OnInit {

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
    // this.vipmember = this.getNewVipmember();
  }

  ngOnInit(): void {
    this.vipmemberDetail = this.vehicleDriverManagerService.vipmember;
  }
  OnSubmitVipmember() {
    // console.log(this.vipmemberDetail)
    // this.vehicleDriverManagerService.addVipmember(this.vipmemberDetail).subscribe((vipmember) => {
    //   this.router.navigate(['/main/view_vehicles'])
    // })
    console.log(this.vipmemberDetail)
    this.vehicleDriverManagerService.updateVipMember(this.vipmemberDetail).subscribe((vipmember) => {
      this.router.navigate(['/main/view_vipmembers'])
    })
  }
  removeVipMember() {
    this.vehicleDriverManagerService.deleteVipMember(this.vipmemberDetail.vipMemberId).subscribe((reply) => {
      if (reply) {
        this.router.navigate(['/main/view_vipmembers'])
      }
    })
  }
  // getNewVipmember() {
  //   return {
  //     vipMemberId:'',
  //     firstName:'',
  //     lastName:'',
  //     contactNumber:'',
  //     address:'',
  //     position:''
  //   };
  // }

}
