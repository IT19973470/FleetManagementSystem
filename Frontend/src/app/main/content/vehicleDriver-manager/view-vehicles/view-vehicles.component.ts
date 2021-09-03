import {Component, OnInit} from '@angular/core';
import {TransportManagerService} from "../../../../_service/transport-manager.service";
import {Router} from "@angular/router";
import {VehicleDriverManagerService} from "../../../../_service/vehicle-driver-manager.service";

@Component({
  selector: 'app-view-vehicles',
  templateUrl: './view-vehicles.component.html',
  styleUrls: ['./view-vehicles.component.css']
})
export class ViewVehiclesComponent implements OnInit {

  isModalTable = {
    text: '',
    openTable: false,
    foundItem: ''
  };

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

  vehicleNumber;

  constructor(private vehicleDriverManagerService: VehicleDriverManagerService, private router: Router) {
  }

  ngOnInit(): void {
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

  isTrueOrFalse(reply) {
    this.isModalTable.openTable = reply;
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
