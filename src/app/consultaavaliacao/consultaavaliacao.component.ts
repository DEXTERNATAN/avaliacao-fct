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
  avaliacao: any[] = [];
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

    this._consultaavaliacaoService.getBuscaDetalhesAvaliacao(this.idAvaliacao).subscribe(
      data => {
        this.avaliacao.push(data);
        // this.tecnologias.push(data['tecnologias'].split(','));
        // console.log(data, typeof(data), typeof(this.avaliacao), data['tecnologias'], this.tecnologias);
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
