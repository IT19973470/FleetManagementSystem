import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {DatePipe} from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class GeneralManagerService {

  userAccount;
  tvProgram;
  deliveryItem;

  constructor(private http: HttpClient, private datePipe: DatePipe) {
  }

  getCurDate() {
    return this.datePipe.transform(new Date(), 'yyyy-MM-dd')
  }

  //
  // constructor(private http: HttpClient) {
  //
  // }

  addTransportManagerUserAccount(userAccount): Observable<any> {
    return this.http.post<any>(environment.backend_url + "/userAccount/addTransportManagerUserAccount", userAccount);
  }

  addBookingManagementClerkUserAccount(userAccount): Observable<any> {
    return this.http.post<any>(environment.backend_url + "/userAccount/addBookingManagementClerkUserAccount", userAccount);
  }

  addVehicleDiverManagementClerkUserAccount(userAccount): Observable<any> {
    return this.http.post<any>(environment.backend_url + "/userAccount/addVehicleDiverManagementClerkUserAccount", userAccount);
  }

  addAccidentMaintenanceManagerUserAccount(userAccount): Observable<any> {
    return this.http.post<any>(environment.backend_url + "/userAccount/addAccidentMaintenanceManagerUserAccount", userAccount);
  }

  addSecurityOfficerUserAccount(userAccount): Observable<any> {
    return this.http.post<any>(environment.backend_url + "/userAccount/addSecurityOfficerUserAccount", userAccount);
  }

  getUserAccounts(): Observable<any> {
    return this.http.get<any>(environment.backend_url + "/userAccount/getUserAccounts");
  }

  getUserAccountsForApplicants(): Observable<any> {
    return this.http.get<any>(environment.backend_url + "/userAccount/getUserAccountsForApplicants");
  }

  approveUserAccount(employeeId, approval): Observable<any> {
    return this.http.get<any>(environment.backend_url + "/userAccount/approveUserAccount/" + employeeId + "/" + approval);
  }

  approveTransport(applicationId, approval): Observable<any> {
    return this.http.get<any>(environment.backend_url + "/userAccount/approveTransport/" + applicationId + "/" + approval);
  }

  updateUserAccount(userAccount): Observable<any> {
    return this.http.put<any>(environment.backend_url + "/userAccount/updateUserAccount/" + userAccount.employeeID, userAccount);
  }

  getUserAccountByID(employeeID): Observable<any> {
    return this.http.get<any>(environment.backend_url + "/userAccount/getUserAccountByID/" + employeeID);
  }

  getTransportByID(applicationID): Observable<any> {
    return this.http.get<any>(environment.backend_url + "/userAccount/getTransportByID/" + applicationID);
  }

  // getAllTransports(): Observable<any> {
  //   return this.http.get<any>(environment.backend_url + "/userAccount/getAllTransports");
  // }

  addTVProgram(tvProgram): Observable<any> {
    return this.http.post<any>(environment.backend_url + "/tvProgram/addTVProgram", tvProgram);
  }


  getTvProgram(): Observable<any> {
    return this.http.get<any>(environment.backend_url + "/tvProgram/getTvProgram");
  }

  updateTVProgram(tvProgram): Observable<any> {
    return this.http.put<any>(environment.backend_url + "/tvProgram/updateTVProgram/" + tvProgram.programID, tvProgram);
  }

  deleteTVProgram(programID): Observable<any> {
    return this.http.delete<any>(environment.backend_url + "/tvProgram/deleteTVProgram/" + programID);
  }


  getAllApplication(): Observable<any> {
    return this.http.get<any>(environment.backend_url + "/application/getApplication");
  }

  getTransportApplication(): Observable<any> {
    return this.http.get<any>(environment.backend_url + "/userAccount/getTransportApplication");
  }


}

