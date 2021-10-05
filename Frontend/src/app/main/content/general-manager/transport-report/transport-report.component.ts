import { Component, OnInit } from '@angular/core';
import {GeneralManagerService} from "../../../../_service/general-manager.service";
import {Router} from "@angular/router";
import html2canvas from "html2canvas";
import {jsPDF} from "jspdf";

@Component({
  selector: 'app-transport-report',
  templateUrl: './transport-report.component.html',
  styleUrls: ['./transport-report.component.css']
})
export class TransportReportComponent implements OnInit {


  transportDetails = [];
  weekValue = 1;

  isModalTable = {
    text: '',
    openTable: false,
    foundItem: ''
  };

  // deliveryItemDetails = [];
  // deliveryItem = {
  //   deliveryItemDetails: []
  // };

  user: boolean = true;
  item: boolean = true;
  tblIndex;

  applicationID;
  selectedTransport;

  constructor(private generalManagerService: GeneralManagerService, private router: Router) {

  }

  // ngOnInit(): void {
  // }


  ngOnInit(): void {
    this.getTransports();
  }

  // setItem(deliveryItem, i) {
  //   this.tblIndex = i;
  //   this.deliveryItem = deliveryItem;
  //   this.isTrueOrFalse(true);
  // }


  isTrueOrFalse(reply) {
    this.isModalTable.openTable = reply;
  }

  getTransports() {
    this.generalManagerService.getTransportApplication().subscribe((transportDetails) => {
      this.transportDetails = transportDetails;
      // if(this.deliveryItemDetails.applicationID)
      console.log(this.transportDetails)
    })
  }


  getTransportByID() {
    this.generalManagerService.getTransportByID(this.applicationID).subscribe((transportDetails) => {
      this.transportDetails = transportDetails;
      // console.log(this.vehicles)
    })
  }

  //get all transports
  getAllTransportRequests() {
    this.generalManagerService.getTransportApplication().subscribe((transportDetails) => {
      this.transportDetails = transportDetails;
      // console.log(this.vehicles)
    })
  }




  sendToPdf(){
    let data = document.getElementById("pdf");
    // let data = document.getElementById("maindiv");
    // console.log(data);
    html2canvas(data).then(canvas => {
      const contentDataURL = canvas.toDataURL('image/jpeg', 2.0)
      console.log(contentDataURL);
      let pdf = new jsPDF('l', 'cm', 'a3'); //Generates PDF in landscape mode
      // let pdf = new jspdf('p', 'cm', 'a4'); //Generates PDF in portrait mode
      pdf.addImage(contentDataURL, 'PNG', 0, 0, 45.7, 21.0);
      pdf.save('Filename.pdf');
    });
  }
}
