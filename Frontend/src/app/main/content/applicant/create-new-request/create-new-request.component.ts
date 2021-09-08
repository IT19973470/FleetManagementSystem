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
  flag;

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
      this.flag==1;
      this.errorP=2;
    }
  }


  createAccount(){
    this.router.navigate(['/main/applicant_regestration'])
  }
  onSubmitPassenger() {

    let check=this.Pass;
    this.flag=1;


    for (let x=0; x<=this.passengerpassengerApp.passengerApplication.passengerPassengerApplications.length-1; x++)
    {
      let a=this.passengerpassengerApp.passengerApplication.passengerPassengerApplications[x];
      console.log(a);
      if(a.passenger.passengerId==check.passenger.passengerId){
        this.flag=0;
        break;
      }
      else {
        this.flag=1;
      }
    }
    if(this.flag==1)
    {
      for (let z = 0; z <= this.y-1; z++) {
        this.passengerOBJ = this.PassengerDB[z];
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
