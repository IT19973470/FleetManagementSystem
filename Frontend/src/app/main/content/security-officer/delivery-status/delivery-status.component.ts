import { Component, OnInit } from '@angular/core';
import {TransportManagerService} from "../../../../_service/transport-manager.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-delivery-status',
  templateUrl: './delivery-status.component.html',
  styleUrls: ['./delivery-status.component.css']
})
export class DeliveryStatusComponent implements OnInit {

  deliveryItemDetails = [];
  deliveryItem = {
    deliveryId: '',
    deliveryPersonName: '',
    deliveryPersonNic: '',
    deliveryStatus: false,
    deliveryItemDetails: []
  };

  deliveryDate;
  companyName;

  constructor(private transportManagerService: TransportManagerService, private router: Router) {
  }

  ngOnInit(): void {
    this.deliveryDate = this.transportManagerService.getCurDate();
    this.getAllItemDeliveries();
  }

  setItem(deliveryItem) {
    this.deliveryItem = deliveryItem;
    this.isTrueOrFalse(true);
  }

  goToUpdate(deliveryItem) {
    this.transportManagerService.deliveryItem = deliveryItem;
    this.router.navigate(['/main/update_item_delivery'])
  }

  isTrueOrFalse(reply) {

  }

  getAllItemDeliveries() {
    this.transportManagerService.getAllDeliveries('Item').subscribe((deliveryItemDetails) => {
      this.deliveryItemDetails = deliveryItemDetails;
      // console.log(this.deliveryItemDetails)
    })
  }

  getAllDeliveriesByDate() {
    this.transportManagerService.getAllDeliveriesByDate('Item', this.deliveryDate).subscribe((deliveryItemDetails) => {
      this.deliveryItemDetails = deliveryItemDetails;
      // console.log(this.deliveryItemDetails)
    })
  }

  getAllDeliveriesByCompany() {
    this.transportManagerService.getAllDeliveriesByCompany('Item', this.companyName).subscribe((deliveryItemDetails) => {
      this.deliveryItemDetails = deliveryItemDetails;
      // console.log(this.deliveryItemDetails)
    })
  }


}
