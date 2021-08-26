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

  //   onSubmit() {
  //   this.vehicleDriverManagerService.addVehicle(this.vehicleDetail).subscribe((vehicleDetail) => {
  //     this.router.navigate(['/main/vehicle'])
  //
  // }
  OnSubmitVehicle(){
    console.log(this.vehicle)
    this.vehicleDetail.vehicleVehicleDetails.push(this.vehicle);
    this.vehicle=this.getNewVehicle();
    this.vehicleForm.resetForm(this.vehicle);

  }

  setVehicle(vehicle) {
    this.vehicle.vehicleId=vehicle.vehicleId;
    this.vehicle.vehicleType=vehicle.vehicleType;
    this.vehicle.model=vehicle.model;
    this.vehicle.noOfSeats=vehicle.noOfSeats;
    this.vehicle.initialMeter=vehicle.initialMeter;
    this.vehicle.serviceMeter=vehicle.serviceMeter;
    this.vehicle.fuelBalance=vehicle.fuelBalance;
    this.vehicle.fuelType=vehicle.fuelType;
    this.vehicle.fuelConsumption=vehicle.fuelConsumption;
    this.vehicle.occupied=vehicle.occupied;


  }
  setNewVehicle() {
    this.vehicle = this.getNewVehicle();
    this.vehicleForm.resetForm(this.vehicle);
    this.btnText = 'Add';
  }
  getNewVehicle() {
    return{
      vehicleId:'',
      vehicleType:'',
      model:'',
      noOfSeats:'',
      initialMeter:'',
      serviceMeter:'',
      fuelBalance:'',
      fuelType:'',
      fuelConsumption:'',
      occupied:''








    };

  }
}
