import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-update-maintenance-details',
  templateUrl: './update-maintenance-details.component.html',
  styleUrls: ['./update-maintenance-details.component.css']
})
export class UpdateMaintenanceDetailsComponent implements OnInit {

  @ViewChild('maintenanceDetailsForm', {static: true}) public maintenanceDetailsForm: NgForm;
  maintenanceDetail = {
    vehicleID: '',
    vehicleMaintenanceID: '1',
    maintenanceDate: '',
    maintenanceType: '',
    maintenanceStatus: '',
  };

  constructor() { }

  ngOnInit(): void {
  }

  // addMaintenance() {
  //   console.log(this.maintenanceDetail);
  //   this.maintenanceDetail.accidentTime = this.maintenanceDetail.accidentTimeActual;
  //   this.vehicleMaintenanceService.updateVehicleMaintenance(this.maintenanceDetail).subscribe((maintenance) => {
  //     this.router.navigate(['/main/vehicle_accident_view'])
  //   })
  // }

}
