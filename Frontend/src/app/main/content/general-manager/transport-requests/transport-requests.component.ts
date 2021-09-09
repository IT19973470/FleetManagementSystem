import {Component, OnInit} from '@angular/core';
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

  user: boolean = true;
  item: boolean = true;
  tblIndex;

  employeeID;
  selectedTransport;

  constructor(private generalManagerService: GeneralManagerService, private router: Router) {

  }

  // ngOnInit(): void {
  // }


  ngOnInit(): void {
    this.getTransports();
  }

  setItem(deliveryItem, i) {
    this.tblIndex = i;
    this.deliveryItem = deliveryItem;
    this.isTrueOrFalse(true);
  }


  isTrueOrFalse(reply) {
    this.isModalTable.openTable = reply;
  }

  getTransports() {
    this.generalManagerService.getTransportApplication().subscribe((deliveryItemDetails) => {
      this.deliveryItemDetails = deliveryItemDetails;
      // if(this.deliveryItemDetails.applicationID)
      console.log(this.deliveryItemDetails)
    })
  }

  setTransport(userAccount) {
    this.selectedTransport = userAccount;
    this.isTrueOrFalse(true);
  }

  approveTransport(approval) {
    this.generalManagerService.approveTransport(this.selectedTransport.applicationID, approval).subscribe((transport) => {
      this.selectedTransport.approved = transport.approved;
    })
  }

  // goToUpdate(deliveryItem) {
  //   this.generalManagerService.deliveryItem = deliveryItem;
  //   this.router.navigate(['/main/update_available_transports'])
  // }
}
