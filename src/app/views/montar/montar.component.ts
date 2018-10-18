import { Component, OnInit, OnDestroy } from '@angular/core';
import { LandingFixService } from '../../shared/services/landing-fix.service';

@Component({
  selector: 'app-montar',
  template: `
  <app-montar-equipamento></app-montar-equipamento>`
})
export class MontarComponent implements OnInit, OnDestroy {
  
  constructor(
    private fix: LandingFixService
  ) { }
  

  ngOnInit() {
    this.fix.addFix();
  }
  ngOnDestroy() {
    this.fix.removeFix();
  }
}
