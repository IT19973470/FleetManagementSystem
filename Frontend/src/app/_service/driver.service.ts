import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DriverService {

  ot;
  driver;
  shiftDetails;

  constructor(private http: HttpClient) {
  }

  addDriver(driverDetail): Observable<any>{
    return this.http.post<any>(environment.backend_url + '/driverAccount/addDriver', driverDetail);
  }

  addOT(addOT): Observable<any>{
    return this.http.post(environment.backend_url + '/overTime/addOT', addOT);
  }

  getOT(): Observable<any> {
    return this.http.get<any>(environment.backend_url + '/overTime/getOT');
  }

  getDriver(): Observable<any>{
    return this.http.get<any>(environment.backend_url + '/driverAccount/getDriver');
  }

  updateOT(ot): Observable<any> {
    return this.http.put<any>(environment.backend_url + '/overTime/updateOT/' + ot.overTimeID, ot);
  }

  getShift(): Observable<any>{
    return this.http.get(environment.backend_url + '/shift/getShift');
  }
}
