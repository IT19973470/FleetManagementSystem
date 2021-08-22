import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {TransportManagerService} from "../../../../_service/transport-manager.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-passenger-delivery',
  templateUrl: './passenger-delivery.component.html',
  styleUrls: ['./passenger-delivery.component.css']
})
export class PassengerDeliveryComponent implements OnInit {

  @ViewChild('passengerForm', {static: true}) public passengerForm: NgForm;
  deliveryDetail = {
    deliveryPersonName: '',
    deliveryPersonNic: '',
    contactNumber: '',
    placeFrom: '',
    companyName: '',
    deliveryDate: '',
    deliveryTime: '',
    deliveryDateTime: '',
    deliveryPassengerDetails: []
  };

  passenger;
  btnText = 'Add';
  tblIndex;

  constructor(private transportManagerService: TransportManagerService, private router: Router) {
    this.passenger = this.getNewPassenger();
  }

  ngOnInit(): void {

  }

  onSubmit() {
    this.deliveryDetail.deliveryDateTime = this.deliveryDetail.deliveryDate + 'T' + this.deliveryDetail.deliveryTime
    this.transportManagerService.addPassengerDelivery(this.deliveryDetail).subscribe((deliveryDetail) => {
      this.router.navigate(['/main/view_passenger_delivery'])
    })
  }

  onSubmitPassenger() {
    if (this.btnText === 'Add') {
      this.deliveryDetail.deliveryPassengerDetails.push(this.passenger);
    } else if (this.btnText === 'Update') {
      this.deliveryDetail.deliveryPassengerDetails[this.tblIndex] = this.passenger
    }
    this.setNewPassenger();
  }

  setPassenger(passenger,i) {
    this.tblIndex = i;
    this.passenger.passengerName = passenger.passengerName;
    this.passenger.passengerNic = passenger.passengerNic;
    this.passenger.contactNumber = passenger.contactNumber;
    this.passenger.passengerType = passenger.passengerType;
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
      passengerType: ''
    };
  }

}
