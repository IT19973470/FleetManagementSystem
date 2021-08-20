import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {ContentComponent} from './main/content/content.component';
import {NavbarComponent} from './main/navbar/navbar.component';
import {MainComponent} from './main/main.component';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {ViewDeliveryComponent} from './main/content/transport-manager/view-delivery/view-delivery.component';
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { ItemDeliveryComponent } from './main/content/transport-manager/item-delivery/item-delivery.component';
import { PersonDeliveryComponent } from './main/content/transport-manager/person-delivery/person-delivery.component';
import { ViewItemDeliveryComponent } from './main/content/transport-manager/view-item-delivery/view-item-delivery.component';
import { ViewPersonDeliveryComponent } from './main/content/transport-manager/view-person-delivery/view-person-delivery.component';
import { NavTransportManagerComponent } from './main/navbar/nav-transport-manager/nav-transport-manager.component';
import { NewDriverComponent } from './main/navbar/new-driver/new-driver.component';
import { DriverRegistrationComponent } from './main/content/Driver/driver-registration/driver-registration.component';
import { OverTimeComponent } from './main/content/Driver/over-time/over-time.component';
import { ShiftDetailsComponent } from './main/content/Driver/shift-details/shift-details.component';
import { FuelUpdateComponent } from './main/content/Driver/fuel-update/fuel-update.component';
import { NewOverTimeComponent } from './main/content/Driver/over-time/new-over-time/new-over-time.component';
import { ViewOverTimeComponent } from './main/content/Driver/over-time/view-over-time/view-over-time.component';
import { DriverAccountComponent } from './main/content/Driver/driver-account/driver-account.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    NavbarComponent,
    MainComponent,
    LoginComponent,
    SignupComponent,
    ViewDeliveryComponent,
    ItemDeliveryComponent,
    PersonDeliveryComponent,
    ViewItemDeliveryComponent,
    ViewPersonDeliveryComponent,
    NavTransportManagerComponent,
    NewDriverComponent,
    DriverRegistrationComponent,
    OverTimeComponent,
    ShiftDetailsComponent,
    FuelUpdateComponent,
    NewOverTimeComponent,
    ViewOverTimeComponent,
    DriverAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
