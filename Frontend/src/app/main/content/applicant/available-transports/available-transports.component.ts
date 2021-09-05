import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ApplicantService} from "../../../../_service/applicant.service";

@Component({
  selector: 'app-available-transports',
  templateUrl: './available-transports.component.html',
  styleUrls: ['./available-transports.component.css']
})
export class AvailableTransportsComponent implements OnInit {

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

  constructor(private applicantService: ApplicantService, private router: Router) {
  }

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
    this.applicantService.getAllApplication().subscribe((deliveryItemDetails) => {
      this.deliveryItemDetails = deliveryItemDetails;
     // if(this.deliveryItemDetails.applicationID)
      // console.log(this.deliveryItemDetails)
    })
  }

  goToUpdate(deliveryItem) {
    this.applicantService.deliveryItem = deliveryItem;
    this.router.navigate(['/main/update_available_transports'])
  }


}
