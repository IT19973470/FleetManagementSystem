import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {HttpClient, HttpClientModule} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GeneralManagerService {

  userAccount;

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

  addAccidentMaintenanceManagerUserAccount(userAccount): Observable<any>{
    return this.http.post<any>(environment.backend_url + "/userAccount/addAccidentMaintenanceManagerUserAccount", userAccount);
  }

  addSecurityOfficerUserAccount(userAccount): Observable<any>{
    return this.http.post<any>(environment.backend_url + "/userAccount/addSecurityOfficerUserAccount", userAccount);
  }

  getUserAccounts(): Observable<any> {
    return this.http.get<any>(environment.backend_url + "/userAccount/getUserAccounts");
  }

  updateUserAccount(userAccount): Observable<any> {
    return this.http.put<any>(environment.backend_url + "/userAccount/updateUserAccount/" + userAccount.employeeID, userAccount);
  }

  getUserAccountByID(employeeID): Observable<any> {
    return this.http.get<any>(environment.backend_url + "/vehicle/getVehicleByNumber/" + employeeID);
  }

}
