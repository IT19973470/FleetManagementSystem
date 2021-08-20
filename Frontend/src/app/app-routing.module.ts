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
import {UpdateItemDeliveryComponent} from "./main/content/transport-manager/view-item-delivery/update-item-delivery/update-item-delivery.component";
import {CreateUserAccountComponent} from "./main/content/general-manager/create-user-account/create-user-account.component";
import {AvailableTransportsComponent} from "./main/content/applicant/available-transports/available-transports.component";
import {CreateNewRequestComponent} from "./main/content/applicant/create-new-request/create-new-request.component";


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
      },
      {
        path: 'update_item_delivery',
        component: UpdateItemDeliveryComponent
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
        path: 'create_user_account',
        component: CreateUserAccountComponent
      },
      {
        path: 'available_transports',
        component: AvailableTransportsComponent
      },
      {
        path: 'create_new_request',
        component: CreateNewRequestComponent
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
