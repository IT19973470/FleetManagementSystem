import {Component, OnInit, ViewChild} from '@angular/core';
import {NavbarService} from "../../../../_service/navbar.service";
import {NgForm} from "@angular/forms";
import {TransportManagerService} from "../../../../_service/transport-manager.service";
import {Router} from "@angular/router";
import {NotifierService} from "angular-notifier";

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
    address: '',
    companyName: '',
    deliveryDate: '',
    deliveryTime: '',
    deliveryDateTime: '',
    deliveryItemDetails: []
  };

  item;
  btnText = 'Add';
  tblIndex;

  constructor(private transportManagerService: TransportManagerService, private router: Router,private notifierService: NotifierService) {
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
    if (this.deliveryDetail.deliveryItemDetails.length === 0) {
      this.deliveryDetail.deliveryItemDetails.push(this.item);
      this.notifierService.notify("success", "Item added successfully");
      this.setNewItem();
    } else {
      let count = 0;
      for (let i = this.deliveryDetail.deliveryItemDetails.length - 1; i >= 0; i--) {
        if (this.btnText === 'Update' && i === this.tblIndex) {
          continue;
        }
        let item = this.deliveryDetail.deliveryItemDetails[i];
        if (
          (item.itemName !== '' && item.itemName === this.item.itemName)
        ) {
          count++;
        }
        if (item.itemName === this.item.itemName) {
          this.notifierService.notify("error", "Duplicate Item Name found");
          break;
        }
      }
      if (this.btnText === 'Add' && count === 0) {
        this.deliveryDetail.deliveryItemDetails.push(this.item);
        this.notifierService.notify("success", "Item added successfully");
        this.setNewItem();
      } else if (this.btnText === 'Update' && count === 0) {
        this.deliveryDetail.deliveryItemDetails[this.tblIndex] = this.item
        this.notifierService.notify("success", "Item updated successfully");
        this.setNewItem();
      }
    }
  }

  setItem(item, i) {
    this.tblIndex = i;
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
      itemName: '',
      itemType: '',
      itemQty: 1
    };
  }
}
