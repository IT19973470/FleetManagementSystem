import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {DatePipe} from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class DriverService {

  ot;
  driver;
  shift;


  constructor(private http: HttpClient, private datePipe: DatePipe) {
  }

  getCurDate() {
    return this.datePipe.transform(new Date(), 'yyyy-MM-dd')
  }

  addDriver(driverDetail): Observable<any> {
    return this.http.post<any>(environment.backend_url + '/driverAccount/addDriver', driverDetail);
  }

  addOT(addOT): Observable<any> {
    return this.http.post(environment.backend_url + '/overTime/addOT', addOT);
  }

  getOT(): Observable<any> {
    return this.http.get<any>(environment.backend_url + '/overTime/getOT');
  }

  getDriver(driverId): Observable<any> {
    return this.http.get<any>(environment.backend_url + '/driverAccount/getDriver/' + driverId);
  }

  updateOT(ot): Observable<any> {
    return this.http.put<any>(environment.backend_url + '/overTime/updateOT/' + ot.overTimeID, ot);
  }

  deleteOT(otID): Observable<any> {
    return this.http.delete<any>(environment.backend_url + '/overTime/deleteOT/' + otID);
  }

  getMyOT(driverID):Observable<any>{
    return this.http.get<any>(environment.backend_url + '/overTime/getOTbyID/' + driverID);
  }

  deleteDriver(driverID) {
    return this.http.delete<any>(environment.backend_url + '/driverAccount/deleteDriver/' + driverID);
  }

  getMyShift(driverID):Observable<any>{
    return this.http.get<any>(environment.backend_url + '/shift/getShiftbyDriverID/' + driverID);
  }

  attencanceMarked(driverID, sAttendance):Observable<any> {
    return this.http.get<any>(environment.backend_url + '/shift/markAttendance/' + driverID + "/" + sAttendance);
  }
}
