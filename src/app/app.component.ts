import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
//import { select2 } from 'select2';
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
    TextMaskModule
    //select2
  ],
  declarations: []
})
export class MyModule {}