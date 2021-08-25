import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {HttpClient, HttpClientModule} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GeneralManagerService {

  constructor(private http: HttpClient) {

  }
  addTransportManagerUserAccount(userAccount): Observable<any> {
    return this.http.post<any>(environment.backend_url + "/userAccount/addTransportManagerUserAccount", userAccount);
  }
  addBookingManagementClerkUserAccount(userAccount): Observable<any> {
    return this.http.post<any>(environment.backend_url + "/userAccount/addBookingManagementClerkUserAccount", userAccount);
  }

  addVehicleDiverManagementClerkUserAccount(userAccount): Observable<any> {
    return this.http.post<any>(environment.backend_url + "/userAccount/addVehicleDiverManagementClerkUserAccount", userAccount);
  }

}
