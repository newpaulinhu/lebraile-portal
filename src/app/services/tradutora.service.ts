import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpParams, HttpClient } from '@angular/common/http';
import { Letra } from '../models/letra';

@Injectable({
  providedIn: 'root'
})
export class TradutoraService {
  private readonly apiRoot = 'https://lebraile-api.herokuapp.com/lebraile-web';

  constructor(private httpClient: HttpClient) { }

  traduzirLetra(letra: string): Observable<Letra> {
    const params = new HttpParams().set('letra', letra);
    return this.httpClient.get<Letra>(`${this.apiRoot}/tradutora/letra`, {params: params});
  }
}
