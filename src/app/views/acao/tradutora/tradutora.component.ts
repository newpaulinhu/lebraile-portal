import { Component, OnInit, Input } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { map } from 'rxjs/operators'
import { TradutoraService } from '../../../services/tradutora.service';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { EquipamentoComponent } from '../equipamento/equipamento.component';
import { ListaEquipamentoComponent } from '../equipamento/lista-equipamento.component';
import { Letra } from '../../../models/letra';
import { EquipamentoService } from '../../../services/equipamento.service';
import { Equipamento } from '../../../models/equipamento';

@Component({
  selector: 'app-tradutora',
  templateUrl: './tradutora.component.html',
  styleUrls: ['./tradutora.component.scss']
})
export class TradutoraComponent implements OnInit {
  @Input('backgroundGray') 
  public backgroundGray;
  
  public letrasTraduzidas = new Array<Letra>();
  private equipamentoLetra = new Map<string, number>();

  constructor(
    private tradutoraService: TradutoraService,
    private equipamentoService: EquipamentoService,
    private dialog: MatDialog) {}

  carregarInclusaoEquipamento(){
    const dialogConfig = new MatDialogConfig();
    this.dialog.open(EquipamentoComponent, dialogConfig);
  }

  listarEquipamentos(){
    const dialogConfig = new MatDialogConfig();
    this.dialog.open(ListaEquipamentoComponent, dialogConfig);
  }
  
  ngOnInit() {
    this.equipamentoService.listarEquipamentos().subscribe( equipamentos => {
      equipamentos.forEach( eqp => {
        this.equipamentoLetra.set(eqp.ip, 0);
        this.registrarIntervaloEquipamento(eqp)
      })
    });
  }

  registrarIntervaloEquipamento(equipamento: Equipamento){
    console.log(`Registrando Evento para Equipamento: ${equipamento.ip} `);
    interval(equipamento.tempoCaractere).pipe(
      map((x) => {
        let ultimaLetraEquipamento = this.equipamentoLetra.get(equipamento.ip);
        let letra = this.letrasTraduzidas[ultimaLetraEquipamento];
        if(letra){
          console.log(`Enviando Letra: ${letra.caractere} Para o Equipamento: ${equipamento.ip} `);
          this.equipamentoLetra.set(equipamento.ip, ultimaLetraEquipamento + 1 );
          
          this.equipamentoService.enviarLetraParaEquipamento(equipamento, letra).subscribe(x => {
            console.log(`Letra Enviada ${x} `);
          });
        }
      })).subscribe();
  }

  traduzir(event) {
    if (new RegExp('^[a-zA-Z\u00C0-\u00FF ]').test(event.target.value)){
      this.tradutoraService.traduzirLetra(event.target.value).subscribe(retornoLetraTraduzida => {
        this.letrasTraduzidas.push(retornoLetraTraduzida);
      });
    }
  }

}
