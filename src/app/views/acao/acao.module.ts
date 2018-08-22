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
import { AcaoRoutes } from './acao.routing';

import { WINDOW_PROVIDERS } from '../../shared/helpers/window.helper';
import { TradutoraComponent } from './tradutora/tradutora.component';
import { AcaoComponent } from './acao.component';
import { EquipamentoComponent } from './equipamento/equipamento.component';
import { ListaEquipamentoComponent } from './equipamento/lista-equipamento.component';


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
    RouterModule.forChild(AcaoRoutes)
  ],
  declarations: [
    AcaoComponent,
    TradutoraComponent,
    EquipamentoComponent,
    ListaEquipamentoComponent
  ],
  providers: [WINDOW_PROVIDERS],
  entryComponents: [EquipamentoComponent,
    ListaEquipamentoComponent]

})
export class AcaoModule { }
