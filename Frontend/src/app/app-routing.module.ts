import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {MainComponent} from "./main/main.component";
import {ItemDeliveryComponent} from "./main/content/transport-manager/item-delivery/item-delivery.component";
import {ViewItemDeliveryComponent} from "./main/content/transport-manager/view-item-delivery/view-item-delivery.component";
import {PassengerDeliveryComponent} from "./main/content/transport-manager/passenger-delivery/passenger-delivery.component";
import {ViewPassengerDeliveryComponent} from "./main/content/transport-manager/view-passenger-delivery/view-passenger-delivery.component";

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
