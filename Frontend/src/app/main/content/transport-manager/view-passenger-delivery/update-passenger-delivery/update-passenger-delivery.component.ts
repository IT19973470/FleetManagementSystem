import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {TransportManagerService} from "../../../../../_service/transport-manager.service";
import {Router} from "@angular/router";
import {NotifierService} from "angular-notifier";

@Component({
  selector: 'app-update-passenger-delivery',
  templateUrl: './update-passenger-delivery.component.html',
  styleUrls: ['./update-passenger-delivery.component.css']
})
export class UpdatePassengerDeliveryComponent implements OnInit {

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
    deliveryPassengerDetails: []
  };

  passenger;
  btnText = 'Add';
  tblIndex;

  constructor(private transportManagerService: TransportManagerService, private router: Router,private notifierService: NotifierService) {
    this.passenger = this.getNewPassenger();
  }

  ngOnInit(): void {
    this.deliveryDetail = this.transportManagerService.deliveryPassenger;
  }

  onSubmit() {
    // console.log(this.deliveryDetail)
    this.deliveryDetail.deliveryDateTime = this.deliveryDetail.deliveryDate + 'T' + this.deliveryDetail.deliveryTimeActual
    this.transportManagerService.updateDelivery(this.deliveryDetail).subscribe((deliveryDetail) => {
      this.router.navigate(['/main/view_passenger_delivery'])
    })
  }

  onSubmitPassenger() {
    this.passenger.delivery.deliveryId = this.deliveryDetail.deliveryId;
    if (this.deliveryDetail.deliveryPassengerDetails.length === 0) {
      this.transportManagerService.addPassengerToDelivery(this.passenger).subscribe((passenger) => {
        this.deliveryDetail.deliveryPassengerDetails.push(passenger);
        this.notifierService.notify("success", "Passenger added successfully");
        this.setNewPassenger();
      })
    } else {
      let count = 0;
      for (let i = this.deliveryDetail.deliveryPassengerDetails.length - 1; i >= 0; i--) {
        if (this.btnText === 'Update' && i === this.tblIndex) {
          continue;
        }
        let passenger = this.deliveryDetail.deliveryPassengerDetails[i];
        if (
          (passenger.passengerNic !== '' && passenger.passengerNic === this.passenger.passengerNic) ||
          (passenger.contactNumber !== '' && passenger.contactNumber === this.passenger.contactNumber)
        ) {
          count++;
        }
        if (passenger.passengerNic === this.passenger.passengerNic && passenger.contactNumber === this.passenger.contactNumber) {
          this.notifierService.notify("error", "Duplicate NIC and Contact No found");
          break;
        } else if (passenger.contactNumber === this.passenger.contactNumber) {
          this.notifierService.notify("error", "Duplicate Contact No found");
          break;
        } else if (passenger.passengerNic === this.passenger.passengerNic) {
          this.notifierService.notify("error", "Duplicate NIC found");
          break;
        }
      }
      if (this.btnText === 'Add' && count === 0) {
        this.transportManagerService.addPassengerToDelivery(this.passenger).subscribe((passenger) => {
          this.deliveryDetail.deliveryPassengerDetails.push(passenger);
          this.notifierService.notify("success", "Passenger added successfully");
          this.setNewPassenger();
        })
      } else if (this.btnText === 'Update' && count === 0) {
        this.transportManagerService.updatePassengerOnDelivery(this.passenger).subscribe((passenger) => {
          this.deliveryDetail.deliveryPassengerDetails[this.tblIndex] = passenger
          this.notifierService.notify("success", "Passenger updated successfully");
          this.setNewPassenger();
        })
      }
    }

    // // console.log(this.item)
    // if (this.btnText === 'Add') {
    //   this.transportManagerService.addPassengerToDelivery(this.passenger).subscribe((passenger) => {
    //     this.deliveryDetail.deliveryPassengerDetails.push(passenger);
    //   })
    // } else if (this.btnText === 'Update') {
    //   // console.log(this.item)
    //   this.transportManagerService.updatePassengerOnDelivery(this.passenger).subscribe((passenger) => {
    //     this.deliveryDetail.deliveryPassengerDetails[this.tblIndex] = passenger
    //   })
    // }
    // this.setNewPassenger();
  }

  removePassenger(passengerDetailId, i) {
    this.transportManagerService.deletePassengerOnDelivery(passengerDetailId).subscribe((reply) => {
      if (reply) {
        this.deliveryDetail.deliveryPassengerDetails.splice(i, 1)
      }
    })
  }

  removeDelivery() {
    this.transportManagerService.deleteDelivery(this.deliveryDetail.deliveryId).subscribe((reply) => {
      if (reply) {
        this.router.navigate(['/main/view_passenger_delivery'])
      }
    })
  }

  setPassenger(passenger, i) {
    this.tblIndex = i;
    this.passenger.passengerDetailId = passenger.passengerDetailId;
    this.passenger.passengerName = passenger.passengerName;
    this.passenger.passengerNic = passenger.passengerNic;
    this.passenger.contactNumber = passenger.contactNumber;
    this.passenger.passengerType = passenger.passengerType;
    this.btnText = 'Update';
  }

  setNewPassenger() {
    this.passenger = this.getNewPassenger();
    this.passengerForm.resetForm();
    this.btnText = 'Add';
  }

  getNewPassenger() {
    return {
      passengerName: '',
      passengerNic: '',
      contactNumber: '',
      passengerType: '',
      delivery: {
        deliveryId: ''
      }
    };
  }


}
