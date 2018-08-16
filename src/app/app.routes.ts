import { Routes } from '@angular/router';
import { AcaoComponent }   from './views/acao/acao.component';

export const rootRouterConfig: Routes = [
  { 
    path: '', 
    redirectTo: 'home/portal', 
    pathMatch: 'full' 
  },
  { 
    path: '**', 
    loadChildren: './views/home/home.module#HomeModule'
  },
  { 
    path: 'acao/*', 
    loadChildren: './views/acao/acao.module#AcaoModule'
  }
];

