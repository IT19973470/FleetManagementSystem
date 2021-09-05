import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {MainComponent} from "./main/main.component";
import {ItemDeliveryComponent} from "./main/content/transport-manager/item-delivery/item-delivery.component";
import {ViewItemDeliveryComponent} from "./main/content/transport-manager/view-item-delivery/view-item-delivery.component";

import {PassengerDeliveryComponent} from "./main/content/transport-manager/passenger-delivery/passenger-delivery.component";
import {ViewPassengerDeliveryComponent} from "./main/content/transport-manager/view-passenger-delivery/view-passenger-delivery.component";
import {VehicleComponent} from "./main/content/vehicleDriver-manager/vehicle/vehicle.component";

import {CreateUserAccountComponent} from "./main/content/general-manager/create-user-account/create-user-account.component";
import {AvailableTransportsComponent} from "./main/content/applicant/available-transports/available-transports.component";
import {CreateNewRequestComponent} from "./main/content/applicant/create-new-request/create-new-request.component";
import {VehicleAccidentComponent} from "./main/content/accident-maintenance-manager/vehicle-accident/vehicle-accident.component";
import {VehicleMaintenanceComponent} from "./main/content/accident-maintenance-manager/vehicle-maintenance/vehicle-maintenance.component";
import {VehicleAccidentReportComponent} from "./main/content/accident-maintenance-manager/vehicle-accident-report/vehicle-accident-report.component";
import {VehicleMaintenanceReportComponent} from "./main/content/accident-maintenance-manager/vehicle-maintenance-report/vehicle-maintenance-report.component";

import {ApplicationStatusComponent} from "./main/content/applicant/application-status/application-status.component";

import {UpdatePassengerDeliveryComponent} from "./main/content/transport-manager/view-passenger-delivery/update-passenger-delivery/update-passenger-delivery.component";
import {UpdateItemDeliveryComponent} from "./main/content/transport-manager/view-item-delivery/update-item-delivery/update-item-delivery.component";

import {TokenComponent} from "./main/content/security-officer/token/token.component";
import {ViewVehiclesComponent} from "./main/content/vehicleDriver-manager/view-vehicles/view-vehicles.component";
import {UpdateVehicleComponent} from "./main/content/vehicleDriver-manager/update-vehicle/update-vehicle.component";
import {ArrivalDepartureLogPageComponent} from "./main/content/security-officer/arrival-departure-log-page/arrival-departure-log-page.component";
import {MeterDetailComponent} from "./main/content/security-officer/meter-detail/meter-detail.component";
import {UpdateDetailsComponent} from "./main/content/security-officer/update-details/update-details.component";


const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'main',
    component: MainComponent,
    children: [
      {
        path: 'item_delivery',
        component: ItemDeliveryComponent
      },
      {
        path: 'view_item_delivery',
        component: ViewItemDeliveryComponent
      },
      {
        path: 'passenger_delivery',
        component: PassengerDeliveryComponent
      },
      {
        path: 'view_passenger_delivery',
        component: ViewPassengerDeliveryComponent
      },
      {
        path: 'update_item_delivery',
        component: UpdateItemDeliveryComponent
      },
      {
        path: 'update_passenger_delivery',
        component: UpdatePassengerDeliveryComponent
      },
      {
        path: 'create_user_account',
        component: CreateUserAccountComponent
      },
      {
        path: 'available_transports',
        component: AvailableTransportsComponent
      },
      {
        path: 'application_status',
        component: ApplicationStatusComponent
      },
      {
        path: 'create_new_request',
        component: CreateNewRequestComponent
      },
      {
        path: 'view_accidents',
        component: VehicleAccidentComponent
      },
      {
        path: 'view_maintenance',
        component: VehicleMaintenanceComponent
      },
      {
        path: 'accident_report',
        component: VehicleAccidentReportComponent
      },
      {
        path: 'maintenance_reports',
        component: VehicleMaintenanceReportComponent
      },
      {
        path: 'create_token',
        component: TokenComponent
      },
      {
        path: 'arrival_departure_page',
        component: ArrivalDepartureLogPageComponent
      },
      {
        path: 'add_meter_detail',
        component: MeterDetailComponent
      },
      {
        path: 'update_details',
        component: UpdateDetailsComponent
      },
      {
        path: 'vehicle',
        component: VehicleComponent
      },
      {
        path: 'view_vehicles',
        component: ViewVehiclesComponent
      },
      {
        path: 'update_vehicle',
        component: UpdateVehicleComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
