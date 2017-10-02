import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule }  from '@angular/router';
import { HttpModule }  from '@angular/http';

import { PapelComponent } from './papel.component';
import { PapelService } from 'app/papel/papel.service';
import { PapelFormComponent } from './papel-form/papel-form.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpModule
  ],
  providers: [ PapelService ],
  declarations: [
    PapelComponent,
    PapelFormComponent
  ]
})
export class PapelModule { }
