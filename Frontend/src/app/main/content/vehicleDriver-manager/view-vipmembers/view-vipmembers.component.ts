import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {VehicleDriverManagerService} from "../../../../_service/vehicle-driver-manager.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-view-vipmembers',
  templateUrl: './view-vipmembers.component.html',
  styleUrls: ['./view-vipmembers.component.css']
})
export class ViewVipmembersComponent implements OnInit {

  isModalTable = {
    text: '',
    openTable: false,
    foundItem: ''
  };
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

  }

  ngOnInit(): void {
    this.getAllVipMembers();
  }
  setVipMember(vipmember) {
    this.vipmember = vipmember;
    this.isTrueOrFalse(true);
  }
  goToUpdate(vipmember) {
    this.vehicleDriverManagerService.vipmember = vipmember;
    this.router.navigate(['/main/update_vehicle'])
  }

  isTrueOrFalse(reply) {
    this.isModalTable.openTable = reply;
  }

  getAllVipMembers() {
    this.vehicleDriverManagerService.getAllVipMembers().subscribe((vipmembers) => {
      this.vipmembers = vipmembers;
      // console.log(this.vipmember)
    })
  }

  // getVehicleByNumber() {
  //   this.vehicleDriverManagerService.getVehicleByNumber(this.vehicleNumber).subscribe((vehicles) => {
  //     this.vipmembers = vipmembers;
  //     // console.log(this.vehicles)
  //   })
  vipmembers: any;




}
