import { ProjetoService } from 'app/projeto/projeto.service';
import { Component, OnInit } from '@angular/core';

import { Projeto } from './projeto.model';

@Component({
  selector: 'mt-projeto',
  templateUrl: './projeto.component.html',
  styleUrls: ['./projeto.component.css']
})
export class ProjetoComponent implements OnInit {

  private Projeto: Projeto[];
  constructor(private _projetoService: ProjetoService) { }

  ngOnInit() {
    this._projetoService.getProjeto().subscribe(projeto => this.Projeto = projeto )
  }

  deleteProjeto(projeto){
    if (confirm("Tem certeza que quer APAGAR o Projeto #" + projeto.id_projeto + " ?")) {
      var index = this.Projeto.indexOf(projeto);
      this.Projeto.splice(index, 1);

      this._projetoService.deleteProjeto(projeto.id_projeto)
        .subscribe(null,
          err => {
            alert("O Projeto não foi apagada!");
            // Revert the view back to its original state
            this.Projeto.splice(index, 0, projeto);
          });
    }
  }
}