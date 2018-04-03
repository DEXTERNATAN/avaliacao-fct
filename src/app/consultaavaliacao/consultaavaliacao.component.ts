import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ConsultaavaliacaoService } from 'app/consultaavaliacao/consultaavaliacao.service';
import { Consultaavaliacao } from './consultaavaliacao.model';

@Component({
  selector: 'mt-consultaavaliacao',
  templateUrl: './consultaavaliacao.component.html',
  styleUrls: ['./consultaavaliacao.component.css']
})
export class ConsultaavaliacaoComponent implements OnInit {

  idAvaliacao: number;
  avaliacao: Consultaavaliacao[];
  DataAtual: any = new Date().toLocaleDateString();
  tecnologias: any[] = [];

  constructor(
    private _consultaavaliacaoService: ConsultaavaliacaoService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.idAvaliacao = params['id_avaliacao'];
      console.log('Identificador da avaliação: ', this.idAvaliacao);
    });

    this._consultaavaliacaoService.getBuscaDetalhesAvaliacao(this.idAvaliacao).subscribe(data => {
      this.avaliacao = data;
      this.tecnologias.push(data['tecnologias'].split(','));

      console.log(data, typeof(data), typeof(this.avaliacao), data['tecnologias'], this.tecnologias);
    });

  }

  onPrint() {
    window.print();
  }

}
