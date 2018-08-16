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
  MatSnackBarModule
 } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NguCarouselModule } from '@ngu/carousel';
import { SharedModule } from '../../shared/shared.module';
import { AcaoRoutes } from "./acao.routing";

import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { WINDOW_PROVIDERS } from '../../shared/helpers/window.helper';
import { TradutoraComponent } from './tradutora/tradutora.component';


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
    MatListModule,
    MatRippleModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    FlexLayoutModule,
    NguCarouselModule,
    RouterModule.forChild(AcaoRoutes)
  ],
  declarations: [
    HeaderComponent, 
    FooterComponent, 
    TradutoraComponent
  ],
  providers: [WINDOW_PROVIDERS]

})
export class AcaoModule { }
