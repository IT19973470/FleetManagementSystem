import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-create-new-request',
  templateUrl: './create-new-request.component.html',
  styleUrls: ['./create-new-request.component.css']
})
export class CreateNewRequestComponent implements OnInit {
  @ViewChild('passengerForm', {static: true}) public passengerForm: NgForm;
  deliveryDetail = {
    empId: '',
    destination: '',
    depatureDate: '',
    mail: '',
    vehicle: '',
    reason: '',
    deliveryTime: '',
    passengers: [] ,
    items:[]

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
  onSubmitItem() {
    this.deliveryDetail.passengers.push(this.passenger);
    this.passenger = this.getNewPassenger();
    this.passengerForm.resetForm(this.passenger);
  }

  setItems(passenger) {
    this.passenger.passengerName = passenger.passengerName;
    this.passenger.passengerNic = passenger.passengerNic;
    this.passenger.contactNumber = passenger.contactNumber;
    this.passenger.passengerType = passenger.passengerType;
  }

  getNewItems() {
    return {
      passengerName: '',
      passengerNic: '',
      contactNumber: '',
      passengerType: ''
    };
  }

}
