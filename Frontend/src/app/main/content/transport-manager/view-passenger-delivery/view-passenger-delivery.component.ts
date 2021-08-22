import { Component, OnInit } from '@angular/core';
import {TransportManagerService} from "../../../../_service/transport-manager.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-view-passenger-delivery',
  templateUrl: './view-passenger-delivery.component.html',
  styleUrls: ['./view-passenger-delivery.component.css']
})
export class ViewPassengerDeliveryComponent implements OnInit {

  isModalTable = {
    text: '',
    openTable: false,
    foundPassenger: ''
  };

  deliveryPassengerDetails = [];
  deliveryPassenger = {
    deliveryPassengerDetails: []
  };

  constructor(private transportManagerService: TransportManagerService, private router: Router) {
  }

  ngOnInit(): void {
    this.getAllPassengerDeliveries();
  }

  setPassenger(deliveryPassenger) {
    this.deliveryPassenger = deliveryPassenger;
    this.isTrueOrFalse(true);
  }

  goToUpdate(deliveryPassenger) {
    this.transportManagerService.deliveryPassenger = deliveryPassenger;
    this.router.navigate(['/main/update_passenger_delivery'])
  }

  isTrueOrFalse(reply) {
    this.isModalTable.openTable = reply;
  }

  getAllPassengerDeliveries() {
    this.transportManagerService.getAllPassengerDeliveries().subscribe((deliveryPassengerDetails) => {
      this.deliveryPassengerDetails = deliveryPassengerDetails;
      // console.log(this.deliveryItemDetails)
    })
  }

}
