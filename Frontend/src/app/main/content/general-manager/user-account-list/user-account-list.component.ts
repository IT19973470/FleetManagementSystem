import { Component, OnInit } from '@angular/core';
import {GeneralManagerService} from "../../../../_service/general-manager.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-user-account-list',
  templateUrl: './user-account-list.component.html',
  styleUrls: ['./user-account-list.component.css']
})
export class UserAccountListComponent implements OnInit {

  isModalTable = {
    text: '',
    openTable: false,
    foundUser: ''
  };


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
    userAccountDetails: []
  };

  constructor(private generalManagerService: GeneralManagerService, private router: Router) {

  }

  ngOnInit(): void {
  }

  setUserAccount(userAccount) {
    this.userAccount = userAccount;
    this.isTrueOrFalse(true);
  }

  goToUpdate(deliveryItem) {
    this.generalManagerService.userAccount = this.userAccount;
    this.router.navigate(['/main/update_user_account'])
  }


  isTrueOrFalse(reply) {
    this.isModalTable.openTable = reply;
  }



}
