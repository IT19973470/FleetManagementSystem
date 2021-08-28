import { Component, OnInit } from '@angular/core';
import {TransportManagerService} from "../../../../_service/transport-manager.service";
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

  constructor(private accident: VehicleAccidentService, private router: Router) { }

  ngOnInit(): void {
  }

  vehicleAccidentDetails = [];
  vehicleAccident = {
    accidentId: '',
    accidentDate: '',
    accidentTime: '',
    insuranceNo: '',
    insuranceStatus: false,
  };

  setItem(deliveryItem) {
    this.vehicleAccident = deliveryItem;
    this.isTrueOrFalse(true);
  }

  goToUpdate(deliveryItem) {
    this.accident.deliveryItem = deliveryItem;
    this.router.navigate(['/main/update_item_delivery'])
  }

  isTrueOrFalse(reply) {
    this.isModalTable.openTable = reply;
  }
}
