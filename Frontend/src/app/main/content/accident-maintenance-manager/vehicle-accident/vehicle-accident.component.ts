import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";
import {VehicleAccidentService} from "../../../../_service/vehicle-accident.service";

@Component({
  selector: 'app-vehicle-accident',
  templateUrl: './vehicle-accident.component.html',
  styleUrls: ['./vehicle-accident.component.css']
})
export class VehicleAccidentComponent implements OnInit {

  @ViewChild('accidentDetailsForm', {static: true}) public accidentDetailsForm: NgForm;
  accidentDetail = {
    vehicleAccidentID: '1',
    driverVehicle: {
      driverVehicleID: {
        driverID: '',
        vehicleId: ''
      }
    },
    accidentDate: '',
    accidentTime: '',
    insuranceNo: '',
    insuranceStatus: '',
    accidentMaintenanceManager: {
      employeeID: ''
    }
  };

  driverIsPresent = 0;
  vehicleIsPresent = 0

  accident: any;

  constructor(private vehicleAccidentService: VehicleAccidentService, private router: Router) {
  }

  ngOnInit(): void {
  }

  addAccident() {
    console.log(this.accidentDetail);
    this.accidentDetail.accidentMaintenanceManager.employeeID = JSON.parse(localStorage.getItem('user'))['employeeID']
    this.vehicleAccidentService.addAccident(this.accidentDetail).subscribe((accident) => {
      this.router.navigate(['/main/vehicle_accident_view'])
    })
  }

  chkVehicle() {
    if (this.accidentDetail.driverVehicle.driverVehicleID.vehicleId !== '') {
      this.vehicleAccidentService.chkVehicle(this.accidentDetail.driverVehicle.driverVehicleID.vehicleId).subscribe((vehicle) => {
        if (vehicle) {
          this.vehicleIsPresent = 1;
        } else {
          this.vehicleIsPresent = 2;
        }
      })
    }
  }

  chkDriver() {
    if (this.accidentDetail.driverVehicle.driverVehicleID.vehicleId !== '' && this.accidentDetail.driverVehicle.driverVehicleID.driverID !== '') {
      this.vehicleAccidentService.chkDriver(this.accidentDetail.driverVehicle.driverVehicleID.vehicleId, this.accidentDetail.driverVehicle.driverVehicleID.driverID).subscribe((driver) => {
        if (driver) {
          this.driverIsPresent = 1;
        } else {
          this.driverIsPresent = 2;
        }
      })
    }
  }

  onSubmit() {
    return false;
  }


}
