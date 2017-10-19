
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule }  from '@angular/router';
import { HttpModule }  from '@angular/http';

import { DataTablesModule } from 'angular-datatables';

import { DivisaoComponent } from './divisao.component';
import { DivisaoService } from 'app/divisao/divisao.service';
import { DivisaoFormComponent } from './divisao-form/divisao-form.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpModule,
    DataTablesModule
  ],
  providers: [ DivisaoService ],
  declarations: [
    DivisaoComponent,
    DivisaoFormComponent
  ]
})
export class DivisaoModule { }
