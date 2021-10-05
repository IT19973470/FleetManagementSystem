import {Component, OnInit, ViewChild} from '@angular/core';
import {TransportManagerService} from "../../../../_service/transport-manager.service";
import {Router} from "@angular/router";
import {BookingManagerService} from "../../../../_service/booking-manager.service";
import {NgForm} from "@angular/forms";
import html2canvas from "html2canvas";
import {jsPDF} from "jspdf";
import * as jspdf from "jspdf";

@Component({
  selector: 'app-view-shift',
  templateUrl: './view-shift.component.html',
  styleUrls: ['./view-shift.component.css']
})
export class ViewShiftComponent implements OnInit {
  @ViewChild('shiftForm', {static: true}) public shiftForm: NgForm;
  shifts = [];
  shift = {
    shiftId: '',
    shiftDate: '',
    startingTime: '',
    endingTime: '',
    attendance: '',
    driverVehicle: {
      driverVehicleID: {
        driverID: '',
        vehicleId: ''
      }
    },
    bookingManagementClerk: {
      bookingManagementClerkId: ''
    }
  };

  selectedShift;

  driverId;
  vehicleType;

  constructor(private bookingManagerService: BookingManagerService, private router: Router) {
  }

  ngOnInit(): void {
    this.getAllShifts();
  }

  selectShift(shift) {
    this.selectedShift = shift;
  }

  goToUpdate(shift) {
    this.bookingManagerService.shift = shift;
    this.router.navigate(['/main/update_shift'])
  }

  getAllShifts() {
    this.bookingManagerService.getAllShifts().subscribe((shifts) => {
      this.shifts = shifts;
      console.log(shifts)
    })
  }

  // sendToPdf(){
  //   let data = document.getElementById("pdf");
  //   // let data = document.getElementById("maindiv");
  //   // console.log(data);
  //   html2canvas(data).then(canvas => {
  //     const contentDataURL = canvas.toDataURL('image/jpeg', 2.0)
  //     console.log(contentDataURL);
  //     let pdf = new jsPDF('l', 'cm', 'a3'); //Generates PDF in landscape mode
  //     // let pdf = new jspdf('p', 'cm', 'a4'); //Generates PDF in portrait mode
  //     pdf.addImage(contentDataURL, 'PNG', 0, 0, 45.7, 21.0);
  //     pdf.save('Filename.pdf');
  //   });
  // }

  sendToPdf(pdf)
  {
    let data = document.getElementById('pdf');
    html2canvas(data).then(canvas => {
      const contentDataURL = canvas.toDataURL('image/png')
      let pdf = new jsPDF('l', 'cm', 'a4'); //Generates PDF in landscape mode
      // let pdf = new jspdf('p', 'cm', 'a4'); Generates PDF in portrait mode
      pdf.addImage(contentDataURL, 'PNG', 0, 0, 29.7, 21.0);
      pdf.save('Filename.pdf');
    });
  }
  // getShift() {
  //   this.bookingManagerService.getShift(this.shiftId).subscribe((shifts) => {
  //     this.shifts = shifts;
  //     console.log(this.shifts)
  //   })
  // }
  pdf: jsPDF;

  getAllShiftsByDriver() {
    this.bookingManagerService.getAllShiftsByDriver(this.driverId).subscribe((shifts) => {
      this.shifts = shifts;
    })
  }

  getAllShiftsByVehicle() {
    this.bookingManagerService.getAllShiftsByVehicle(this.vehicleType).subscribe((shifts) => {
      this.shifts = shifts;
    })
  }

  goToApplicationBooking() {
    this.bookingManagerService.shift = this.selectedShift;
    this.router.navigate(['/main/booking_application'])
  }

  goToSpecialBooking() {
    this.bookingManagerService.shift = this.selectedShift;
    this.router.navigate(['/main/special_booking'])
  }

  goToVipBooking() {
    this.bookingManagerService.shift = this.selectedShift;
    this.router.navigate(['/main/vip_booking'])
  }

  goToProgramBooking() {
    this.bookingManagerService.shift = this.selectedShift;
    this.router.navigate(['/main/program_booking'])
  }
}
