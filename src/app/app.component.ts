import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import { Select2Module } from 'ng2-select2';
import {Component, OnInit} from "@angular/core"


@Component({
  selector: 'mt-app',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {

  content = 'Bem vindo ao Avalia App!'

  constructor() { }

  ngOnInit() {
  }

}
 
@NgModule({
  imports: [
    FormsModule,
    TextMaskModule,
    Select2Module
  ],
  declarations: []
})
export class MyModule {}