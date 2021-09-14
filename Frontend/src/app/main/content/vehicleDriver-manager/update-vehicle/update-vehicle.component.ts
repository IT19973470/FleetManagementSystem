import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {VehicleDriverManagerService} from "../../../../_service/vehicle-driver-manager.service";
import {Router} from "@angular/router";
import {NotifierService} from "angular-notifier";


@Component({
  selector: 'app-update-vehicle',
  templateUrl: './update-vehicle.component.html',
  styleUrls: ['./update-vehicle.component.css']
})
export class UpdateVehicleComponent implements OnInit {

  // @ViewChild('vehicleForm', {static: true}) public vehicleForm: NgForm;
  vehicleDetail = {
    vehicleId: '',
    vehicleType: '',
    model: '',
    noOfSeats: '',
    initialMeter: '',
    serviceMeter: '',
    fuelBalance: '',
    fuelConsumption: '',
    occupied: '',
    fuelType: ''
  };
  private alertBox: any;
  private alertService: any;
  private notifierService: any;

  constructor(private vehicleDriverManagerService: VehicleDriverManagerService, private router: Router) {


  }

  ngOnInit(): void {
    this.vehicleDetail = this.vehicleDriverManagerService.vehicle;
  }

  OnSubmitVehicle() {
    // this.alertBox.alert = true;
    // this.alertBox.msg = 'Do you want to update this delivery?';
    // this.alertService.reply.observers = [];
    // this.alertService.reply.subscribe(reply => {
    //   if(reply) {
        console.log(this.vehicleDetail)
        this.vehicleDriverManagerService.updateVehicle(this.vehicleDetail).subscribe((vehicle) => {
          // let vehicleDetail;
          // this.vehicleDetail=vehicleDetail;
          this.notifierService.notify("success", "Delivery updated successfully");
          this.router.navigate(['/main/view_vehicles'])
        })


  }
  removeVehicle() {
    this.vehicleDriverManagerService.deleteVehicle(this.vehicleDetail.vehicleId).subscribe((reply) => {
      if (reply) {
        this.router.navigate(['/main/view_vehicles'])
      }
    })
  }

  // setNewVehicle() {
  //   this.vehicle = this.getNewVehicle();
  //   this.vehicleForm.resetForm(this.vehicle);
  // }

  // getNewVehicle() {
  //   return {
  //     vehicleId: '',
  //     vehicleType: '',
  //     model: '',
  //     noOfSeats: '',
  //     initialMeter: '',
  //     serviceMeter: '',
  //     fuelBalance: '',
  //     fuelType: '',
  //     fuelConsumption: '',
  //     occupied: ''
  //   };
  // }
}

