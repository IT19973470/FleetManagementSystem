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
    type: 'P',
    passengerApplication: {
      noOfPassengers: '1',
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
  tblIndex;
  PassengerDB = []; //DB Passenger
  ViewPassenger = [];//View Passenger
  y = 0; //DB Passenger size
  z = 0; //Array size

  errorP =2; //
  passengerOBJ; //Array Object


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

  constructor(private applicant: ApplicantService, private router: Router) {
    //  this.Pass.passenger = this.getNewPassenger();
  }

  ngOnInit(): void {
    this.errorP = 2;
    this.getAllIPassengers()
  }

  getAllIPassengers() {
    this.applicant.getAllPassengers().subscribe((deliveryItemDetails) => {
      this.PassengerDB = deliveryItemDetails;
      this.y = deliveryItemDetails.length;
    })
  }

  onSubmit() {
    console.log(this.passengerpassengerApp);
    // this.passengerpassengerApp.passengerApplication.noOfPassengers=this.z
    this.applicant.addApp(this.passengerpassengerApp).subscribe((deliveryDetail) => {
      this.router.navigate(['/main/available_transports'])
    })
  }

  chkPassengerId() {
    if (this.Pass.passenger.passengerId != '') {
    }
  }

  onSubmitPassenger() {
    for (let x = 0; x <= this.y; x++) {
      this.passengerOBJ = this.PassengerDB[x];
      if (this.Pass.passenger.passengerId === this.passengerOBJ.passengerId) {
        this.passengerpassengerApp.passengerApplication.passengerPassengerApplications.push(this.Pass);
        this.z = this.passengerpassengerApp.passengerApplication.passengerPassengerApplications.length;
        this.ViewPassenger.push(this.passengerOBJ);
        this.errorP = 0;
        break;
      } else {
        this.errorP = 1;
      }
    }
    this.setNewPassenger();
  }

  setNewPassenger() {
    this.Pass = this.getNewPassenger();
    this.passengerForm.resetForm(this.Pass.passenger);

  }

  setPassenger(passenger, i) {
    this.tblIndex = i;
    this.Pass.passenger.passengerId = passenger.passengerId;

  }

  getNewPassenger() {
    return {
      passenger:
        {passengerId: ''},
    };
  }

}
