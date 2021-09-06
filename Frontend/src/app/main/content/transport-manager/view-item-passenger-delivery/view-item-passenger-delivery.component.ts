import {Component, OnInit} from '@angular/core';
import {TransportManagerService} from "../../../../_service/transport-manager.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-view-item-passenger-delivery',
  templateUrl: './view-item-passenger-delivery.component.html',
  styleUrls: ['./view-item-passenger-delivery.component.css']
})
export class ViewItemPassengerDeliveryComponent implements OnInit {

  isModalTable = {
    text: '',
    openTable: false,
    foundItem: ''
  };

  deliveryPassengerItemDetails = [];
  deliveryPassengerItem = {
    deliveryId: '',
    deliveryPersonName: '',
    deliveryPersonNic: '',
    deliveryStatus: false,
    deliveryItemDetails: [],
    deliveryPassengerDetails: []
  };

  deliveryDate;
  companyName;

  constructor(private transportManagerService: TransportManagerService, private router: Router) {
  }

  ngOnInit(): void {
    this.deliveryDate = this.transportManagerService.getCurDate();
    this.getAllPassengerItemDeliveries();
  }

  isTrueOrFalse(reply) {
    this.isModalTable.openTable = reply;
  }

  getAllDeliveriesByDate() {
    this.transportManagerService.getAllDeliveriesByDate('Item', this.deliveryDate).subscribe((deliveryPassengerItemDetails) => {
      this.deliveryPassengerItemDetails = deliveryPassengerItemDetails;
      // console.log(this.deliveryItemDetails)
    })
  }

  getAllDeliveriesByCompany() {
    this.transportManagerService.getAllDeliveriesByCompany('Item', this.companyName).subscribe((deliveryPassengerItemDetails) => {
      this.deliveryPassengerItemDetails = deliveryPassengerItemDetails;
      // console.log(this.deliveryItemDetails)
    })
  }

  getAllPassengerItemDeliveries() {
    this.transportManagerService.getAllDeliveries('PassengerItem').subscribe((deliveryPassengerItemDetails) => {
      this.deliveryPassengerItemDetails = deliveryPassengerItemDetails;
      console.log(this.deliveryPassengerItemDetails)
    })
  }

  setPassengerItem(deliveryPassengerItem) {
    this.deliveryPassengerItem = deliveryPassengerItem;
    this.isTrueOrFalse(true);
  }

  goToUpdate(deliveryItem) {
    this.transportManagerService.deliveryItem = deliveryItem;
    this.router.navigate(['/main/update_item_passenger_delivery'])
  }
}
