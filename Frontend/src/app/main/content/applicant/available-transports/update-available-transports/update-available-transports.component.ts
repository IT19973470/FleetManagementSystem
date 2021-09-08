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
  deliveryDetail = {
    deliveryId: '',
    deliveryPersonName: '',
    deliveryPersonNic: '',
    contactNumber: '',
    address: '',
    companyName: '',
    deliveryDate: '',
    deliveryTime: '',
    deliveryTimeActual: '',
    deliveryDateTime: '',
    deliveryItemDetails: []
  };
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
   // this.deliveryDetail.deliveryDateTime = this.deliveryDetail.deliveryDate + 'T' + this.deliveryDetail.deliveryTimeActual
      this.applicantService.updateform(this.passengerpassengerApp).subscribe((deliveryDetail) => {
      this.router.navigate(['/main/available_transports'])
    })
  }


  onSubmitPassenger() {

    console.log(this.passengerpassengerApp.applicationID);
    console.log(this.Pass.passenger.passengerId);
      this.applicantService.AddPassengerApp(this.passengerpassengerApp.passengerApp.passengerApplicationID,this.Pass.passenger.passengerId).subscribe((deliveryDetail) => {
        this.ngOnInit();
      })


    // for (let x = 0; x <= this.y; x++) {
    //   this.passengerOBJ = this.PassengerDB[x];
    //
    //   if (this.Pass.passenger.passengerId === this.passengerOBJ.passengerId) {
    //     this.z = this.passengerpassengerApp.passengerApp.passengerPassengerApplications.length;
    //     this.ViewPassenger.push(this.passengerOBJ);
    //     this.errorP = 0;
    //     break;
    //   } else {
    //     this.errorP = 1;
    //   }
    // }
    this.setNewPassenger();
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


  onSubmitItem() {
    // this.item.delivery.deliveryId = this.deliveryDetail.deliveryId;
    // // console.log(this.item)
    // if (this.btnText === 'Add') {
    //   this.transportManagerService.addItemToDelivery(this.item).subscribe((item) => {
    //     this.deliveryDetail.deliveryItemDetails.push(item);
    //   })
  //   } else if (this.btnText === 'Update') {
  //     // console.log(this.item)
  //     this.transportManagerService.updateItemOnDelivery(this.item).subscribe((item) => {
  //       this.deliveryDetail.deliveryItemDetails[this.tblIndex] = item
  //     })
  //   }
  //   this.setNewItem();
  }
  //
  removeItem(itemDetailId, i) {
    // this.transportManagerService.deleteItemOnDelivery(itemDetailId).subscribe((reply) => {
    //   if (reply) {
    //     this.deliveryDetail.deliveryItemDetails.splice(i, 1)
    //   }
    // })
   }
  //
  removeDelivery() {
    this.applicantService.deleteForm(this.passengerpassengerApp.applicationID).subscribe()
    this.router.navigate(['/main/available_transports']);
  }


  //
  setNewItem() {
    // this.item = this.getNewItem();
    // this.itemForm.resetForm(this.item);
    // this.btnText = 'Add';
  }
  //

}
