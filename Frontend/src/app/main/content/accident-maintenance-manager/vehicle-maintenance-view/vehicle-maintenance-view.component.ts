import { Component, OnInit } from '@angular/core';
import {VehicleAccidentService} from "../../../../_service/vehicle-accident.service";
import {Router} from "@angular/router";
import {VehicleMaintenanceService} from "../../../../_service/vehicle-maintenance.service";

@Component({
  selector: 'app-vehicle-maintenance-view',
  templateUrl: './vehicle-maintenance-view.component.html',
  styleUrls: ['./vehicle-maintenance-view.component.css']
})
export class VehicleMaintenanceViewComponent implements OnInit {


  vehicleMaintenanceDetails = [];
  vehicleMaintenance = {
    vehicleMaintenanceID: '',
    vehicleID: '',
    maintenanceType: '',
    maintenanceDate: '',
    companyName: '',
    maintenanceStatus: false,
  };

  constructor(private vehicleMaintenanceService: VehicleMaintenanceService, private router: Router) { }

  ngOnInit(): void {
    this.getVehicleMaintenance();
  }

  getVehicleMaintenance() {
    this.vehicleMaintenanceService.getVehicleMaintenance().subscribe((vehicleMaintenanceDetails) => {
      this.vehicleMaintenanceDetails = vehicleMaintenanceDetails;
      //console.log(this.vehicleAccident)
    })
  }
}
