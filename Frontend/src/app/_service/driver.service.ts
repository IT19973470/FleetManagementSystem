import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class DriverService {

  constructor(private http: HttpClient) {
  }

  addDriver(driverDetail): Observable<any>{
    return this.http.post<any>(environment.backend_url + "/driverAccount/addDriver", driverDetail)
  }

}
