import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule }  from '@angular/router';
import { HttpModule }  from '@angular/http';

import { DataTablesModule } from 'angular-datatables';

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
    DataTablesModule
  ],
  providers: [ ColaboradorService ],
  declarations: [
    ColaboradorComponent,
    ColaboradorFormComponent
  ]
})
export class ColaboradorModule { }
