import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule }  from '@angular/router';
import { HttpModule }  from '@angular/http';
import { DataTablesModule } from 'angular-datatables';
import {Ng2SelectizeModule} from 'ng2-selectize';
import {NgSelectizeModule} from 'ng-selectize';
import {AutoCompleteModule} from 'primeng/components/autocomplete/autocomplete';
import { TextMaskModule } from 'angular2-text-mask';
import { ToastrModule } from 'ngx-toastr';

import { AvaliacaoComponent } from './avaliacao.component';
import { AvaliacaoService } from 'app/avaliacao/avaliacao.service';
import { AtributoColaboradorService } from './AtributoColaborador.service';

import { AvaliacaoFormComponent } from 'app/avaliacao/avaliacao-form/avaliacao-form.component';
import { FilterSearchPipe } from 'app/shared/pipes/filterSearch.pipes';


@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpModule,
    DataTablesModule,
    AutoCompleteModule,
    Ng2SelectizeModule,
    NgSelectizeModule,
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
