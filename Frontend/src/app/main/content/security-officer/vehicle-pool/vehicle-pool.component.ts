import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {SecurityOfficerService} from "../../../../_service/security-officer.service";

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

  vehicleNumber;

  constructor(private securityOfficerService: SecurityOfficerService, private router: Router) {
  }

  ngOnInit(): void {
    this.vehicles = this.securityOfficerService.vehicle;
    this.vehicleDetail = this.securityOfficerService.vehicle;
    this.getAllVehicles();
  }

  updateVehicleStatus() {
    console.log(this.vehicleDetail)
    this.securityOfficerService.updateVehicle(this.vehicleDetail).subscribe((vehicle) => {
      this.router.navigate(['/main/update_vehicle_pool'])
    })
  }

  getAllVehicles() {
    this.securityOfficerService.getAllVehicles().subscribe((vehicles) => {
      this.vehicles = vehicles;
    })
  }

}

