import { Component, OnInit } from '@angular/core';
import {VehicleDriverManagerService} from "../../../../_service/vehicle-driver-manager.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-vehicle-pool',
  templateUrl: './vehicle-pool.component.html',
  styleUrls: ['./vehicle-pool.component.css']
})
export class VehiclePoolComponent implements OnInit {

  vehicles = [];
  vehicle = {
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

  //update vehicle object
  // vehicleDetail = {
  //   vehicleId: '',
  //   vehicleType: '',
  //   model: '',
  //   noOfSeats: '',
  //   initialMeter: '',
  //   serviceMeter: '',
  //   fuelBalance: '',
  //   fuelConsumption: '',
  //   occupied: '',
  //   fuelType: ''
  // };

  vehicleNumber;

  constructor(private vehicleDriverManagerService: VehicleDriverManagerService, private router: Router) {
  }

  ngOnInit(): void {
    this.vehicles = this.vehicleDriverManagerService.vehicle;
    this.getAllVehicles();
  }

  setVehicle(vehicle) {
    this.vehicle = vehicle;
    this.isTrueOrFalse(true);
  }

  goToUpdate(vehicle) {
    this.vehicleDriverManagerService.vehicle = vehicle;
    this.router.navigate(['/main/update_vehicle'])
  }

  //update vehicle method
  // OnSubmitVehicle() {
  //   console.log(this.vehicleDetail)
  //   this.vehicleDriverManagerService.updateVehicle(this.vehicleDetail).subscribe((vehicle) => {
  //     this.router.navigate(['/main/view_vehicles'])  //update_vehicle_pool
  //   })
  // }

  isTrueOrFalse(reply) {
  }

  getAllVehicles() {
    this.vehicleDriverManagerService.getAllVehicles().subscribe((vehicles) => {
      this.vehicles = vehicles;
      // console.log(this.vehicles)
    })
  }

  getVehicleByNumber() {
    this.vehicleDriverManagerService.getVehicleByNumber(this.vehicleNumber).subscribe((vehicles) => {
      this.vehicles = vehicles;
      // console.log(this.vehicles)
    })
  }

}

