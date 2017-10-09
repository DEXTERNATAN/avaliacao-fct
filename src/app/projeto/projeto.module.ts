import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule }  from '@angular/router';
import { HttpModule }  from '@angular/http';

import { ProjetoComponent } from './projeto.component';
import { ProjetoService } from 'app/projeto/projeto.service';
import { ProjetoFormComponent } from 'app/projeto/projeto-form/projeto-form.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpModule
  ],
  providers: [ ProjetoService ],
  declarations: [
    ProjetoComponent,
    ProjetoFormComponent
  ]
})
export class ProjetoModule { }
