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
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { ItemDeliveryComponent } from './main/content/transport-manager/item-delivery/item-delivery.component';
import { ViewItemDeliveryComponent } from './main/content/transport-manager/view-item-delivery/view-item-delivery.component';
import { NavTransportManagerComponent } from './main/navbar/nav-transport-manager/nav-transport-manager.component';

import { NavApplicantComponent } from './main/navbar/nav-applicant/nav-applicant.component';
import { ApplicationStatusComponent } from './main/content/applicant/application-status/application-status.component';
import { FeedbackComponent } from './main/content/applicant/feedback/feedback.component';
import { NotificationsComponent } from './main/content/applicant/notifications/notifications.component';
import { CreateNewRequestComponent } from './main/content/applicant/create-new-request/create-new-request.component';

import { ViewPassengerDeliveryComponent } from './main/content/transport-manager/view-passenger-delivery/view-passenger-delivery.component';
import { PassengerDeliveryComponent } from './main/content/transport-manager/passenger-delivery/passenger-delivery.component';


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
    ItemDeliveryComponent,
    ViewItemDeliveryComponent,

    ViewPersonDeliveryComponent,
    NavTransportManagerComponent,
    NavApplicantComponent,
    ApplicationStatusComponent,
    FeedbackComponent,
    NotificationsComponent,
    CreateNewRequestComponent

    NavTransportManagerComponent,
    ViewPassengerDeliveryComponent,
    PassengerDeliveryComponent

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
