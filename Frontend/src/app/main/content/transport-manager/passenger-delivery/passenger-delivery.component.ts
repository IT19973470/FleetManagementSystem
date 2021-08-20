import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-passenger-delivery',
  templateUrl: './passenger-delivery.component.html',
  styleUrls: ['./passenger-delivery.component.css']
})
export class PassengerDeliveryComponent implements OnInit {

  @ViewChild('passengerForm', {static: true}) public passengerForm: NgForm;
  deliveryDetail = {
    deliveryPassengerName: '',
    deliveryPassengerNic: '',
    contactNumber: '',
    placeFrom: '',
    companyName: '',
    deliveryDate: '',
    deliveryTime: '',
    passengers: []
  };

  passenger;

  constructor() {
    this.passenger = this.getNewPassenger();
  }

  ngOnInit(): void {

  }

  onSubmit() {

  }

  onSubmitPassenger() {
    this.deliveryDetail.passengers.push(this.passenger);
    this.passenger = this.getNewPassenger();
    this.passengerForm.resetForm(this.passenger);
  }

  setPassenger(passenger) {
    this.passenger.passengerName = passenger.passengerName;
    this.passenger.passengerNic = passenger.passengerNic;
    this.passenger.contactNumber = passenger.contactNumber;
    this.passenger.passengerType = passenger.passengerType;
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
