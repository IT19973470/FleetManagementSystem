import { Component, OnInit } from '@angular/core';
import {GeneralManagerService} from "../../../../_service/general-manager.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-transport-requests',
  templateUrl: './transport-requests.component.html',
  styleUrls: ['./transport-requests.component.css']
})
export class TransportRequestsComponent implements OnInit {



  isModalTable = {
    text: '',
    openTable: false,
    foundItem: ''
  };

  deliveryItemDetails = [];
  deliveryItem = {
    deliveryItemDetails: []
  };

  user:boolean=true;
  item:boolean=true;
  tblIndex;

  employeeID;

  constructor(private generalManagerService: GeneralManagerService, private router: Router) {

  }

  // ngOnInit(): void {
  // }


  ngOnInit(): void {
    this.getAllItemDeliveries();
  }

  setItem(deliveryItem,i) {
    this.tblIndex = i;
    this.deliveryItem = deliveryItem;
    this.isTrueOrFalse(true);
  }

  // goToUpdate(deliveryItem) {
  //   this.transportManagerService.deliveryItem = deliveryItem;
  //   this.router.navigate(['/main/update_item_delivery'])
  // }

  isTrueOrFalse(reply) {
    this.isModalTable.openTable = reply;
  }

  getAllItemDeliveries() {
    this.generalManagerService.getAllApplication().subscribe((deliveryItemDetails) => {
      this.deliveryItemDetails = deliveryItemDetails;
      // if(this.deliveryItemDetails.applicationID)
      // console.log(this.deliveryItemDetails)
    })
  }

  goToUpdate(deliveryItem) {
    this.generalManagerService.deliveryItem = deliveryItem;
    this.router.navigate(['/main/update_available_transports'])
  }
}
