import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule }  from '@angular/router';
import { HttpModule }  from '@angular/http';

import { DataTablesModule } from 'angular-datatables';

import { ConsultaavaliacaoComponent } from './consultaavaliacao.component';
import { ConsultaavaliacaoService } from 'app/consultaavaliacao/consultaavaliacao.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpModule,
    DataTablesModule
  ],
  providers: [ ConsultaavaliacaoService ],
  declarations: [
    ConsultaavaliacaoComponent
  ]
})
export class ConsultaavaliacaoModule { }
