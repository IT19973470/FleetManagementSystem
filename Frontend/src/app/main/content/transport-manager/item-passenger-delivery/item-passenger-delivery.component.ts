import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {TransportManagerService} from "../../../../_service/transport-manager.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-item-passenger-delivery',
  templateUrl: './item-passenger-delivery.component.html',
  styleUrls: ['./item-passenger-delivery.component.css']
})
export class ItemPassengerDeliveryComponent implements OnInit {

  @ViewChild('itemForm', {static: true}) public itemForm: NgForm;
  @ViewChild('passengerForm', {static: true}) public passengerForm: NgForm;
  deliveryDetail = {
    deliveryPersonName: '',
    deliveryPersonNic: '',
    contactNumber: '',
    address: '',
    companyName: '',
    deliveryDate: '',
    deliveryTime: '',
    deliveryDateTime: '',
    deliveryItemDetails: [],
    deliveryPassengerDetails: []
  };

  item;
  btnTextItem = 'Add';
  tblIndexItem;

  passenger;
  btnTextPassenger = 'Add';
  tblIndexPassenger;

  constructor(private transportManagerService: TransportManagerService, private router: Router) {
    this.item = this.getNewItem();
    this.passenger = this.getNewPassenger();
  }

  ngOnInit(): void {

  }

  onSubmit() {
    this.deliveryDetail.deliveryDateTime = this.deliveryDetail.deliveryDate + 'T' + this.deliveryDetail.deliveryTime
    this.transportManagerService.addPassengerItemDelivery(this.deliveryDetail).subscribe((deliveryDetail) => {
      this.router.navigate(['/main/view_item_passenger_delivery'])
    })
  }

  onSubmitItem() {
    if (this.btnTextItem === 'Add') {
      this.deliveryDetail.deliveryItemDetails.push(this.item);
    } else if (this.btnTextItem === 'Update') {
      this.deliveryDetail.deliveryItemDetails[this.tblIndexItem] = this.item
    }
    this.setNewItem();
  }

  onSubmitPassenger() {
    if (this.btnTextPassenger === 'Add') {
      this.deliveryDetail.deliveryPassengerDetails.push(this.passenger);
    } else if (this.btnTextPassenger === 'Update') {
      this.deliveryDetail.deliveryPassengerDetails[this.tblIndexPassenger] = this.passenger
    }
    this.setNewPassenger();
  }

  setItem(item, i) {
    this.tblIndexItem = i;
    this.item.itemName = item.itemName;
    this.item.itemType = item.itemType;
    this.item.itemQty = item.itemQty;
    this.btnTextItem = 'Update';
  }

  setPassenger(passenger, i) {
    this.tblIndexPassenger = i;
    this.passenger.passengerName = passenger.passengerName;
    this.passenger.passengerNic = passenger.passengerNic;
    this.passenger.contactNumber = passenger.contactNumber;
    this.passenger.passengerType = passenger.passengerType;
  }

  setNewItem() {
    this.item = this.getNewItem();
    this.itemForm.resetForm(this.item);
    this.btnTextItem = 'Add';
  }

  setNewPassenger() {
    this.passenger = this.getNewPassenger();
    this.passengerForm.resetForm();
    this.btnTextPassenger = 'Add';
  }

  getNewItem() {
    return {
      itemName: '',
      itemType: '',
      itemQty: 1
    };
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
