import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class VehicleAccidentService {


  accident;

  constructor(private http: HttpClient) { }

  addAccident(accidentDetail): Observable<any> {
    return this.http.post<any>(environment.backend_url + "/accident/addVehicleAccident", accidentDetail);
  }

  getVehicleAccidents(): Observable<any> {
    return this.http.get<any>(environment.backend_url + "/accident/getVehicleAccidents");
  }

  updateVehicleAccident(accidentDetail): Observable<any> {
    return this.http.put<any>(environment.backend_url + "/accident/updateVehicleAccident/" + accidentDetail.vehicleAccidentID, accidentDetail);
  }
}
