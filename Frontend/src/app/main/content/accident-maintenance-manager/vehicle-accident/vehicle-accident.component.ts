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

  @ViewChild('accidentDetailsForm', {static:true}) public accidentDetailsForm: NgForm;
  accidentDetail = {
    vehicleAccidentID: '1',
    accidentDate: '',
    accidentTime: '',
    insuranceNo: '',
    insuranceStatus: '',
    // driverVehicle: {
    //   driverID: '',
    //   vehicleId: '',
    // },
    // accidentMaintenanceManager: {
    //   employeeID: ''
    // }
  };
  accidentDate: boolean;



  constructor(private accident: VehicleAccidentService, private router: Router) { }

  ngOnInit(): void {
  }

  addAccident() {
    console.log(this.accidentDetail);
    this.accident.addAccident(this.accidentDetail).subscribe((deliveryDetail) => {
      this.router.navigate(['/main/available_transports'])
    })
  }

  onSubmit() {
    return false;
  }


}
