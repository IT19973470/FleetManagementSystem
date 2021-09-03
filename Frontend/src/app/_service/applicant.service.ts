import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {HttpClient, HttpClientModule} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApplicantService {

  constructor(private http: HttpClient) { }
  deliveryItem;
  addApp(application): Observable<any> {
    return this.http.post<any>(environment.backend_url + "/application/newapplication", application);
  }
  addPass(passenger): Observable<any> {
    return this.http.post<any>(environment.backend_url + "/application/newapplication", passenger);
  }
  addItem(item): Observable<any> {
    return this.http.post<any>(environment.backend_url + "/application/AddItem", item);
  }
  getAllApplication(): Observable<any> {
    return this.http.get<any>(environment.backend_url + "/application/getApplication");
  }
  updateform(application): Observable<any> {
    return this.http.put<any>(environment.backend_url + "/application/updateApplication/" + application.applicationID, application);
  }
  deleteForm(applicationID): Observable<any> {
    return this.http.delete<any>(environment.backend_url + "/application/deleteApplication/" + applicationID);
  }

}
