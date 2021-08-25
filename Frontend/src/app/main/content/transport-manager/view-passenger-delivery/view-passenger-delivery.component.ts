import {Component, OnInit} from '@angular/core';
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
    deliveryId: '',
    deliveryPersonName: '',
    deliveryPersonNic: '',
    deliveryStatus: false,
    deliveryPassengerDetails: []
  };

  deliveryDate;
  companyName;

  constructor(private transportManagerService: TransportManagerService, private router: Router) {
  }

  ngOnInit(): void {
    this.deliveryDate = this.transportManagerService.getCurDate();
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
    this.transportManagerService.getAllDeliveries('Passenger').subscribe((deliveryPassengerDetails) => {
      this.deliveryPassengerDetails = deliveryPassengerDetails;
      // console.log(this.deliveryItemDetails)
    })
  }

  getAllDeliveriesByDate() {
    this.transportManagerService.getAllDeliveriesByDate('Item', this.deliveryDate).subscribe((deliveryPassengerDetails) => {
      this.deliveryPassengerDetails = deliveryPassengerDetails;
      // console.log(this.deliveryItemDetails)
    })
  }

  getAllDeliveriesByCompany() {
    this.transportManagerService.getAllDeliveriesByCompany('Item', this.companyName).subscribe((deliveryPassengerDetails) => {
      this.deliveryPassengerDetails = deliveryPassengerDetails;
      // console.log(this.deliveryItemDetails)
    })
  }
}
