import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'mt-app',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {

  
  mostrarMenu: boolean = false; 
  content = 'Bem vindo ao Avalia App!';

  ngOnInit() {
  }

}
 
@NgModule({
  imports: [
    FormsModule,
    TextMaskModule
  ],
  declarations: []
})
export class MyModule {}