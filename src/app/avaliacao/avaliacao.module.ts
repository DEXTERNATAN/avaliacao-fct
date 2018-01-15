import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule }  from '@angular/router';
import { HttpModule }  from '@angular/http';
import { DataTablesModule } from 'angular-datatables';
import {Ng2SelectizeModule} from 'ng2-selectize';
import {AutoCompleteModule} from 'primeng/components/autocomplete/autocomplete';
import { TextMaskModule } from 'angular2-text-mask';

import { AvaliacaoComponent } from './avaliacao.component';
import { AvaliacaoService } from 'app/avaliacao/avaliacao.service';
import { AtributoColaboradorService } from './AtributoColaborador.service';
import { AvaliacaoFormComponent } from 'app/avaliacao/avaliacao-form/avaliacao-form.component';
import { FilterSearchPipe } from 'app/shared/pipes/filterSearch.pipes';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpModule,
    DataTablesModule,
    AutoCompleteModule,
    Ng2SelectizeModule,
    TextMaskModule
 ],
  providers: [ AvaliacaoService, AtributoColaboradorService ],
  declarations: [
    AvaliacaoComponent,
    AvaliacaoFormComponent,
    FilterSearchPipe
  ]
})
export class AvaliacaoModule { }
