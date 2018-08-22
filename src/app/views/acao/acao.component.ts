import { Component, OnInit, OnDestroy } from '@angular/core';
import { LandingFixService } from '../../shared/services/landing-fix.service';

@Component({
  selector: 'app-acao',
  template: `
  <app-tradutora></app-tradutora>`
})
export class AcaoComponent implements OnInit, OnDestroy {
  
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
