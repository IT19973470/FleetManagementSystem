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
import { ViewPassengerDeliveryComponent } from './main/content/transport-manager/view-passenger-delivery/view-passenger-delivery.component';
import { PassengerDeliveryComponent } from './main/content/transport-manager/passenger-delivery/passenger-delivery.component';
import { NavVehicleDriverManagerComponent } from './main/navbar/nav-vehicle-driver-manager/nav-vehicle-driver-manager.component';
import { VehicleComponent } from './main/content/vehicleDriver-manager/vehicle/vehicle.component';
import {UpdateItemDeliveryComponent} from './main/content/transport-manager/view-item-delivery/update-item-delivery/update-item-delivery.component';
import {NavGeneralManagerComponent} from './main/navbar/nav-general-manager/nav-general-manager.component';
import {CreateUserAccountComponent} from './main/content/general-manager/create-user-account/create-user-account.component';
import {UserAccountListComponent} from './main/content/general-manager/user-account-list/user-account-list.component';
import {AccountRequestsComponent} from './main/content/general-manager/account-requests/account-requests.component';
import {TransportRequestsComponent} from './main/content/general-manager/transport-requests/transport-requests.component';
import {NavApplicantComponent} from './main/navbar/nav-applicant/nav-applicant.component';
import {AvailableTransportsComponent} from './main/content/applicant/available-transports/available-transports.component';
import {CreateNewRequestComponent} from './main/content/applicant/create-new-request/create-new-request.component';
import {ApplicationStatusComponent} from './main/content/applicant/application-status/application-status.component';
import {NotificationsComponent} from './main/content/applicant/notifications/notifications.component';
import {FeedbackComponent} from './main/content/applicant/feedback/feedback.component';
import {NavAccidentMaintenanceManagerComponent} from './main/navbar/nav-accident-maintenance-manager/nav-accident-maintenance-manager.component';
//import { VehcleAccdentComponent } from './vehcle-accdent/vehcle-accdent.component';
import {VehicleAccidentComponent} from './main/content/accident-maintenance-manager/vehicle-accident/vehicle-accident.component';
import {VehicleMaintenanceComponent} from './main/content/accident-maintenance-manager/vehicle-maintenance/vehicle-maintenance.component';
import {VehicleAccidentReportComponent} from './main/content/accident-maintenance-manager/vehicle-accident-report/vehicle-accident-report.component';
import {VehicleMaintenanceReportComponent} from './main/content/accident-maintenance-manager/vehicle-maintenance-report/vehicle-maintenance-report.component';
import {NavDriverComponent} from "./main/navbar/nav-driver/nav-driver.component";
import {DriverRegistrationComponent} from "./main/content/Driver/driver-registration/driver-registration.component";
import {OverTimeComponent} from "./main/content/Driver/over-time/over-time.component";
import {ShiftDetailsComponent} from "./main/content/Driver/shift-details/shift-details.component";
import {FuelUpdateComponent} from "./main/content/Driver/fuel-update/fuel-update.component";
import {NewOverTimeComponent} from "./main/content/Driver/over-time/new-over-time/new-over-time.component";
import {DriverAccountComponent} from "./main/content/Driver/driver-account/driver-account.component";
import {ViewOverTimeComponent} from "./main/content/Driver/over-time/view-over-time/view-over-time.component";

import { NavSecurityOfficerComponent } from './main/navbar/nav-security-officer/nav-security-officer.component';
import { TokenComponent } from './main/content/security-officer/token/token.component';

import {UpdatePassengerDeliveryComponent} from "./main/content/transport-manager/view-passenger-delivery/update-passenger-delivery/update-passenger-delivery.component";
import {DatePipe} from "@angular/common";
import { ViewVehiclesComponent } from './main/content/vehicleDriver-manager/view-vehicles/view-vehicles.component';
import { UpdateVehicleComponent } from './main/content/vehicleDriver-manager/update-vehicle/update-vehicle.component';
import { VipmemberComponent } from './main/content/vehicleDriver-manager/vipmember/vipmember.component';
import { ViewVipmembersComponent } from './main/content/vehicleDriver-manager/view-vipmembers/view-vipmembers.component';
import { UpdateVipmemberComponent } from './main/content/vehicleDriver-manager/update-vipmember/update-vipmember.component';


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
    NavTransportManagerComponent,
    NavDriverComponent,
    DriverRegistrationComponent,
    OverTimeComponent,
    ShiftDetailsComponent,
    FuelUpdateComponent,
    NewOverTimeComponent,
    ViewOverTimeComponent,
    DriverAccountComponent,
    ViewPassengerDeliveryComponent,
    PassengerDeliveryComponent,
    NavVehicleDriverManagerComponent,
    VehicleComponent,
    UpdateItemDeliveryComponent,
    UpdatePassengerDeliveryComponent,
    NavGeneralManagerComponent,
    CreateUserAccountComponent,
    UserAccountListComponent,
    AccountRequestsComponent,
    TransportRequestsComponent,
    NavApplicantComponent,
    AvailableTransportsComponent,
    CreateNewRequestComponent,
    ApplicationStatusComponent,
    NotificationsComponent,
    FeedbackComponent,
    NavAccidentMaintenanceManagerComponent,
    //VehcleAccdentComponent,
    VehicleAccidentComponent,
    VehicleMaintenanceComponent,
    VehicleAccidentReportComponent,
    VehicleMaintenanceReportComponent,
    NavSecurityOfficerComponent,
    TokenComponent,
    ViewVehiclesComponent,
    UpdateVehicleComponent,
    VipmemberComponent,
    ViewVipmembersComponent,
    UpdateVipmemberComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule {
}
