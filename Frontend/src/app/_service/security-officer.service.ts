import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {DatePipe} from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class SecurityOfficerService {

  token;
  tokenDetail;

  constructor(private http: HttpClient, private datePipe: DatePipe) { }

  getCurDate() {
    return this.datePipe.transform(new Date(), 'yyyy-MM-dd')
  }

  addToken(tokenDetail): Observable<any> {
    return this.http.post<any>(environment.backend_url + "/token/addToken", tokenDetail);
  }

  updateToken(tokenDetail): Observable<any> {
    return this.http.put<any>(environment.backend_url + "/token/updateToken/" + tokenDetail.tokenID, tokenDetail);
  }

  deleteToken(tokenDetailId): Observable<any> {
    return this.http.delete<any>(environment.backend_url + "/token/deleteToken/" + tokenDetailId);
  }

  getAllTokens(): Observable<any> {
      return this.http.get<any>(environment.backend_url + "/token/getAllTokens");
  }

  getTokenByID(tokenIdSearch): Observable<any> {
      return this.http.get<any>(environment.backend_url + "/token/getTokenByID/" + tokenIdSearch);
  }

  addMeterDetail(meterDetail): Observable<any> {
    return this.http.post<any>(environment.backend_url + "/meterDetail/addMeterDetail", meterDetail);
  }
}
