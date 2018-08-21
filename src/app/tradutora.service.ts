import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpParams, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TradutoraService {
  private readonly apiRoot = 'http://localhost:8080/lebraile-web/';

  constructor(private httpClient: HttpClient) { }

  traduzirLetra(letra: string): Observable<any> {
    const params = new HttpParams().set('letra', letra);
    return this.httpClient.get<any>(`${this.apiRoot}/tradutora/letra`, {params: params});
  }
}
