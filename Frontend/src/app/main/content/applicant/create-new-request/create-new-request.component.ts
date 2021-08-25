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



  passengerpassengerApp= {

    applicationID: '1',
    arrivaleDate: '',
    depatureDate: "",
    reason: '',
    vehicleType: '',
    destination: '',
    passengerApplication: {
      noOfPassengers: '5',
      passengerPassengerApplications: []
    }
  }

  Pass={
    passenger:{
      passengerId:''
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

  constructor(private applicant: ApplicantService, private router: Router) {
  //  this.Pass.passenger = this.getNewPassenger();
  }

  ngOnInit(): void {

  }

  onSubmit() {
 console.log(this.passengerpassengerApp);
    this.applicant.addApp(this.passengerpassengerApp).subscribe((deliveryDetail) => {
      this.router.navigate(['/main/view_item_delivery'])
    })
  }

  btnText = 'Add';

  onSubmitPassenger() {
   if (this.btnText === 'Add') {
   this.passengerpassengerApp.passengerApplication.passengerPassengerApplications.push(this.Pass);
    //this.passengerForm.resetForm();
   }
  //   if (this.btnText === 'Add') {
  //     this.deliveryDetail.deliveryPassengerDetails.push(this.passenger);
  // //   this.applicant.passengers.push(this.passengers);
  // this.passengers = this.getNewPassenger();
  //  this.applicantFrom.resetForm(this.passengers);
   this.setNewPassenger();
  }

  setNewPassenger() {
    this.Pass.passenger = this.getNewPassenger();

    //this.Pass.passenger = this.getNewPassenger();
    this.passengerForm.resetForm(this.Pass);
    this.btnText = 'Add';

  }

  setPassenger(passenger,i) {
    this.tblIndex = i;
    this.Pass.passenger.passengerId = passenger.passengerId;
    this.btnText = 'Update';
  }

  getNewPassenger() {
    return {
     passengerId: '1',
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
 //
 //  getNewItems() {
 //    return {
 //      passengerName: '',
 //      passengerNic: '',
 //      contactNumber: '',
 //      passengerType: ''
 //    };
 //  }

}
