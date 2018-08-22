import { Component, OnInit, Input } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { map } from 'rxjs/operators'
import { TradutoraService } from '../../../services/tradutora.service';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { EquipamentoComponent } from '../equipamento/equipamento.component';
import { ListaEquipamentoComponent } from '../equipamento/lista-equipamento.component';

@Component({
  selector: 'app-tradutora',
  templateUrl: './tradutora.component.html',
  styleUrls: ['./tradutora.component.scss']
})
export class TradutoraComponent implements OnInit {
  @Input('backgroundGray') public backgroundGray;
  private sub: Subscription;
  private letras = new Array<string>();
  private ultimaLetra: number = 0;

  constructor(private tradutoraService: TradutoraService,
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


    interval(500).pipe(
      map((x) => { 
        let letra = this.letras[this.ultimaLetra];

        if(letra){
          console.log(`Chamando Equipamento... Letra: ${letra}`)
          this.tradutoraService.traduzirLetra(letra).subscribe(ret => {
            console.log(ret);

            this.ultimaLetra++; 
          });
        }


        console.log();
      })).subscribe();

  }
  

  traduzir(event) {
    if (new RegExp('^[a-zA-Z\u00C0-\u00FF ]').test(event.key)){
      this.letras.push(event.key)
    }
  }

}
