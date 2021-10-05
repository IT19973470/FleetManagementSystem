import {Component, OnInit} from '@angular/core';
import {VehicleDriverManagerService} from '../../../../_service/vehicle-driver-manager.service';
import {Router} from '@angular/router';
import {CommonService} from "../../../../_service/common.service";
import {NotifierService} from "angular-notifier";
import {DriverService} from "../../../../_service/driver.service";

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
    fuelBalance: 0
  };

  vehicleNumber;

  selectedVehicle= {
    vehicleId: '',
    fuelBalance: 0
  };

  // constructor(
  //   private vehicleDriverManagerService: VehicleDriverManagerService, private router: Router, private commonService: CommonService,
  //   private notifierService: NotifierService) {
  //   // this.vehicle = this.getVehicle();
  // }

  constructor(
    private driverService: DriverService, private router: Router, private commonService: CommonService,
    private notifierService: NotifierService) {
    // this.vehicle = this.getVehicle();
  }

  ngOnInit(): void {
    this.getAllVehicles();
  }

  setVehicle(vehicle) {
    this.vehicle = vehicle;
    this.isTrueOrFalse(true);
  }

  goToUpdate(vehicle) {
    this.selectedVehicle = vehicle;
    this.isTrueOrFalse(true);
  }

  isTrueOrFalse(reply) {
    this.isModalTable.openTable = reply;
  }

  getAllVehicles() {
    this.driverService.getAllVehicles().subscribe((vehicles) => {
      this.vehicles = vehicles;
      // console.log(this.vehicles)
    })
  }

  getVehicleByNumber() {
    this.driverService.getVehicleByNumber(this.vehicleNumber).subscribe((vehicles) => {
      this.vehicles = vehicles;
      // console.log(this.vehicles)
    })
  }

  onSubmit() {
    this.driverService.updateFuel(this.selectedVehicle.vehicleId, this.selectedVehicle.fuelBalance).subscribe((fuel) => {
      this.notifierService.notify("success", "Fuel balance updated successfully");
      this.isTrueOrFalse(false);
    }, (err) => {
      this.notifierService.notify("error", "Fuel balance failed");
      this.isTrueOrFalse(false);
    })
  }

  getVehicle() {
    return {
      vehicleId: '',
      fuelBalance: ''
    };
  }

  setNumberPositive(val) {
    if (val < 0) {
      return val * -1;
    } else if (val === 0) {
      return 1;
    } else {
      return val;
    }
  }
}
