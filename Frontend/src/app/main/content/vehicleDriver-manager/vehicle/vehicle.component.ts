import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {VehicleDriverManagerService} from "../../../../_service/vehicle-driver-manager.service";
import {Router} from "@angular/router";
import {NotifierService} from "angular-notifier";
import {AlertBoxService} from "../../../../alert-box/alert-box.service";

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {

  @ViewChild('vehicleForm', {static: true}) public vehicleForm: NgForm;
  vehicleDetail = {
    vehicleId: '',
    vehicleType: '',
    model: '',
    noOfSeats: '',
    initialMeter: '',
    serviceMeter: '',
    fuelBalance: '',
    fuelConsumption: '',
    occupied: '',
    fuelType: ''
  };
  alertBox = {
    alert: false,
    msg: '',
    value: ''
  };

  vehicle: any;

  constructor(private vehicleDriverManagerService: VehicleDriverManagerService, private router: Router,private notifierService: NotifierService,
              private alertService: AlertBoxService) {
    this.vehicle = this.getNewVehicle();
  }

  ngOnInit(): void {
  }

  OnSubmitVehicle() {
    this.alertBox.alert = true;
    this.alertBox.msg = 'Do you want to add this vehicle?';
    this.alertService.reply.observers = [];
    this.alertService.reply.subscribe(reply => {
      if (reply) {
    // console.log(this.vehicleDetail)
    this.vehicleDriverManagerService.addVehicle(this.vehicleDetail).subscribe((vehicle) => {
      this.setNewForm();
      this.notifierService.notify("success", "Vehicle Detail added successfully");
      // this.router.navigate(['/main/view_vehicles'])
    }, (err) => {
      this.notifierService.notify("error", "Vehicle failed");
    })
      }
      this.alertBox.alert = false;

    })
  }
  setNewForm() {
    this.vehicleForm.resetForm();
  }

  getNewVehicle() {
    return {
      vehicleId: '',
      vehicleType: '',
      model: '',
      noOfSeats: '',
      initialMeter: '',
      serviceMeter: '',
      fuelBalance: '',
      fuelType: '',
      fuelConsumption: '',
      occupied: ''
    };
  }
}
