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
    passengerApplication: {
      noOfPassengers: '5',
      passengerPassengerApplications: []
    }
  }

  Pass = {
    passenger: {
      passengerId: ''
    }
  };
  item;
  btnText = 'Add';
  tblIndex;
  PassengerDB=[];
  Pp=[];
  y=0;
  errorP:boolean=false;
  z;
  zz=[];


  constructor(private applicantService: ApplicantService, private router: Router) {
   // this.item = this.getNewItem();
  }

  ngOnInit(): void {
    this.passengerpassengerApp = this.applicantService.deliveryItem;
  }

  onSubmit() {
     console.log(this.passengerpassengerApp)
   // this.deliveryDetail.deliveryDateTime = this.deliveryDetail.deliveryDate + 'T' + this.deliveryDetail.deliveryTimeActual
      this.applicantService.updateform(this.passengerpassengerApp).subscribe((deliveryDetail) => {
      this.router.navigate(['/main/available_transports'])
    })
  }


  onSubmitPassenger() {
    for( let  x=0; x<=this.y;x++) {
      this.z = this.PassengerDB[x];
      if (this.Pass.passenger.passengerId===this.z.passengerId) {
        this.passengerpassengerApp.passengerApplication.passengerPassengerApplications.push(this.Pass);
        this.zz.push(this.z);
        this.setNewPassenger();
        this.errorP=false;
        break;
      }

      else{
        this.errorP=true;
      }

    }

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
    this.applicantService.deleteForm(this.passengerpassengerApp.applicationID).subscribe((reply) => {
      if (reply) {
        this.router.navigate(['/main/available_transports'])
      }
    })
  }


  //
  setNewItem() {
    // this.item = this.getNewItem();
    // this.itemForm.resetForm(this.item);
    // this.btnText = 'Add';
  }
  //

}
