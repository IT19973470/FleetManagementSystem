import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class VehicleAccidentService {

  deliveryItem;
  deliveryPassenger;

  constructor(private http: HttpClient) { }

  addAccident(accident): Observable<any> {
    return this.http.post<any>(environment.backend_url + "/accident/addVehicleAccident", accident);
  }
  addPass
}
