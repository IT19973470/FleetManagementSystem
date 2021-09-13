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
    maintenanceID: '',
    vehicleID: '',
    maintenanceDate: '',
    maintenanceType: '',
    companyName: '',
    maintenanceStatus: false,
  };

  maintenanceIdSearch;

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

  // getMaintenanceById() {
  //   this.vehicleMaintenanceService.getMaintenanceById(this.maintenanceIdSearch).subscribe((vehicleMaintenanceDetails) => {
  //     this.vehicleMaintenanceDetails = vehicleMaintenanceDetails;
  //     // console.log(this.vehicles)
  //   })
  // }

  goToUpdate(maintenance) {
    this.vehicleMaintenanceService.maintenance = maintenance;
    this.router.navigate(['/main/update_maintenance_details'])
  }
}
