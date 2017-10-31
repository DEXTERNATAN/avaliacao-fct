import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule }  from '@angular/router';
import { HttpModule }  from '@angular/http';
import { DataTablesModule } from 'angular-datatables';

import {AutoCompleteModule} from 'primeng/components/autocomplete/autocomplete';


import { AvaliacaoComponent } from './avaliacao.component';
import { AvaliacaoService } from 'app/avaliacao/avaliacao.service';
import { AvaliacaoFormComponent } from 'app/avaliacao/avaliacao-form/avaliacao-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpModule,
    DataTablesModule,
    AutoCompleteModule
  ],
  providers: [ AvaliacaoService ],
  declarations: [
    AvaliacaoComponent,
    AvaliacaoFormComponent
  ]
})
export class AvaliacaoModule { }
