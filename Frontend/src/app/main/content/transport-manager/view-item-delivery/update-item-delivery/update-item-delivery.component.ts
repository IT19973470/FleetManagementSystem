import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {TransportManagerService} from "../../../../../_service/transport-manager.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-update-item-delivery',
  templateUrl: './update-item-delivery.component.html',
  styleUrls: ['./update-item-delivery.component.css']
})
export class UpdateItemDeliveryComponent implements OnInit {

  @ViewChild('itemForm', {static: true}) public itemForm: NgForm;
  deliveryDetail = {
    deliveryId: '',
    deliveryPersonName: '',
    deliveryPersonNic: '',
    contactNumber: '',
    placeFrom: '',
    companyName: '',
    deliveryDate: '',
    deliveryTime: '',
    deliveryTimeActual: '',
    deliveryDateTime: '',
    deliveryItemDetails: []
  };

  item;
  btnText = 'Add';
  tblIndex;

  constructor(private transportManagerService: TransportManagerService, private router: Router) {
    this.item = this.getNewItem();
  }

  ngOnInit(): void {
    this.deliveryDetail = this.transportManagerService.deliveryItem;
  }

  onSubmit() {
    // console.log(this.deliveryDetail)
    this.deliveryDetail.deliveryDateTime = this.deliveryDetail.deliveryDate + 'T' + this.deliveryDetail.deliveryTimeActual
    this.transportManagerService.updateItemDelivery(this.deliveryDetail).subscribe((deliveryDetail) => {
      this.router.navigate(['/main/view_item_delivery'])
    })
  }

  onSubmitItem() {
    this.item.delivery.deliveryId = this.deliveryDetail.deliveryId;
    // console.log(this.item)
    if (this.btnText === 'Add') {
      this.transportManagerService.addItemToDelivery(this.item).subscribe((item) => {
        this.deliveryDetail.deliveryItemDetails.push(item);
      })
    } else if (this.btnText === 'Update') {
      // console.log(this.item)
      this.transportManagerService.updateItemOnDelivery(this.item).subscribe((item) => {
        this.deliveryDetail.deliveryItemDetails[this.tblIndex] = item
      })
    }
    this.setNewItem();
  }

  removeItem(itemDetailId, i) {
    this.transportManagerService.deleteItemOnDelivery(itemDetailId).subscribe((reply) => {
      if (reply) {
        this.deliveryDetail.deliveryItemDetails.splice(i, 1)
      }
    })
  }

  removeDelivery() {
    this.transportManagerService.deleteDelivery(this.deliveryDetail.deliveryId).subscribe((reply) => {
      if (reply) {
        this.router.navigate(['/main/view_item_delivery'])
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

  setNewItem() {
    this.item = this.getNewItem();
    this.itemForm.resetForm(this.item);
    this.btnText = 'Add';
  }

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
