import {Component, OnInit} from '@angular/core';
import {VehicleDriverManagerService} from '../../../../_service/vehicle-driver-manager.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-fuel-update',
  templateUrl: './fuel-update.component.html',
  styleUrls: ['./fuel-update.component.css']
})
export class FuelUpdateComponent implements OnInit {
  isModalTable = {
    text: '',
    openTable: false,
    foundItem: ''
  };

  vehicles = [];
  vehicle = {
    vehicleId: '',
    fuelBalance: ''
  };

  vehicleNumber;
  currentFuelDetail = {
    fuelBalance: ''
  };

  constructor(private vehicleDriverManagerService: VehicleDriverManagerService, private router: Router) {
    this.vehicle = this.getVehicle();
  }

  ngOnInit(): void {
    this.getAllVehicles();
  }

  setVehicle(vehicle) {
    this.vehicle = vehicle;
    this.isTrueOrFalse(true);
  }

  goToUpdate(vehicle) {
    this.currentFuelDetail.fuelBalance = vehicle.fuelBalance;
    this.isTrueOrFalse(true);
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

  onSubmit(){
    this.vehicleDriverManagerService.updateFuel(this.vehicle.fuelBalance).subscribe((fuel)=>{
    })
  }

  getVehicle(){
    return{
        vehicleId: '',
        fuelBalance: ''
      };
    }
}
