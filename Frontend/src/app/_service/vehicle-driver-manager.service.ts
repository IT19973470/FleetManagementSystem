import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class VehicleDriverManagerService {

  constructor(private http: HttpClient) { }

  addVehicle(vehicleDetail): Observable<any> {
    return this.http.post<any>(environment.backend_url + "/delivery/addVehicle", vehicleDetail);
  }
}
