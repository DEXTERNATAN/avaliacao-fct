import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule }  from '@angular/router';
import { HttpModule }  from '@angular/http';
import { TextMaskModule } from 'angular2-text-mask';
import { DataTablesModule } from 'angular-datatables';

import { CalendarModule } from 'primeng/components/calendar/calendar';
import { ChipsModule } from 'primeng/components/chips/chips';
import {AutoCompleteModule} from 'primeng/components/autocomplete/autocomplete';

import { ProjetoComponent } from './projeto.component';
import { ProjetoService } from 'app/projeto/projeto.service';
import { ProjetoFormComponent } from 'app/projeto/projeto-form/projeto-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpModule,
    DataTablesModule,
    TextMaskModule,
    CalendarModule,
    ChipsModule,
    AutoCompleteModule
  ],
  providers: [ ProjetoService ],
  declarations: [
    ProjetoComponent,
    ProjetoFormComponent
  ]
})
export class ProjetoModule { }
