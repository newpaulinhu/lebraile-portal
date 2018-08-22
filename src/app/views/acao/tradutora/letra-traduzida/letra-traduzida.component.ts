import { Component, OnInit, Input } from '@angular/core';
import { Letra } from '../../../../models/letra';

@Component({
  selector: 'app-letra-traduzida',
  templateUrl: './letra-traduzida.component.html',
  styleUrls: ['./letra-traduzida.component.scss']
})
export class LetraTraduzidaComponent implements OnInit {

  @Input()
  private letra: Letra
  
  constructor() { }

  ngOnInit() {
  }

}
