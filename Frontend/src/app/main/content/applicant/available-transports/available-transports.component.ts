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
      lisenseID:'',
      driveremployeeID:'',
      drivercontactNo:'',
      driveremail:'',
      type: "",
      BookedVehicleType:'',
      model:'',
      noOfSeats:'',
      vehicleType:'',
      passengerApp: {
        noOfPassengers: '5',
        passengerApplicationID: '',
      },
      passengerPassengerApplications:[]
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
    this.passenger = deliveryItem;
    console.log(this.passenger)
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
     // console.log(this.application)
      this.getAllDriverVehicle();
    })
  }


  getAllDriverVehicle() {
    this.applicantService.getDriverVehicle().subscribe((driverVehicle) => {
      this.driverVehicle=driverVehicle
     // console.log(this.driverVehicle)
      this.checkArray()
    })
  }



  checkArray(){
    var arr = this.application;
    for(let x=0;x<=this.driverVehicle.length-1; x++){
      let a2=this.driverVehicle[x];
     // console.log(a2)
      for(let x=0;x<=this.application.length-1; x++){
        let a1=this.application[x];
        if(a2.application.applicationID===a1.applicationID)
          for( var i = 0; i < arr.length; i++){
            if ( arr[i] === a1) {
             // console.log(a2)
              this.main.push(a1)
                //console.log(this.main)
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
       this.passenger.arrivaleDate = z1.depatureDateActual;
       this.passenger.depatureDate = z1.arrivaleDateActual;
       this.passenger.destination = z1.destination;
       this.passenger.approval = z1.approval;
       this.passenger.type=z1.type;
       this.passenger.reason=z1.reason;
       this.passenger.vehicleType=z1.vehicleType;
       this.passenger.passengerApp.passengerApplicationID=z1.passengerApplicationDTO.passengerApplicationID
      this.passenger.passengerPassengerApplications=z1.passengerApplicationDTO.passengerPassengerApplications
       this.passenger.lisenseID=z2.driver.lisenseID;
       this.passenger.driveremployeeID=z2.driver.userAccount.employeeID;
       this.passenger.drivercontactNo=z2.driver.userAccount.contactNo
       this.passenger.driveremail=z2.driver.userAccount.email
       this.passenger.drivername = z2.driver.userAccount.name;
      // this.passenger.contactNumber = z2.contactNumber;
      this.passenger.vehicleId=z2.vehicle.vehicleId;
      this.passenger.BookedVehicleType=z2.vehicle.vehicleType
      this.passenger.model=z2.vehicle.model
      this.passenger.noOfSeats =z2.vehicle.noOfSeats
      this.mainarray.push(this.passenger)
      console.log(this.mainarray)
      this.setNewPassenger();
    }

  }
  setArray2(){
    //
    // console.log(this.application)

    for(let x=0;x<=this.application.length-1;x++)
    {

      let z1=this.application[x]
     //console.log(this.application)
      this.passenger.applicationID = z1.applicationID;
      this.passenger.arrivaleDate = z1.arrivaleDateActual;
      this.passenger.depatureDate = z1.depatureDateActual;
      this.passenger.destination = z1.destination;
      this.passenger.approval = z1.approval;
      this.passenger.type=z1.type;
      this.passenger.reason=z1.reason;
      this.passenger.vehicleType="Not Assigned";
      this.passenger.passengerApp.passengerApplicationID=z1.passengerApplicationDTO.passengerApplicationID
      this.passenger.passengerPassengerApplications=z1.passengerApplicationDTO.passengerPassengerApplications
      this.passenger.lisenseID="Not Assigned";
      this.passenger.driveremployeeID="Not Assigned";
      this.passenger.drivercontactNo="Not Assigned"
      this.passenger.driveremail="Not Assigned"
      this.passenger.drivername = "Not Assigned";
      this.passenger.drivername = "Not Assigned";
      this.passenger.contactNumber ="Not Assigned";
      this.passenger.model="Not Assigned";
      this.passenger.noOfSeats="Not Assigned"
      this.passenger.vehicleId ="Not Assigned";
      this.mainarray.push(this.passenger)
   //   console.log(this.mainarray2)
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
      lisenseID:'',
      driveremployeeID:'',
      drivercontactNo:'',
      driveremail:'',
      approval:'',
      type: "",
      BookedVehicleType:'',
      model:'',
      noOfSeats:'',
      passengerApp: {
        noOfPassengers: '',
        passengerApplicationID: ''
      },
      passengerPassengerApplications:['']
    }}

  goToUpdate(deliveryItem) {
    this.applicantService.deliveryItem = deliveryItem;
    // console.log(this.applicantService.deliveryItem);
    this.router.navigate(['/main/update_available_transports'])
  }


}
