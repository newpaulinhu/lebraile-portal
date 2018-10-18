import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { 
  MatIconModule,
  MatCardModule,
  MatMenuModule,
  MatButtonModule,
  MatChipsModule,
  MatListModule,
  MatInputModule,
  MatRippleModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatDialogModule
 } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NguCarouselModule } from '@ngu/carousel';
import { SharedModule } from '../../shared/shared.module';
import { MontarRoutes } from './montar.routing';

import { WINDOW_PROVIDERS } from '../../shared/helpers/window.helper';
import { MontarEquipamentoComponent } from './montar-equipamento/montar-equipamento.component';
import { MontarComponent } from './montar.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    MatIconModule,
    MatCardModule,
    MatMenuModule,
    MatButtonModule,
    MatChipsModule,
    MatInputModule,
    MatDialogModule,
    MatListModule,
    MatRippleModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    FlexLayoutModule,
    NguCarouselModule,
    RouterModule.forChild(MontarRoutes)
  ],
  declarations: [
    MontarComponent,
    MontarEquipamentoComponent
  ],
  providers: [WINDOW_PROVIDERS],
  entryComponents: []

})
export class MontarModule { }
