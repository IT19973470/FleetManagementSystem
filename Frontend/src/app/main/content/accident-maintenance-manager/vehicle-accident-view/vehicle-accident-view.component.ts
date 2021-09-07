import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {VehicleAccidentService} from "../../../../_service/vehicle-accident.service";

@Component({
  selector: 'app-vehicle-accident-view',
  templateUrl: './vehicle-accident-view.component.html',
  styleUrls: ['./vehicle-accident-view.component.css']
})
export class VehicleAccidentViewComponent implements OnInit {

  isModalTable = {
    text: '',
    openTable: false,
    foundItem: ''
  };

  vehicleAccidentDetails = [];
  vehicleAccident = {
    vehicleAccidentID: '',
    vehicleID: '',
    driverID: '',
    accidentDate: '',
    accidentTime: '',
    insuranceNo: '',
    insuranceStatus: false,
  };

  tokenIdSearch;

  constructor(private vehicleAccidentService: VehicleAccidentService, private router: Router) {
  }

  ngOnInit(): void {
    this.getVehicleAccidents();
  }

  setItem(vehicleAccident) {
    this.vehicleAccident = vehicleAccident;
    this.isTrueOrFalse(true);
  }

  getVehicleAccidents() {
    this.vehicleAccidentService.getVehicleAccidents().subscribe((vehicleAccidentDetails) => {
      this.vehicleAccidentDetails = vehicleAccidentDetails;
      console.log(this.vehicleAccident)
    })
  }


  goToUpdate(accident) {
    this.vehicleAccidentService.accident = accident;
    this.router.navigate(['/main/update_accident_details'])
  }

  private isTrueOrFalse(reply) {
    this.isModalTable.openTable = reply;
  }
}
