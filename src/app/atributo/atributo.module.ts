import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule }  from '@angular/router';
import { HttpModule }  from '@angular/http';

import { DataTablesModule } from 'angular-datatables';

import { AtributoComponent } from './atributo.component';
import { AtributoService } from 'app/atributo/atributo.service';
import { AtributoFormComponent } from './atributo-form/atributo-form.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpModule,
    DataTablesModule
  ],
  providers: [ AtributoService ],
  declarations: [
    AtributoComponent,
    AtributoFormComponent
  ]
})
export class AtributoModule { }
