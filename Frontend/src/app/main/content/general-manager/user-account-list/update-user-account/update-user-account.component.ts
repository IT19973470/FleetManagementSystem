import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {GeneralManagerService} from "../../../../../_service/general-manager.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-update-user-account',
  templateUrl: './update-user-account.component.html',
  styleUrls: ['./update-user-account.component.css']
})
export class UpdateUserAccountComponent implements OnInit {

  @ViewChild('createUserAccountForm', {static: true}) public createUserAccountForm: NgForm;

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
    password: '',
  };

  accountTypes = [
    {
      accType: "TM",
      accTypename: "Transport Manager"
    },
    {
      accType: "BMC",
      accTypename: "Booking Management Clerk"
    },
    {
      accType: "VMC",
      accTypename: "Vehicle and Driver Management Clerk"
    },
    {
      accType: "AMC",
      accTypename: "Accident and Maintenance Clerk"
    },
    {
      accType: "SO",
      accTypename: "Security Officer"
    }
    ,
    {
      accType: "GM",
      accTypename: "General Manager"
    }
  ]
  selected = ""
  //
  // account;
  // btnText = ' ';
  // tblIndex;

  constructor(private generalManagerService: GeneralManagerService, private router: Router) {
    this.userAccount = this.getUserAccount();
  }

  ngOnInit(): void {
    this.userAccount = this.generalManagerService.userAccount;
  }

  onSubmit() {
    console.log(this.userAccount)

    this.generalManagerService.updateUserAccount(this.userAccount).subscribe((userAccount) => {
      this.router.navigate(['/main/user_account_list'])
    })
  }

  // setUserAccount(userAccount, i) {
  //   this.tblIndex = 1;
  //   this.userAccount.email = userAccount.email;
  //   this.userAccount.name = userAccount.name;
  //   this.userAccount.address = userAccount.address;
  //   this.userAccount.contactNo = userAccount.contactNo;
  //   this.btnText = 'Update';
  // }
  //
  getUserAccount() {
    return {
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
      password: '',

    };
  }


}
