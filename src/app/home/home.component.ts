import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition,animate } from '@angular/animations';

@Component({
  selector: 'mt-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('avaliacaoState', [
        state('ready', style({opacity: 1})),
        transition('void => ready', [
          style({opacity: 0, transform: 'translate(-30px, -10px)'}),
          animate('500ms 0s ease-in-out')
        ])
    ])
]
})
export class HomeComponent implements OnInit {

  homeState = 'ready';

  ngOnInit() {}

}
