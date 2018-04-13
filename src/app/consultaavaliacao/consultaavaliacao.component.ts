import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ConsultaavaliacaoService } from 'app/consultaavaliacao/consultaavaliacao.service';
import { LoginService } from 'app/security/login/login.service';
import { User } from 'app/security/login/user';

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
    private route: ActivatedRoute,
    private loginService: LoginService
  ) { }

  ngOnInit() {

    this.user();
    
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

  user(): User {
    return this.loginService.user;
}
  onPrint() {
    window.print();
  }
}
