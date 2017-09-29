import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule }  from '@angular/router';
import { HttpModule }  from '@angular/http';

import { AbrangenciaComponent } from './abrangencia.component';
import { AbrangenciaService } from 'app/abrangencia/abrangencia.service';
import { AbrangenciaFormComponent } from 'app/abrangencia/abrangencia-form/abrangencia-form.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpModule
  ],
  providers: [ AbrangenciaService ],
  declarations: [
    AbrangenciaComponent,
    AbrangenciaFormComponent
  ]
})
export class AbrangenciaModule { }
