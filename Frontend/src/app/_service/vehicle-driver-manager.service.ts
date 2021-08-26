import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class VehicleDriverManagerService {

  vehicle;

  constructor(private http: HttpClient) {
  }

  addVehicle(vehicleDetail): Observable<any> {
    return this.http.post<any>(environment.backend_url + "/vehicle/addVehicle", vehicleDetail);
  }

  updateVehicle(vehicleDetail): Observable<any> {
    return this.http.put<any>(environment.backend_url + "/vehicle/updateVehicle/" + vehicleDetail.vehicleId, vehicleDetail);
  }

  getAllVehicles(): Observable<any> {
    return this.http.get<any>(environment.backend_url + "/vehicle/getAllVehicles");
  }

  getVehicleByNumber(vehicleNumber): Observable<any> {
    return this.http.get<any>(environment.backend_url + "/vehicle/getVehicleByNumber/" + vehicleNumber);
  }
}
