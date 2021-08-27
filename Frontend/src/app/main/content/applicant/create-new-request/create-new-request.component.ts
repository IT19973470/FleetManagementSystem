import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";
import {ApplicantService} from "../../../../_service/applicant.service";


@Component({
  selector: 'app-create-new-request',
  templateUrl: './create-new-request.component.html',
  styleUrls: ['./create-new-request.component.css']
})
export class CreateNewRequestComponent implements OnInit {
  @ViewChild('applicantFrom', {static: true}) public applicantFrom: NgForm;
  @ViewChild('passengerForm', {static: true}) public passengerForm: NgForm;


  passengerpassengerApp = {

    applicationID: '',
    arrivaleDate: '',
    depatureDate: "",
    reason: '',
    vehicleType: '',
    destination: '',
    passengerApplication: {
      noOfPassengers: '5',
      passengerPassengerApplications: []
    },
    // itemApplication:{
    //   itemItemApplications: [
    //
    //   ]
    // }
  }

  Pass = {
    passenger: {
      passengerId: ''
    }
  };
// Item ={
//   item:{
//     itemID:'',
//     itemName:'',
//     qty:''
//   }
// }
  //Passenger.name;
  // x={
  //   applicationID:'',
  //
  //
  //
  // };
  //
  tblIndex;

  constructor(private applicant: ApplicantService, private router: Router) {
    //  this.Pass.passenger = this.getNewPassenger();
  }

  ngOnInit(): void {

  }

  onSubmit() {
    console.log(this.passengerpassengerApp);
    this.applicant.addApp(this.passengerpassengerApp).subscribe((deliveryDetail) => {
      this.router.navigate(['/main/available_transports'])
    })
  }

  btnText = 'Add';

  onSubmitPassenger() {
    if (this.btnText === 'Add') {
      this.passengerpassengerApp.passengerApplication.passengerPassengerApplications.push(this.Pass);

    }
    this.setNewPassenger();
  }

  setNewPassenger() {
    this.Pass = this.getNewPassenger();
    this.passengerForm.resetForm(this.Pass.passenger);
    this.btnText = 'Add';

  }

  setPassenger(passenger, i) {
    this.tblIndex = i;
    this.Pass.passenger.passengerId = passenger.passengerId;
    this.btnText = 'Update';
  }

  getNewPassenger() {
    return {
      passenger:
        {passengerId: ''},
    };
  }


   // onSubmitItem() {
   //   this.passengerpassengerApp.itemApplication.itemItemApplications.push(this.Item);
   //   this.setNewItem();
   // }

  // setNewItem(){
  //   this.Item = this.getNewItems();
  //   this.i.resetForm(this.Item.item);
  //   this.btnText = 'Add'
  // }
  //  setItems(items) {
  //    this.tblIndex = i;
  //    this.Item.passenger.passengerId = passenger.passengerId;
  //    this.btnText = 'Update';
  //  }

   // getNewItems() {
   //   return {
   //     item:
   //       { itemID: '',
   //         itemName:'',
   //         qty:''
   //       },
   //
   //   };
   // }

}
