import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DatePipe} from "@angular/common";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class BookingManagerService {

  shift;
  booking;

  constructor(private http: HttpClient, private datePipe: DatePipe) {
  }

  getCurDate() {
    return this.datePipe.transform(new Date(), 'yyyy-MM-dd')
  }

  addShift(shiftDetail): Observable<any> {
    return this.http.post<any>(environment.backend_url + "/booking/addDriverShift", shiftDetail);
  }

  updateShift(shiftDetail): Observable<any> {
    return this.http.put<any>(environment.backend_url + "/booking/updateDriverShift/" + shiftDetail.shiftId, shiftDetail);
  }

  deleteDriverShift(shiftId): Observable<any> {
    return this.http.delete<any>(environment.backend_url + "/booking/deleteDriverShift/" + shiftId);
  }

  getDriveVehicles(driverId): Observable<any> {
    return this.http.get<any>(environment.backend_url + "/booking/getDriverVehicles/" + driverId);
  }

  getAllShifts(): Observable<any> {
    return this.http.get<any>(environment.backend_url + "/booking/getDriverShifts");
  }

  getAllShiftsByDriver(driverId): Observable<any> {
    return this.http.get<any>(environment.backend_url + "/booking/getDriverShiftsByDriverId/" + driverId);
  }


  addBooking(BookingDetail): Observable<any> {
    return this.http.post<any>(environment.backend_url + "/booking/addBooking", BookingDetail);
  }

  updateBooking(BookingDetail): Observable<any> {
    return this.http.put<any>(environment.backend_url + "/booking/updateBooking/" + BookingDetail.bookingId, BookingDetail);
  }

  deleteBooking(bookingId): Observable<any> {
    return this.http.delete<any>(environment.backend_url + "/booking/deleteBooking/" + bookingId);
  }

  getAllBookings(): Observable<any> {
    return this.http.get<any>(environment.backend_url + "/booking/getBookings");
  }


}
