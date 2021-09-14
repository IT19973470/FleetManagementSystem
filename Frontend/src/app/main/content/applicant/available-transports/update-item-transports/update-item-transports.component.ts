import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {ApplicantService} from "../../../../../_service/applicant.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-update-item-transports',
  templateUrl: './update-item-transports.component.html',
  styleUrls: ['./update-item-transports.component.css']
})
export class UpdateItemTransportsComponent implements OnInit {
  @ViewChild('itemForm', {static: true}) public itemForm: NgForm;
  @ViewChild('passengerForm', {static: true}) public passengerForm: NgForm;

  passengerpassengerApp = {

    applicationID: "",
    approval: false,
    arrivaleDate: null,
    arrivaleDateActual: '',
    depatureDate: null,
    depatureDateActual: '',
    destination: "",
    vehicleType: "",
    reason: "",
    passengerApp: {
      noOfPassengers: '',
      passengerApplicationID:'',
      passengerPassengerApplications: []
    },
    itemApp: {
      noOfItems: '',
      itemApplicationID:'',
    }
  }

  // applicationID: "App20210911113145"
  // approval: false
  // arrivaleDate: "2021-09-29 11:31 AM"
  // arrivaleDateActual: "2021-09-29T11:31:00"
  // depatureDate: "2021-09-22 11:31 AM"
  // depatureDateActual: "2021-09-22T11:31:00"
  // destination: "Jaffna"
  // passengerApp: {passengerApplicationID: 'PassApp20210911113145', noOfPassengers: 1, passengerPassengerApplications: Array(3)}
  // passengerApplicationDTO: null
  // reason: "Repair"
  // type: "P"
  // vehicleType: "Bus"
  //



  Pass={
    item:{
      itemID:'',
      itemName:'',
      qty:''
    }
  };


  tblIndex;
  plus:boolean=true; //plus button
  pen:boolean=false;//pen button
  DBPass;
  PassengerDB = []; //DB Passenger
  ViewPassenger;//View Passenger
  y = 0; //DB Passenger size
  z = 0; //Array size

  errorP =2; //
  passengerOBJ; //Array Object

  constructor(private applicantService: ApplicantService, private router: Router) {
    // this.item = this.getNewItem();
  }

  viewUpdete:boolean;
  ngOnInit(): void {
    this.passengerpassengerApp = this.applicantService.deliveryItem;
    console.log(this.applicantService.deliveryItem)
    if(this.applicantService.deliveryItem.bookingApplicationId==="null")
      this.viewUpdete=true
    else
      this.viewUpdete=false
    this.getAllIPassengers()
  }

  flag;
  getAllIPassengers() {
    this.applicantService.GetItemApp(this.passengerpassengerApp.applicationID).subscribe((deliveryItemDetails) => {
      this.PassengerDB = deliveryItemDetails;
      this.DBPass=this.PassengerDB;
      this.ViewPassenger=this.DBPass.itemApplicationDTO.itemItemApplicationDTOS;
      // console.log(this.PassengerDB);
      this.y = deliveryItemDetails.length;
    })
  }

  onSubmit() {
    // console.log(this.passengerpassengerApp)
    this.applicantService.updateform(this.passengerpassengerApp).subscribe((deliveryDetail) => {
      this.router.navigate(['/main/available_transports'])
    })
  }


  onSubmitPassenger() {
    //  console.log(this.passengerpassengerApp.applicationID);
     console.log(this.Pass.item);

    this.flag=1;

    if (this.plus == true) {
      this.applicantService.AddItemApp(this.passengerpassengerApp.itemApp.itemApplicationID,this.Pass.item.itemID,this.Pass.item).subscribe((deliveryDetail) => {
        this.getAllIPassengers()
      })

    }
  else if(this.pen==true){
      this.applicantService.updateItem(this.Pass.item).subscribe((deliveryDetail) => {
        this.getAllIPassengers()
      })
      this.plus=true;
      this.pen=false;
    }

    this.setNewPassenger();


  }

  chkPassengerId() {
    if (this.Pass.item.itemID != '') {
      //  console.log(this.Pass.passenger.passengerId)
      this.flag=2;
    }
  }

  removePassenger(i,itemId){
    this.applicantService.deleteItemApp(this.passengerpassengerApp.itemApp.itemApplicationID,itemId).subscribe((deliveryDetail) => {
      this.ngOnInit();
    })
  }

  setNewPassenger() {
    this.Pass = this.getNewPassenger();
    this.passengerForm.resetForm(this.Pass.item);
  }

  getNewPassenger() {
    return {
      item:
        { itemID:'',
          itemName:'',
          qty:''},
    };
  }

  removeDelivery() {
    this.applicantService.deleteForm(this.passengerpassengerApp.applicationID).subscribe((deliveryDetail) => {
      this.router.navigate(['/main/available_transports']);
    })
  }

  setPassenger(item,j){
    this.tblIndex = j;
    this.Pass.item.itemID = item.itemID;
    this.Pass.item.itemName=item.itemName;
    this.Pass.item.qty=item.qty;
    this.pen=true;
    this.plus=false;
  }
}
