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

  setItem(item, i) {
    this.tblIndex = i;
    this.item.itemDetailId = item.itemDetailId;
    this.item.itemName = item.itemName;
    this.item.itemType = item.itemType;
    this.item.itemQty = item.itemQty;
    this.btnText = 'Update';
  }
  //
  setNewItem() {
    // this.item = this.getNewItem();
    // this.itemForm.resetForm(this.item);
    // this.btnText = 'Add';
  }
  //
  getNewItem() {
    return {
      itemDetailId: '',
      itemName: '',
      itemType: '',
      itemQty: 1,
      delivery: {
        deliveryId: ''
      }
    };
  }
}
