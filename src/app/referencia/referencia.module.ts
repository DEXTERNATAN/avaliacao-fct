import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule }  from '@angular/router';
import { HttpModule }  from '@angular/http';

import { ReferenciaComponent } from './referencia.component';
import { ReferenciaService } from 'app/referencia/referencia.service';
import { ReferenciaFormComponent } from 'app/referencia/referencia-form/referencia-form.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpModule
  ],
  providers: [ ReferenciaService ],
  declarations: [
    ReferenciaComponent,
    ReferenciaFormComponent
  ]
})
export class ReferenciaModule { }
