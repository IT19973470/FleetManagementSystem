import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ApplicantService} from "../../../../_service/applicant.service";
import {flatten} from "@angular/compiler";
import {main} from "@angular/compiler-cli/src/main";
import application from "@angular-devkit/build-angular/src/babel/presets/application";

@Component({
  selector: 'app-available-transports',
  templateUrl: './available-transports.component.html',
  styleUrls: ['./available-transports.component.css']
})
export class AvailableTransportsComponent implements OnInit {

  isModalTable = {
    text: '',
    openTable: false,
    foundItem: ''
  };

  passengerpassengerApp = {
pass: {
    applicationID: '',
    arrivaleDate: '',
    depatureDate: "",
    reason: '',
    vehicleType: '',
    destination: '',
    type: 'P',
    passengerApplication: {
      noOfPassengers: '1',
      passengerPassengerApplications: []
    }
    }
  }


  application = [];
  driverVehicle=[];
  mainarray1=[];
  mainarray2=[];
  mainarray=[];
  main=[];

  deliveryItem = {
    deliveryItemDetails: []
  };




    passenger=
      {
        applicationID: '',
        arrivaleDate: '',
        depatureDate: "",
        reason: '',
        destination:'',
        contactNumber:'',
        drivername:'',
        vehicleId: '',
        approval:'',
        type: "",
        vehicleType:'',
        passengerApp: {
          noOfPassengers: '5',
          passengerApplicationID: '',
        }
      }



  user:boolean=true;
  item:boolean=true;
  tblIndex;

  constructor(private applicantService: ApplicantService, private router: Router) {
  }

  ngOnInit(): void {
    this.getAllItemDeliveries();
  }

  setItem(deliveryItem,i) {
    this.tblIndex = i;
    this.deliveryItem = deliveryItem;
    this.isTrueOrFalse(true);
  }

  // goToUpdate(deliveryItem) {
  //   this.transportManagerService.deliveryItem = deliveryItem;
  //   this.router.navigate(['/main/update_item_delivery'])
  // }

  isTrueOrFalse(reply) {
    this.isModalTable.openTable = reply;
  }

  getAllItemDeliveries() {
    this.applicantService.getAllApplication().subscribe((application) => {
      this.application = application;
      this.getAllDriverVehicle();
    })
  }


  getAllDriverVehicle() {
    this.applicantService.getDriverVehicle().subscribe((driverVehicle) => {
      this.driverVehicle=driverVehicle
      this.checkArray()
    })
  }



  checkArray(){
    var arr = this.application;
    for(let x=0;x<=this.driverVehicle.length-1; x++){
      let a2=this.driverVehicle[x];
      //console.log(a2)
      for(let x=0;x<=this.application.length-1; x++){
        let a1=this.application[x];
        if(a2.applicationId===a1.applicationID)
         // console.log(a1)
        for( var i = 0; i < arr.length; i++){

          if ( arr[i] === a1) {

            this.main.push(a1)
            arr.splice(i, 1)
          }

        }

      }

    }

    //console.log(this.main)
   // console.log(this.application)

    this.setArray();
    this.setArray2();
    }




  setArray() {



    for(let x=0;x<=this.main.length-1;x++)
    {
    let z2=this.driverVehicle[x]
      let z1=this.main[x]
  // console.log(this.application)
    this.passenger.applicationID =z1.applicationID;
    this.passenger.arrivaleDate = z1.arrivaleDate;
    this.passenger.depatureDate = z1.depatureDate;
    this.passenger.destination = z1.destination;
    this.passenger.approval = z1.approval;
    this.passenger.type=z1.type;
    this.passenger.reason=z1.reason;
    this.passenger.vehicleType=z1.vehicleType;
    this.passenger.passengerApp.passengerApplicationID=z1.passengerApp.passengerApplicationID
    this.passenger.drivername = z2.drivername;
    this.passenger.contactNumber = z2.contactNumber;
    this.passenger.vehicleId = z2.vehicleId;
    this.mainarray.push(this.passenger)
 // console.log(this.mainarray1)
    this.setNewPassenger();
    }

  }
setArray2(){
  console.log(this.application)

  for(let x=0;x<=this.application.length-1;x++)
  {

    let z1=this.application[x]
    console.log(this.application)
    this.passenger.applicationID = z1.applicationID;
    this.passenger.arrivaleDate = z1.arrivaleDate;
    this.passenger.depatureDate = z1.depatureDate;
    this.passenger.destination = z1.destination;
    this.passenger.approval = z1.approval;
    this.passenger.type=z1.type;
    this.passenger.reason=z1.reason;
    this.passenger.vehicleType=z1.vehicleType;
    this.passenger.passengerApp.passengerApplicationID=z1.passengerApp.passengerApplicationID
    this.passenger.drivername = "Not Assigned";
    this.passenger.contactNumber ="Not Assigned";
    this.passenger.vehicleId ="Not Assigned";
    this.mainarray.push(this.passenger)
    console.log(this.mainarray2)
    this.setNewPassenger();
  }


}

  setNewPassenger() {

    this.passenger = this.getNewPassenger();

  }
  getNewPassenger() {
    return {

          applicationID: '',
          arrivaleDate: '',
          depatureDate: "",
          reason: '',
          destination:'',
          contactNumber:'',
          drivername:'',
          vehicleType:'',
          vehicleId: '',
          approval:'',
           type: "",
      passengerApp: {
        noOfPassengers: '',
        passengerApplicationID: ''
      }

  }}

  goToUpdate(deliveryItem) {
    this.applicantService.deliveryItem = deliveryItem;
   // console.log(this.applicantService.deliveryItem);
    this.router.navigate(['/main/update_available_transports'])
  }


}
