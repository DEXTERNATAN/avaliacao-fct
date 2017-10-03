import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule }  from '@angular/router';
import { HttpModule }  from '@angular/http';

import { TecnologiaComponent } from './tecnologia.component';
import { TecnologiaService } from 'app/tecnologia/tecnologia.service';
import { TecnologiaFormComponent } from './tecnologia-form/tecnologia-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpModule
  ],
  providers: [ TecnologiaService ],
  declarations: [
    TecnologiaComponent,
    TecnologiaFormComponent
  ]
})
export class TecnologiaModule { }
