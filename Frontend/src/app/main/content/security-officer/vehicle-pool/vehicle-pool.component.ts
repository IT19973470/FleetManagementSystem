import {Component, OnInit} from '@angular/core';
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
    occupied: true,
    fuelType: ''
  };

  vehicleNumber;

  constructor(private securityOfficerService: SecurityOfficerService, private router: Router) {
  }

  ngOnInit(): void {
    this.getAllVehicles();
  }

  updateVehicleStatus(vehicle) {
    vehicle.occupied = !vehicle.occupied;
    this.securityOfficerService.updateVehicleAvailability(vehicle).subscribe((vehicleObj) => {
      vehicle.occupied = vehicleObj.occupied;
      // this.router.navigate(['/main/update_vehicle_pool'])
    })
  }

  getAllVehicles() {
    this.securityOfficerService.getAllVehicles().subscribe((vehicles) => {
      this.vehicles = vehicles;
    })
  }

}

