import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";
import {ApplicantService} from "../../../../_service/applicant.service";


@Component({
  selector: 'app-create-new-request',
  templateUrl: './create-new-request.component.html',
  styleUrls: ['./create-new-request.component.css']
})
export class CreateNewRequestComponent implements OnInit {
  @ViewChild('applicantFrom', {static: true}) public applicantFrom: NgForm;
  @ViewChild('passengerForm', {static: true}) public passengerForm: NgForm;


  passengerpassengerApp = {

    applicationID: '',
    arrivaleDate: '',
    depatureDate: "",
    reason: '',
    vehicleType: '',
    destination: '',
    type:'P',
    passengerApplication: {
      noOfPassengers: '5',
      passengerPassengerApplications: []
    },
    // itemApplication:{
    //   itemItemApplications: [
    //
    //   ]
    // }
  }

  Pass = {
    passenger: {
      passengerId: ''
    }
  };

// Item ={
//   item:{
//     itemID:'',
//     itemName:'',
//     qty:''
//   }
// }
  //Passenger.name;
  // x={
  //   applicationID:'',
  //
  //
  //
  // };
  //
  tblIndex;
  PassengerDB=[];
  Pp=[];
   y=0;
  constructor(private applicant: ApplicantService, private router: Router) {
    //  this.Pass.passenger = this.getNewPassenger();
  }

  ngOnInit(): void {
    this.getAllIPassengers()
  }

  getAllIPassengers(){
    this.applicant.getAllPassengers().subscribe((deliveryItemDetails) => {
      this.PassengerDB = deliveryItemDetails;
      this.y=deliveryItemDetails.length;
    })
  }
  onSubmit() {
    console.log(this.passengerpassengerApp);
    this.applicant.addApp(this.passengerpassengerApp).subscribe((deliveryDetail) => {
      this.router.navigate(['/main/available_transports'])
    })
  }

  btnText = 'Add';
  errorP:boolean=false;
  z;
  zz=[];
  onSubmitPassenger() {
    for( let  x=0; x<=this.y;x++) {
       this.z = this.PassengerDB[x];
      if (this.Pass.passenger.passengerId===this.z.passengerId) {
        this.passengerpassengerApp.passengerApplication.passengerPassengerApplications.push(this.Pass);
        this.zz.push(this.z);
        this.setNewPassenger();
        this.errorP=false;
        break;
    }

      else{
        this.errorP=true;
      }

    }

  }

  setNewPassenger() {
    this.Pass = this.getNewPassenger();
    this.passengerForm.resetForm(this.Pass.passenger);
    this.btnText = 'Add';

  }

  setPassenger(passenger, i) {
    this.tblIndex = i;
    this.Pass.passenger.passengerId = passenger.passengerId;
    this.btnText = 'Update';
  }

  getNewPassenger() {
    return {
      passenger:
        {passengerId: ''},
    };
  }


   // onSubmitItem() {
   //   this.passengerpassengerApp.itemApplication.itemItemApplications.push(this.Item);
   //   this.setNewItem();
   // }

  // setNewItem(){
  //   this.Item = this.getNewItems();
  //   this.i.resetForm(this.Item.item);
  //   this.btnText = 'Add'
  // }
  //  setItems(items) {
  //    this.tblIndex = i;
  //    this.Item.passenger.passengerId = passenger.passengerId;
  //    this.btnText = 'Update';
  //  }

   // getNewItems() {
   //   return {
   //     item:
   //       { itemID: '',
   //         itemName:'',
   //         qty:''
   //       },
   //
   //   };
   // }

}
