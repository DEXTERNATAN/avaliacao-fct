import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { Subject } from 'rxjs/Rx';

import { AtributoService } from './atributo.service';
import { Atributo } from './atributo.model';

@Component({
  selector: 'mt-atributo',
  templateUrl: './atributo.component.html',
  styleUrls: ['./atributo.component.css']
})
export class AtributoComponent implements OnInit {

  private Atributo: Atributo[] = [];
  atributoCarregada: boolean = true;
  dtOptions: DataTables.Settings = {};

  // We use this trigger because fetching the list of persons can be quite long,
  // thus we ensure the data is fetched before rendering
  dtTrigger: Subject<Atributo> = new Subject();

  constructor( private _atributoService: AtributoService) { }

  ngOnInit() {
    // Configurações do datatable
     this.dtOptions = {
      //pagingType: 'full_numbers'
      //searching: true
    };

      this._atributoService.getAtributo()
      .subscribe(atributo => {
        this.Atributo = atributo
        this.atributoCarregada = false;
        // Calling the DT trigger to manually render the table
        this.dtTrigger.next();
    });
  }

  deleteAtributo(atributo) {
    if (confirm("Tem certeza que quer APAGAR o Atributo #" + atributo.idAtributo + "?")) {
      var index = this.Atributo.indexOf(atributo);
      this.Atributo.splice(index, 1);

      this._atributoService.deleteAtributo(atributo.idAtributo)
        .subscribe(null,
        err => {
          alert("Não foi possível apagar o Atributo!");
          this.Atributo.splice(index, 0, atributo);
        });
    }
  }
}