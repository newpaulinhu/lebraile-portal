import { Routes } from '@angular/router';

import { AcaoComponent } from './acao.component'

export const AcaoRoutes: Routes = [
  { path: '**', component: AcaoComponent }
];