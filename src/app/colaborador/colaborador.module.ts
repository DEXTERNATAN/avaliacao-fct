import { TelPipe } from './../shared/pipes/custom-pipes.pipes';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule }  from '@angular/router';
import { HttpModule }  from '@angular/http';
import { TextMaskModule } from 'angular2-text-mask';
import { DataTablesModule } from 'angular-datatables';
import { CurrencyMaskModule } from "ng2-currency-mask";
import { ColaboradorComponent } from './colaborador.component';
import { ColaboradorService } from 'app/colaborador/colaborador.service';
import { ColaboradorFormComponent } from './colaborador-form/colaborador-form.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpModule,
    DataTablesModule,
    TextMaskModule,
    CurrencyMaskModule
  ],
  providers: [ ColaboradorService ],
  declarations: [
    ColaboradorComponent,
    ColaboradorFormComponent,
    TelPipe
  ]
})
export class ColaboradorModule { }
