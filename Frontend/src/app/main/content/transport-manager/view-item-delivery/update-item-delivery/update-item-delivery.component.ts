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
    if (this.btnText === 'Add') {
      this.deliveryDetail.deliveryItemDetails.push(this.item);
    } else if (this.btnText === 'Update') {
      this.deliveryDetail.deliveryItemDetails[this.tblIndex] = this.item
    }
    this.item = this.getNewItem();
    this.itemForm.resetForm(this.item);
  }

  setItem(item, i) {
    this.tblIndex = i;
    this.item.itemName = item.itemName;
    this.item.itemType = item.itemType;
    this.item.itemQty = item.itemQty;
    this.btnText = 'Update';
  }

  getNewItem() {
    return {
      itemName: '',
      itemType: '',
      itemQty: 1
    };
  }

}
