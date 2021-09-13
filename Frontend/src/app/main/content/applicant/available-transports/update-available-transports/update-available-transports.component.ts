import {Component, OnInit, ViewChild} from '@angular/core';
import {TransportManagerService} from "../../../../../_service/transport-manager.service";
import {Router} from "@angular/router";
import {ApplicantService} from "../../../../../_service/applicant.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-update-available-transports',
  templateUrl: './update-available-transports.component.html',
  styleUrls: ['./update-available-transports.component.css']
})
export class UpdateAvailableTransportsComponent implements OnInit {
  @ViewChild('itemForm', {static: true}) public itemForm: NgForm;
  @ViewChild('passengerForm', {static: true}) public passengerForm: NgForm;

  passengerpassengerApp = {

    applicationID: '',
    arrivaleDate: '',
    depatureDate: "",
    reason: '',
    vehicleType: '',
    destination: '',
    passengerApp: {
      noOfPassengers: '5',
      passengerApplicationID:'',
      passengerPassengerApplications: []
    }
  }

  Pass = {
    passenger: {
      passengerId: ''
    }
  };

  tblIndex;
  DBPass;
  PassengerDB = []; //DB Passenger
  ViewPassenger;//View Passenger
  y = 0; //DB Passenger size
  z = 0; //Array size

  errorP =2; //
  passengerOBJ; //Array Object

  constructor(private applicantService: ApplicantService, private router: Router) {
   // this.item = this.getNewItem();
  }

  ngOnInit(): void {
    this.passengerpassengerApp = this.applicantService.deliveryItem;
    this.getAllIPassengers()
  }

  flag;
  getAllIPassengers() {
    this.applicantService.GetPassengerApp(this.passengerpassengerApp.applicationID).subscribe((deliveryItemDetails) => {
      this.PassengerDB = deliveryItemDetails;
      this.DBPass=this.PassengerDB;
      this.ViewPassenger=this.DBPass.passengerApp.passengerPassengerApplications;
      console.log(this.PassengerDB);
      this.y = deliveryItemDetails.length;
    })
  }

  onSubmit() {
     console.log(this.passengerpassengerApp)
     this.applicantService.updateform(this.passengerpassengerApp).subscribe((deliveryDetail) => {
      this.router.navigate(['/main/available_transports'])
    })
  }


  onSubmitPassenger() {
    console.log(this.passengerpassengerApp.applicationID);
    console.log(this.Pass.passenger.passengerId);
      this.applicantService.AddPassengerApp(this.passengerpassengerApp.passengerApp.passengerApplicationID,this.Pass.passenger.passengerId).subscribe((deliveryDetail) =>
      {
        this.ngOnInit();
        this.flag=0;
        this.setNewPassenger();
      })
    this.flag=1;
  }

  chkPassengerId() {
    if (this.Pass.passenger.passengerId != '') {
      console.log(this.Pass.passenger.passengerId)
      this.flag=2;
    }
  }

  removePassenger(i,passengerId){
    this.applicantService.deletePassengerApp(this.passengerpassengerApp.passengerApp.passengerApplicationID,passengerId).subscribe((deliveryDetail) => {
      this.ngOnInit();
    })
  }

  setNewPassenger() {
    this.Pass = this.getNewPassenger();
    this.passengerForm.resetForm(this.Pass.passenger);
  }

  getNewPassenger() {
    return {
      passenger:
        {passengerId: ''},
    };
  }

  removeDelivery() {
    this.applicantService.deleteForm(this.passengerpassengerApp.applicationID).subscribe()
    this.router.navigate(['/main/available_transports']);
  }


}
