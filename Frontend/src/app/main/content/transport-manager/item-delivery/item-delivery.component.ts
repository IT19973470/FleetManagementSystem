import {Component, OnInit} from '@angular/core';
import {NavbarService} from "../../../../_service/navbar.service";

@Component({
  selector: 'app-item-delivery',
  templateUrl: './item-delivery.component.html',
  styleUrls: ['./item-delivery.component.css']
})
export class ItemDeliveryComponent implements OnInit {

  deliveryDetail = {
    deliveryPersonName: '',
    deliveryPersonNic: '',
    contactNumber: '',
    placeFrom: '',
    companyName: '',
    deliveryDate: '',
    deliveryTime: '',
    items: []
  };

  constructor() {
  }

  ngOnInit(): void {

  }

  onSubmit() {

  }

}
