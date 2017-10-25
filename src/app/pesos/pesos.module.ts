import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule }  from '@angular/router';
import { HttpModule }  from '@angular/http';

import { DataTablesModule } from 'angular-datatables';

import { PesosComponent } from './pesos.component';
import { PesosService } from 'app/pesos/pesos.service';
import { PesosFormComponent } from 'app/pesos/pesos-form/pesos-form.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpModule,
    DataTablesModule
  ],
  providers: [ PesosService ],
  declarations: [
    PesosComponent,
    PesosFormComponent
  ]
})
export class PesosModule { }
