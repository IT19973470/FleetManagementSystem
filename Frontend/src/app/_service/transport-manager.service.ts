import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {DatePipe} from "@angular/common";

@Injectable({
  providedIn: 'root',
})
export class TransportManagerService {

  deliveryItem;
  deliveryPassenger;

  constructor(private http: HttpClient, private datePipe: DatePipe) {
  }

  getCurDate() {
    return this.datePipe.transform(new Date(), 'yyyy-MM-dd')
  }

  addItemDelivery(deliveryDetail): Observable<any> {
    return this.http.post<any>(environment.backend_url + "/delivery/addItemDelivery", deliveryDetail);
  }

  addPassengerDelivery(deliveryDetail): Observable<any> {
    return this.http.post<any>(environment.backend_url + "/delivery/addPassengerDelivery", deliveryDetail);
  }

  addPassengerItemDelivery(deliveryDetail): Observable<any> {
    return this.http.post<any>(environment.backend_url + "/delivery/addPassengerItemDelivery", deliveryDetail);
  }

  updateDelivery(deliveryDetail): Observable<any> {
    return this.http.put<any>(environment.backend_url + "/delivery/updateDelivery/" + deliveryDetail.deliveryId, deliveryDetail);
  }

  deleteDelivery(deliveryDetailId): Observable<any> {
    return this.http.delete<any>(environment.backend_url + "/delivery/deleteDelivery/" + deliveryDetailId);
  }


  addItemToDelivery(deliveryItem): Observable<any> {
    return this.http.post<any>(environment.backend_url + "/delivery/addItemToDelivery", deliveryItem);
  }

  updateItemOnDelivery(deliveryItem): Observable<any> {
    return this.http.put<any>(environment.backend_url + "/delivery/updateItemOnDelivery/" + deliveryItem.itemDetailId, deliveryItem);
  }

  deleteItemOnDelivery(itemDetailId): Observable<any> {
    return this.http.delete<any>(environment.backend_url + "/delivery/deleteItemOnDelivery/" + itemDetailId);
  }

  addPassengerToDelivery(deliveryPassenger): Observable<any> {
    return this.http.post<any>(environment.backend_url + "/delivery/addPassengerToDelivery", deliveryPassenger);
  }

  updatePassengerOnDelivery(deliveryPassenger): Observable<any> {
    return this.http.put<any>(environment.backend_url + "/delivery/updatePassengerOnDelivery/" + deliveryPassenger.passengerDetailId, deliveryPassenger);
  }

  deletePassengerOnDelivery(itemPassengerId): Observable<any> {
    return this.http.delete<any>(environment.backend_url + "/delivery/deletePassengerOnDelivery/" + itemPassengerId);
  }

  getAllDeliveries(deliveryTpe): Observable<any> {
    return this.http.get<any>(environment.backend_url + "/delivery/getAllDeliveries/" + deliveryTpe);
  }

  getAllDeliveriesByDate(deliveryTpe, deliveryDate): Observable<any> {
    return this.http.get<any>(environment.backend_url + "/delivery/getAllDeliveriesByDate/" + deliveryTpe + "/" + deliveryDate);
  }

  getAllDeliveriesByCompany(deliveryTpe, company): Observable<any> {
    return this.http.get<any>(environment.backend_url + "/delivery/getAllDeliveriesByCompany/" + deliveryTpe + "/" + company);
  }

  // getAllPassengerDeliveries(): Observable<any> {
  //   return this.http.get<any>(environment.backend_url + "/delivery/getAllPassengerDeliveries");
  // }
}
