import {Component, OnInit} from '@angular/core';
import {ApplicantService} from "../../../../_service/applicant.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-transport-applications',
  templateUrl: './transport-applications.component.html',
  styleUrls: ['./transport-applications.component.css']
})
export class TransportApplicationsComponent implements OnInit {

  isModalTable = {
    text: '',
    openTable: false,
    foundItem: ''
  };

  application = [];
  driverVehicle = [];
  main = [];

  deliveryItem = {
    deliveryItemDetails: []
  };

  passenger;

  tblIndex;

  constructor(private applicantService: ApplicantService, private router: Router) {
    this.passenger = this.getNewPassenger();
  }

  ngOnInit(): void {
    this.getAllItemDeliveries();
  }

  setItem(deliveryItem, i) {
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
      this.driverVehicle = driverVehicle
      // console.log(this.driverVehicle)
    })
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
      destination: '',
      contactNumber: '',
      drivername: '',
      vehicleType: '',
      vehicleId: '',
      lisenseID: '',
      driveremployeeID: '',
      drivercontactNo: '',
      driveremail: '',
      approval: '',
      type: "",
      BookedVehicleType: '',
      model: '',
      noOfSeats: '',
      passengerApp: {
        noOfPassengers: '',
        passengerApplicationID: ''
      },
      passengerPassengerApplications: ['']
    }
  }

  goToUpdate(deliveryItem) {
    this.applicantService.deliveryItem = deliveryItem;
    // console.log(this.applicantService.deliveryItem);
    this.router.navigate(['/main/update_available_transports'])
  }


}
