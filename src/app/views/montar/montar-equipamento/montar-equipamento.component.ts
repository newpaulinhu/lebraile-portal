import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-montar-equipamento',
  templateUrl: './montar-equipamento.component.html',
  styleUrls: ['./montar-equipamento.component.scss']
})
export class MontarEquipamentoComponent implements OnInit {
  @Input('backgroundGray') public backgroundGray;
  
  constructor() { }

  ngOnInit() {
  }

}
