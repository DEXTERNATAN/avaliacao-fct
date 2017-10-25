import { CurrencyMaskModule } from 'ng2-currency-mask';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule }  from '@angular/router';
import { HttpModule }  from '@angular/http';
import { TextMaskModule } from 'angular2-text-mask';

import { DataTablesModule } from 'angular-datatables';


import { ReferenciaComponent } from './referencia.component';
import { ReferenciaService } from 'app/referencia/referencia.service';
import { ReferenciaFormComponent } from 'app/referencia/referencia-form/referencia-form.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpModule,
    TextMaskModule,
    DataTablesModule,
    CurrencyMaskModule
  ],
  providers: [ ReferenciaService ],
  declarations: [
    ReferenciaComponent,
    ReferenciaFormComponent
  ]
})
export class ReferenciaModule { }
