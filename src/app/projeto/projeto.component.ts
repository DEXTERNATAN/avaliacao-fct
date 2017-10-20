import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { Subject } from 'rxjs/Rx';

import { ProjetoService } from 'app/projeto/projeto.service';
import { Projeto } from './projeto.model';

@Component({
  selector: 'mt-projeto',
  templateUrl: './projeto.component.html',
  styleUrls: ['./projeto.component.css']
})
export class ProjetoComponent implements OnInit {

  private Projeto: Projeto[] = [];
  private projetoCarregada: boolean = true;
  dtOptions: DataTables.Settings = {};

  // We use this trigger because fetching the list of persons can be quite long,
  // thus we ensure the data is fetched before rendering
  dtTrigger: Subject<Projeto> = new Subject();

  constructor(private _projetoService: ProjetoService) { }

  ngOnInit() {

  this.dtOptions = {
      //pagingType: 'full_numbers'
      //searching: true
  };

    this._projetoService.getProjeto()
    .subscribe(projeto =>{ 
      this.Projeto = projeto
      this.projetoCarregada = false
      // Calling the DT trigger to manually render the table
      this.dtTrigger.next();
    });
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