import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {HttpClient, HttpClientModule} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TransportManagerService {

  deliveryItem;

  constructor(private http: HttpClient) {
  }

  addItemDelivery(deliveryDetail): Observable<any> {
    return this.http.post<any>(environment.backend_url + "/delivery/addItemDelivery", deliveryDetail);
  }

  updateItemDelivery(deliveryDetail): Observable<any> {
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

  getAllItemDeliveries(): Observable<any> {
    return this.http.get<any>(environment.backend_url + "/delivery/getAllItemDeliveries");
  }
}
