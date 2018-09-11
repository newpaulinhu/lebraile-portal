import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Email } from '../models/email';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private readonly apiRoot = 'https://lebraile-api.herokuapp.com';

  constructor(private httpClient: HttpClient) { }

  enviarEmail(email: Email): Observable<Email> {
    return this.httpClient.post<Email>(`${this.apiRoot}/contato`, email);
  }
}
