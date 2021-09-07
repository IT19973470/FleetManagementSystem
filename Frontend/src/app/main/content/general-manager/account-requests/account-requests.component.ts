import { Component, OnInit } from '@angular/core';
import {GeneralManagerService} from "../../../../_service/general-manager.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-account-requests',
  templateUrl: './account-requests.component.html',
  styleUrls: ['./account-requests.component.css']
})
export class AccountRequestsComponent implements OnInit {

  userAccountDetails = [];

  userAccount = {
    employeeID: '',
    accountType: '',
    nic: '',
    dob: '',
    name: '',
    address: '',
    contactNo: '',
    email: '',
    registeredDate: '',
    nameWithInitials: '',
    password: ''

  };

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
  //
  // ngOnInit(): void {
  //   this.getUserAccounts();
  // }


  getUserAccounts() {
    // this.generalManagerService.getUserAccounts().subscribe((userAccountDetails) => {
    //   this.userAccountDetails = userAccountDetails;
    //   // console.log(this.vehicles)
    // })
  }

  getUserAccountByID() {
    // this.generalManagerService.getUserAccountByID(this.employeeID).subscribe((userAccountDetails) => {
    //   this.userAccountDetails = userAccountDetails;
    //   // console.log(this.vehicles)
    // })
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
