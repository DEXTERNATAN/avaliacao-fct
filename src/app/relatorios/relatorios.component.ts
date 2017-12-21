import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'mt-relatorios',
  templateUrl: './relatorios.component.html',
  styleUrls: ['./relatorios.component.css'],
  animations: [
    trigger('avaliacaoState', [
      state('ready', style({ opacity: 1 })),
      transition('void => ready', [
        style({ opacity: 0, transform: 'translate(-30px, -10px)' }),
        animate('300ms 0s ease-in-out')
      ])
    ])
  ]
})
export class RelatoriosComponent implements OnInit {
  
  // Grafico de linha
  type = 'line';
  data = {
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho'],
    datasets: [
      {
        label: 'Colaboradores',
        data: [30, 25, 40, 40, 25, 25, 20],
        backgroundColor: '#d2d6de'
      },
      {
        label: 'Chefias',
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: '#4B94CD'
      }
    ]
  };
  options = {
    responsive: true,
    maintainAspectRatio: false
  };

  // Grafico de pizza
  typePie = 'doughnut';
  dataPie = {
    labels: ["Matheus", "Natan", "Tiago"],
    datasets: [{"label":"",
    data: [ 300, 50, 100],
    backgroundColor:[ "rgb(13, 195, 240)" , "rgb(54, 160, 27)" , "rgb(245, 105, 84)" ]
  }]};

  optionsPie = {
    responsive: true,
    maintainAspectRatio: false,
    cutoutPercentage: 50,
    legend: {
      display: false
    }
  };

  constructor() { }

  ngOnInit() {

  }

}
