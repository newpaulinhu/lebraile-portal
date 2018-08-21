import { Component, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { map } from 'rxjs/operators'
import { TradutoraService } from '../../../tradutora.service';

@Component({
  selector: 'app-tradutora',
  templateUrl: './tradutora.component.html',
  styleUrls: ['./tradutora.component.scss']
})
export class TradutoraComponent implements OnInit {

  private sub: Subscription;
  private letras = new Array<string>();
  private ultimaLetra: number = 0;

  constructor(private tradutoraService: TradutoraService) { 
  }

  ngOnInit() {


    interval(500).pipe(
      map((x) => { 
        let letra = this.letras[this.ultimaLetra];

        if(letra){
          console.log(`Chamando Equipamento... Letra: ${letra}`)
          this.tradutoraService.traduzirLetra(letra).subscribe(ret => {
            console.log(`Chamado Equipamento... Letra: ${ret}`)

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
