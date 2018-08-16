import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acao',
  template: `<app-header></app-header>
  <app-tradutora></app-tradutora>
  <app-footer></app-footer>`
})
export class AcaoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
