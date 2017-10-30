import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule }  from '@angular/router';
import { HttpModule }  from '@angular/http';

import { DataTablesModule } from 'angular-datatables';

import { FaixaComponent } from './faixa.component';
import { FaixaService } from 'app/faixa/faixa.service';
import { FaixaFormComponent } from 'app/faixa/faixa-form/faixa-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpModule,
    DataTablesModule
  ],
  providers: [ FaixaService ],
  declarations: [
    FaixaComponent,
    FaixaFormComponent
  ]
})
export class FaixaModule { }
