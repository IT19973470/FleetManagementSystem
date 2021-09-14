import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {VehicleAccidentService} from "../../../../_service/vehicle-accident.service";
import {Router} from "@angular/router";
import {VehicleMaintenanceService} from "../../../../_service/vehicle-maintenance.service";

@Component({
  selector: 'app-vehicle-maintenance',
  templateUrl: './vehicle-maintenance.component.html',
  styleUrls: ['./vehicle-maintenance.component.css']
})
export class VehicleMaintenanceComponent implements OnInit {

  @ViewChild('maintenanceDetailsForm', {static: true}) public maintenanceDetailsForm: NgForm;
  maintenanceDetail = {
    vehicleMaintenanceID: '1',
    vehicle: {
      vehicleId: ''
    },
    maintenanceType: '',
    maintenanceDate: '',
    companyName: '',
    maintenanceStatus: '',
    accidentMaintenanceManager: {
      employeeID: ''
    }
  };

  vehicleIsPresent = 0;

  maintenance: any;

  constructor(private vehicleMaintenanceService: VehicleMaintenanceService, private router: Router) { }

  ngOnInit(): void {
  }

  addMaintenance() {
    console.log(this.maintenanceDetail);
    this.maintenanceDetail.accidentMaintenanceManager.employeeID = JSON.parse(localStorage.getItem('user'))['employeeID']
    this.vehicleMaintenanceService.addMaintenance(this.maintenanceDetail).subscribe((maintenance) => {
      this.router.navigate(['/main/view_maintenance'])
    })
  }

  chkVehicle() {
    if (this.maintenanceDetail.vehicle.vehicleId !== '') {
      this.vehicleMaintenanceService.chkVehicle(this.maintenanceDetail.vehicle.vehicleId).subscribe((vehicle) => {
        if (vehicle) {
          this.vehicleIsPresent = 1;
        } else {
          this.vehicleIsPresent = 2;
        }
      })
    }
  }


}
