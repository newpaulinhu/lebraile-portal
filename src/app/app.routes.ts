import { Routes } from '@angular/router';

export const rootRouterConfig: Routes = [
  { 
    path: '', 
    redirectTo: 'home', 
    pathMatch: 'full' 
  },
  { 
    path: 'home', 
    loadChildren: './views/home/home.module#HomeModule'
  },
  { 
    path: 'acao', 
    loadChildren: './views/acao/acao.module#AcaoModule'
  },
  { 
    path: 'montar', 
    loadChildren: './views/montar/montar.module#MontarModule'
  }
];

