import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {MainComponent} from "./main/main.component";
import {ItemDeliveryComponent} from "./main/content/transport-manager/item-delivery/item-delivery.component";
import {ViewItemDeliveryComponent} from "./main/content/transport-manager/view-item-delivery/view-item-delivery.component";
import {DriverAccountComponent} from "./main/content/Driver/driver-account/driver-account.component";
import {DriverRegistrationComponent} from "./main/content/Driver/driver-registration/driver-registration.component";
import {FuelUpdateComponent} from "./main/content/Driver/fuel-update/fuel-update.component";
import {OverTimeComponent} from "./main/content/Driver/over-time/over-time.component";
import {ShiftDetailsComponent} from "./main/content/Driver/shift-details/shift-details.component";
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
        path: 'driver_account',
        component: DriverAccountComponent
      },
      {
        path: 'driver_registration',
        component: DriverRegistrationComponent
      },
      {
        path: 'fuel_update',
        component: FuelUpdateComponent
      },
      {
        path: 'over_time',
        component: OverTimeComponent
      },
      {
        path: 'shift_details',
        component: ShiftDetailsComponent
      }
	  {
        path: 'create_token',
        component: TokenComponent
      },
    ]
  },
  {
    path: 'main',
    component: MainComponent,
    children: [
      {
        path: 'vehicle',
        component: VehicleComponent
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
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
