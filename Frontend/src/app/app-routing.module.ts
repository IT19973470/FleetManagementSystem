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
        component:DriverRegistrationComponent
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
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
