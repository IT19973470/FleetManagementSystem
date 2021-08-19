import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {ManageDeliveryComponent} from "./main/content/transport-manager/manage-delivery/manage-delivery.component";
import {MainComponent} from "./main/main.component";
import {ViewDeliveryComponent} from "./main/content/transport-manager/view-delivery/view-delivery.component";

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
        path: 'manage_delivery',
        component: ManageDeliveryComponent
      },
      {
        path: 'view_delivery',
        component: ViewDeliveryComponent
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
