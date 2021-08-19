import {Component, OnInit, ViewChild} from '@angular/core';
import {NavbarService} from "../../../../_service/navbar.service";
import {NgForm} from "@angular/forms";
import {TransportManagerService} from "../../../../_service/transport-manager.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-item-delivery',
  templateUrl: './item-delivery.component.html',
  styleUrls: ['./item-delivery.component.css']
})
export class ItemDeliveryComponent implements OnInit {

  @ViewChild('itemForm', {static: true}) public itemForm: NgForm;
  deliveryDetail = {
    deliveryPersonName: '',
    deliveryPersonNic: '',
    contactNumber: '',
    placeFrom: '',
    companyName: '',
    deliveryDate: '',
    deliveryTime: '',
    deliveryDateTime: '',
    deliveryItemDetails: []
  };

  item;

  constructor(private transportManagerService: TransportManagerService, private router: Router) {
    this.item = this.getNewItem();
  }

  ngOnInit(): void {

  }

  onSubmit() {
    this.deliveryDetail.deliveryDateTime = this.deliveryDetail.deliveryDate + 'T' + this.deliveryDetail.deliveryTime
    this.transportManagerService.addItemDelivery(this.deliveryDetail).subscribe((deliveryDetail) => {
      this.router.navigate(['/main/view_item_delivery'])
    })
  }

  onSubmitItem() {
    this.deliveryDetail.deliveryItemDetails.push(this.item);
    this.item = this.getNewItem();
    this.itemForm.resetForm(this.item);
  }

  setItem(item) {
    this.item.itemName = item.itemName;
    this.item.itemType = item.itemType;
    this.item.itemQty = item.itemQty;
  }

  getNewItem() {
    return {
      itemName: '',
      itemType: '',
      itemQty: 1
    };
  }
}
