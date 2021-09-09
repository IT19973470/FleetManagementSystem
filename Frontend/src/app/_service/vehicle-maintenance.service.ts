import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class VehicleMaintenanceService {

  maintenance;

  constructor(private http: HttpClient) { }

  addMaintenance(maintenanceDetail): Observable<any> {
    return this.http.post<any>(environment.backend_url + "/maintenance/addVehicleMaintenance", maintenanceDetail);
  }

  chkVehicle(vehicleId): Observable<any> {
    return this.http.get<any>(environment.backend_url + "/accident/chkVehicle/" + vehicleId);
  }

  getVehicleMaintenance(): Observable<any> {
    return this.http.get<any>(environment.backend_url + "/accident/getVehicleMaintenance");
  }
}
