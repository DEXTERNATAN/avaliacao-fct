import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule }  from '@angular/router';
import { HttpModule }  from '@angular/http';

import { DistribuicaoComponent } from './distribuicao.component';
import { DistribuicaoService } from 'app/distribuicao/distribuicao.service';
import { DistribuicaoFormComponent } from 'app/distribuicao/distribuicao-form/distribuicao-form.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpModule
  ],
  providers: [ DistribuicaoService ],
  declarations: [
    DistribuicaoComponent,
    DistribuicaoFormComponent
  ]
})
export class DistribuicaoModule { }
