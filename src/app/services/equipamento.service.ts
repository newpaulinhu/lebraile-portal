import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Equipamento } from '../models/equipamento';

@Injectable({
  providedIn: 'root'
})
export class EquipamentoService {
  private readonly apiRoot = 'http://localhost:8080/lebraile-web';

  constructor(private httpClient: HttpClient) { }

  cadastrarEquipamento(equipamento: Equipamento): Observable<Equipamento> {
    console.log(equipamento)
    return this.httpClient.post<Equipamento>(`${this.apiRoot}/equipamento`, equipamento);
  }

  removerEquipamento(idEquipamento: number) {
    this.httpClient.delete<any>(`${this.apiRoot}/equipamento/${idEquipamento}`);
  }

  listarEquipamentos(): Observable<Array<Equipamento>> {
    return this.httpClient.get<Array<Equipamento>>(`${this.apiRoot}/equipamento`);
  }
}
