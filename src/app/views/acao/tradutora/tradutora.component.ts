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
import { equalParamsAndUrlSegments } from '../../../../../node_modules/@angular/router/src/router_state';

@Component({
  selector: 'app-tradutora',
  templateUrl: './tradutora.component.html',
  styleUrls: ['./tradutora.component.scss']
})
export class TradutoraComponent implements OnInit {
  @Input('backgroundGray') public backgroundGray;
  private sub: Subscription;
  private letras = new Array<string>();
  public letrasTraduzidas = new Array<Letra>();
  private ultimaLetra: number = 0;

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
        this.registrarIntervaloEquipamento(eqp)
      })
    });

  }
  
  registrarIntervaloEquipamento(equipamento: Equipamento){
    interval(equipamento.tempoCaractere).pipe(
      map((x) => {
        let letra = this.letras[this.ultimaLetra];
        if(letra){
          this.tradutoraService.traduzirLetra(letra).subscribe(retornoLetraTraduzida => {
            this.letrasTraduzidas.push(retornoLetraTraduzida);
            this.equipamentoService.enviarLetraParaEquipamento(equipamento, retornoLetraTraduzida);
            this.ultimaLetra++; 
          });
        }
      })).subscribe();
  }

  traduzir(event) {
    if (new RegExp('^[a-zA-Z\u00C0-\u00FF ]').test(event.key)){
      this.letras.push(event.key)
    }
  }

}
