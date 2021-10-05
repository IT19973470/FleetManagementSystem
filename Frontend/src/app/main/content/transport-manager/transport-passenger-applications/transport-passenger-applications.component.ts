import {Component, OnInit} from '@angular/core';
import {TransportManagerService} from "../../../../_service/transport-manager.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-transport-passenger-applications',
  templateUrl: './transport-passenger-applications.component.html',
  styleUrls: ['./transport-passenger-applications.component.css']
})
export class TransportPassengerApplicationsComponent implements OnInit {

  isModalTable = {
    text: '',
    openTable: false,
    foundItem: ''
  };

  applications;

  constructor(private transportManagerService: TransportManagerService, private router: Router) {

  }

  ngOnInit(): void {
    this.getApprovedApplications();
  }

  isTrueOrFalse(reply) {
    this.isModalTable.openTable = reply;
  }

  getApprovedApplications() {
    this.transportManagerService.getApprovedApplications("P").subscribe((applications) => {
      this.applications = applications;
      console.log(applications);
    })
  }

  getApprovedApplicationsByDestination(destination) {
    this.transportManagerService.getApprovedApplicationsByDestination(destination, "P").subscribe((applications) => {
      this.applications = applications;
      // console.log(applications);
    })
  }

  goToUpdate(deliveryItem) {
    // this.applicantService.deliveryItem = deliveryItem;
    // // console.log(this.applicantService.deliveryItem);
    // this.router.navigate(['/main/update_available_transports'])
  }

}
