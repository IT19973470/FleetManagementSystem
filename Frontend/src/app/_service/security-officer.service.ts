import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {HttpClient, HttpClientModule} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SecurityOfficerService {

  token;

  constructor(private http: HttpClient) { }

  addToken(tokenDetail): Observable<any> {
    return this.http.post<any>(environment.backend_url + "/token/addToken", tokenDetail);
  }

  updateToken(tokenDetail): Observable<any> {
    return this.http.put<any>(environment.backend_url + "/token/updateToken/" + tokenDetail.tokenId, tokenDetail);
  }

  deletetoken(tokenDetailId): Observable<any> {
    return this.http.delete<any>(environment.backend_url + "/token/deleteToken/" + tokenDetailId);
  }

  getAllTokens(): Observable<any> {
      return this.http.get<any>(environment.backend_url + "/token/getAllTokens");
  }

  getTokenByID(tokenIdSearch): Observable<any> {
      return this.http.get<any>(environment.backend_url + "/token/getTokenByID/" + tokenIdSearch);
  }

  OnSubmitMeter(meterDetail): Observable<any> {
    return this.http.post<any>(environment.backend_url + "/meter/addMeterDetail", meterDetail);
  }
  
}
