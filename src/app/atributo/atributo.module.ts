import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule }  from '@angular/router';
import { HttpModule }  from '@angular/http';

import { FilterPipe } from './../shared/pipes/filter';

import { DataTablesModule } from 'angular-datatables';
import { AtributoComponent } from './atributo.component';
import { AtributoService } from 'app/atributo/atributo.service';
import { AtributoFormComponent } from './atributo-form/atributo-form.component';
import { LoaderService } from 'app/shared/services/loader.service';
import { MensagensHandler } from 'app/shared/services/mensagens-handler.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpModule,
    DataTablesModule
  ],
  providers: [ AtributoService, LoaderService, MensagensHandler ],
  declarations: [
    AtributoComponent,
    AtributoFormComponent,
    FilterPipe
  ]
})
export class AtributoModule { }
