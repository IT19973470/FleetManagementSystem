import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {ApplicantService} from "../../../../_service/applicant.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-application-status',
  templateUrl: './application-status.component.html',
  styleUrls: ['./application-status.component.css']
})
export class ApplicationStatusComponent implements OnInit {

  @ViewChild('applicantFrom', {static: true}) public applicantFrom: NgForm;
  @ViewChild('passengerForm', {static: true}) public passengerForm: NgForm;
  @ViewChild('applicationStatus', {static: true}) public applicationStatus: NgForm;


  ItemApp= {

    applicationID: "",
    approval: "",
    arrivaleDate: "",
    depatureDate: "",
    reason: "",
    vehicleType: "",
    destination: "",
    type:'I',
    itemApplication: {
      itemItemApplications: []
    }
  }

  Pass={
    item:{
      itemID:'',
      itemName:'',
      qty:''
    }
  };


  //Passenger.name;
  // x={
  //   applicationID:'',
  //
  //
  //
  // };
  //
  tblIndex;
  user:boolean=true;
  item:boolean=false;

  constructor(private applicant: ApplicantService, private router: Router) {
    //this.Pass = this.getNewPassenger();
  }

  ngOnInit(): void {

  }

  onSubmit() {
    console.log(this.ItemApp);
    this.applicant.addItem(this.ItemApp).subscribe((deliveryDetail) => {
      this.router.navigate(['/main/available_transports'])
    })
  }
x:boolean=false;
  btnText = '';

  onSubmitPassenger() {
    if (this.user == true) {
      this.ItemApp.itemApplication.itemItemApplications.push(this.Pass);
      //this.passengerForm.resetForm();
    }
    else if(this.item==true){
      this.ItemApp.itemApplication.itemItemApplications[this.tblIndex] = this.Pass
    }
    //   if (this.btnText === 'Add') {
    //     this.deliveryDetail.deliveryPassengerDetails.push(this.passenger);
    // //   this.applicant.passengers.push(this.passengers);
    // this.passengers = this.getNewPassenger();
    //  this.applicantFrom.resetForm(this.passengers);
    this.setNewPassenger();
  }

  setNewPassenger() {
    this.Pass = this.getNewPassenger();
    this.passengerForm.resetForm(this.Pass.item);
    this.user=true;
    this.item=false;
  }

  setPassenger(item,i) {
    this.tblIndex = i;
    this.Pass.item.itemID = item.itemID;
    this.Pass.item.itemName=item.itemName;
    this.Pass.item.qty=item.qty;
    this.btnText = 'Update';
    this.item=true;
    this.user=false;
  }

  getNewPassenger() {
    return {
      item: {
        itemID:'',
        itemName:'',
        qty:''
      }
    };
  }


  // onSubmitPassenger() {
  //   if (this.btnText === 'Add') {
  //     this.deliveryDetail.deliveryPassengerDetails.push(this.passenger);
  //   } else if (this.btnText === 'Update') {
  //     this.deliveryDetail.deliveryPassengerDetails[this.tblIndex] = this.passenger
  //   }
  //   this.setNewPassenger();
  // }

  // setPassenger(passenger,i) {
  //   this.tblIndex = i;
  //   this.passenger.passengerName = passenger.passengerName;
  //   this.passenger.passengerNic = passenger.passengerNic;
  //   this.passenger.contactNumber = passenger.contactNumber;
  //   this.passenger.passengerType = passenger.passengerType;
  // }

  // setNewPassenger() {
  //   this.passenger = this.getNewPassenger();
  //   this.passengerForm.resetForm();
  //   this.btnText = 'Add';
  // }

  // getNewPassenger() {
  //   return {
  //     passengerName: '',
  //     passengerNic: '',
  //     contactNumber: '',
  //     passengerType: ''
  //   };
  //}


  // passenger;
  // deliveryDetail;
  //  onSubmitItem() {
  //    this.deliveryDetail.passengers.push(this.passenger);
  //    this.passenger = this.getNewPassenger();
  //    this.applicantFrom.resetForm(this.passenger);
  //  }
  //
  //  setItems(passenger) {
  //    this.passenger.passengerName = passenger.passengerName;
  //    this.passenger.passengerNic = passenger.passengerNic;
  //    this.passenger.contactNumber = passenger.contactNumber;
  //    this.passenger.passengerType = passenger.passengerType;
  //  }

   // getNewItems() {
   //   return {
   //     passengerName: '',
   //     passengerNic: '',
   //     contactNumber: '',
   //     passengerType: ''
   //   };
   // }


}
