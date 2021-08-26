import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {VehicleDriverManagerService} from "../../../../_service/vehicle-driver-manager.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {

  @ViewChild('vehicleForm', {static: true}) public vehicleForm: NgForm;
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

  vehicle: any;

  constructor(private vehicleDriverManagerService: VehicleDriverManagerService, private router: Router) {
    this.vehicle = this.getNewVehicle();
  }

  ngOnInit(): void {
  }

  OnSubmitVehicle() {
    // console.log(this.vehicleDetail)
    this.vehicleDriverManagerService.addVehicle(this.vehicleDetail).subscribe((vehicle) => {
      this.router.navigate(['/main/view_vehicles'])
    })
  }

  getNewVehicle() {
    return {
      vehicleId: '',
      vehicleType: '',
      model: '',
      noOfSeats: '',
      initialMeter: '',
      serviceMeter: '',
      fuelBalance: '',
      fuelType: '',
      fuelConsumption: '',
      occupied: ''
    };
  }
}
