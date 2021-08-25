import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";
import {GeneralManagerService} from "../../../../_service/general-manager.service";


@Component({
  selector: 'app-create-user-account',
  templateUrl: './create-user-account.component.html',
  styleUrls: ['./create-user-account.component.css']
})
export class CreateUserAccountComponent implements OnInit {

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
    password: ''

  };

  accountTypes = [
    "Transport Manager",
    "Booking Management Clerk",
    "Vehicle and Driver Management Clerk",
    "Accident and Maintenance Clerk",
    "Security Officer",
    "Driver",
    "Applicant"
  ]
  selected = ""

  update(e) {
    this.selected = e.target.value
  }

  account;
  btnText = 'Create Account';
  tblIndex;

  constructor(private generalManagerService: GeneralManagerService, private router: Router) {

  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.userAccount.accountType === 'Transport Manager') {
      let transportManager = {
        userAccount: this.userAccount
      }
      console.log(transportManager)
      this.generalManagerService.addTransportManagerUserAccount(transportManager).subscribe((userAccount) => {
        this.router.navigate(['/main/user_account_list'])
      })
    }
    else if(this.userAccount.accountType === 'Booking Management Clerk'){
      let bookingManagementClerk = {
        userAccount: this.userAccount
      }
      this.generalManagerService.addBookingManagementClerkUserAccount(bookingManagementClerk).subscribe((userAccount) =>{
        this.router.navigate(['/main/user_account_list'])
      })
    }else if (this.userAccount.accountType === 'Vehicle and Driver Management Clerk'){
      let vehicleDriverManagementClerk = {
        userAccount: this.userAccount
      }

      this.generalManagerService.addVehicleDiverManagementClerkUserAccount(vehicleDriverManagementClerk).subscribe((userAccount) =>{
        this.router.navigate(['/main/user_account_list'])
      })
    }
    // this.generalManagerService.addTransportManagerUserAccount(this.userAccount).subscribe((userAccount) =>{
    //   if(userAccount == null){
    //     this.userAccount.userAccountDetails.push(userAccount);
    //   }
    // })

  }


  // onSubmitForm() {
  //   if (this.btnText === 'Create Account') {
  //
  //     // this.userAccount.push(this.userAccount) ;
  //   }
  //   return false;
  // }
}
