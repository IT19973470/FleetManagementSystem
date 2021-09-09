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

  accidentIdSearch;

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

  removeAccident(vehicleAccidentID, tblIndex) {
    this.vehicleAccidentService.deleteAccident(vehicleAccidentID).subscribe((reply) => {
      if (reply) {
        this.vehicleAccidentDetails.splice(tblIndex, 1);
        // this.router.navigate(['/main/arrival_departure_page'])
      }
    })
  }

  getAccidentById() {
    this.vehicleAccidentService.getAccidentById(this.accidentIdSearch).subscribe((vehicleAccidentDetails) => {
      this.vehicleAccidentDetails = vehicleAccidentDetails;
      // console.log(this.vehicles)
    })
  }
}
