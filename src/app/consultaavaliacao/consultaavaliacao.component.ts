import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ConsultaavaliacaoService } from 'app/consultaavaliacao/consultaavaliacao.service';

@Component({
  selector: 'mt-consultaavaliacao',
  templateUrl: './consultaavaliacao.component.html',
  styleUrls: ['./consultaavaliacao.component.css']
})
export class ConsultaavaliacaoComponent implements OnInit {

  idAvaliacao: number;
  avaliacao: any[] = [];
  DataAtual: any = new Date().toLocaleDateString();
  tecnologias: any[] = [];
  atributos: any[] = [];
  projetos: any[] = [];

  constructor(
    private _consultaavaliacaoService: ConsultaavaliacaoService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.idAvaliacao = params['id_avaliacao'];
      console.log('Identificador da avaliação: ', this.idAvaliacao);
    });

    this._consultaavaliacaoService.getBuscaDetalhesAvaliacao(this.idAvaliacao).subscribe(
      data => {
        this.avaliacao.push(data);
      },
      error=> {
        console.log('error: ', error);
      }
    );
  }

  onPrint() {
    window.print();
  }
}
