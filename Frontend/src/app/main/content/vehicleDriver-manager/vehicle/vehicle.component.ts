import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {VehicleDriverManagerService} from "../../../../_service/vehicle-driver-manager.service";
import {Router} from "@angular/router";

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
    vehicleModel: '',
    noOfSeats: '',
    initialMeter: '',
    serviceMeter: '',
    fuelBalance: '',
    fuelConsumption: '',
    occupied:'',
    fuelType:'',
    vehicleVehicleDetails: []
  };

  vehicle: any;
  btnText: any;
  tblIndex



  constructor(private vehicleDriverManagerService:VehicleDriverManagerService, private router: Router) {


    this.vehicle=this.getNewVehicle();
  }

  ngOnInit(): void {
  }

  onSubmit() {
    return false;
  }

  setItem(item: any, i: number) {

  }
  getNewVehicle() {

  }
}
