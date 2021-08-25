import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {HttpClient, HttpClientModule} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApplicantService {

  constructor(private http: HttpClient) { }

  addApp(application): Observable<any> {
    return this.http.post<any>(environment.backend_url + "/application/newapplication", application);
  }
  addPass(passenger): Observable<any> {
    return this.http.post<any>(environment.backend_url + "/application/newapplication", passenger);
  }
  getAllApplication(): Observable<any> {
    return this.http.get<any>(environment.backend_url + "/application/getApplication");
  }
}
