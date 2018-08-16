import { Routes } from '@angular/router';

export const rootRouterConfig: Routes = [
  { 
    path: '**', 
    loadChildren: './views/home/home.module#HomeModule'
  }
];

