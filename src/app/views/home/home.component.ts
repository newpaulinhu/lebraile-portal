import { Component, OnInit, OnDestroy } from '@angular/core';
import { LandingFixService } from '../../shared/services/landing-fix.service';

@Component({
  selector: 'app-home',
  template: `<app-header></app-header>
  <app-intro></app-intro>
  <app-portfolio></app-portfolio>
  <app-services [backgroundGray]="true"></app-services>
  <app-testimonials></app-testimonials>
  <app-contact [backgroundGray]="true"></app-contact>
  <app-footer></app-footer>`
})
export class HomeComponent implements OnInit, OnDestroy {
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
