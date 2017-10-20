import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule }  from '@angular/router';
import { HttpModule }  from '@angular/http';

import { DataTablesModule } from 'angular-datatables';

import { ImpactoComponent } from './impacto.component';
import { ImpactoService } from 'app/impacto/impacto.service';
import { ImpactoFormComponent } from './impacto-form/impacto-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpModule,
    DataTablesModule
  ],
  providers: [ ImpactoService ],
  declarations: [
    ImpactoComponent,
    ImpactoFormComponent
  ]
})
export class ImpactoModule { }
