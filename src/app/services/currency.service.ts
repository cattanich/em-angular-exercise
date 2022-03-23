import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";
import { pais_lista } from "../modules/currency/currency-format/country-currency";

@Injectable({
  providedIn: "root",
})
export class CurrencyApiService {
  public readonly apiUrl = environment.apiUrl;
  public readonly KEY = environment.API_KEY;
  private readonly pais_lista: any[] = pais_lista;
  httpHeaders = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      "X-API-KEY": this.KEY,
    }),
  };

  constructor(public http: HttpClient) {}

  getPaises () {
    return this.pais_lista;
}

  getCurrencies() {
    const url = this.apiUrl + `currency-format/`;
    return this.http.get(url, this.httpHeaders).toPromise();
  }

  // --- Add the rest of your CRUD operations here ---
}
