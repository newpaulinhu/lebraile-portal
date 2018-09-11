import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Equipamento } from '../models/equipamento';
import { Letra } from '../models/letra';

@Injectable({
  providedIn: 'root'
})
export class EquipamentoService {
  private readonly apiRoot = 'https://lebraile-api.herokuapp.com';

  constructor(private httpClient: HttpClient) { }

  cadastrarEquipamento(equipamento: Equipamento): Observable<Equipamento> {
    return this.httpClient.post<Equipamento>(`${this.apiRoot}/equipamento`, equipamento);
  }

  removerEquipamento(idEquipamento: number) {
    this.httpClient.delete<any>(`${this.apiRoot}/equipamento/${idEquipamento}`);
  }

  listarEquipamentos(): Observable<Array<Equipamento>> {
    return this.httpClient.get<Array<Equipamento>>(`${this.apiRoot}/equipamento`);
  }

  enviarLetraParaEquipamento(equipamento: Equipamento, letra: Letra){
    return this.httpClient.get(`http://${equipamento.ip}/braille/?pin=${letra.braile}&tempo=${equipamento.tempoCaractere}`);
  }
}
