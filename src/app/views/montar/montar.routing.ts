import { Routes } from '@angular/router';

import { MontarComponent } from './montar.component'

export const MontarRoutes: Routes = [
  { path: '', 
    component: MontarComponent, 
    pathMatch: 'full' 
  }
];