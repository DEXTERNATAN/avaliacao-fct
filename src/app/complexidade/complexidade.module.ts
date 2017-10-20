import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule }  from '@angular/router';
import { HttpModule }  from '@angular/http';

import { DataTablesModule } from 'angular-datatables';

import { ComplexidadeComponent } from './complexidade.component';
import { ComplexidadeFormComponent } from 'app/complexidade/complexidade-form/complexidade-form.component';
import { ComplexidadeService } from 'app/complexidade/complexidade.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpModule,
    DataTablesModule
  ],
  providers: [ ComplexidadeService ],
  declarations: [
    ComplexidadeComponent,
    ComplexidadeFormComponent
  ]
})
export class ComplexidadeModule { }
