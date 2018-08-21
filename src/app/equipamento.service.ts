import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EquipamentoService {
  private readonly apiRoot = 'http://localhost:8080/lebraile-web/';

  constructor(private httpClient: HttpClient) { }

  cadastrarEquipamento(equipamento: any): Observable<any> {
    return this.httpClient.post<any>(`${this.apiRoot}/equipamento`, equipamento);
  }

  removerEquipamento(idEquipamento: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.apiRoot}/equipamento/${idEquipamento}`);
  }

  listarEquipamentos(): Observable<any> {
    return this.httpClient.get<any>(`${this.apiRoot}/equipamento`);
  }
}
