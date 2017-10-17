import { Component, OnInit } from '@angular/core';

import { TecnologiaService } from './tecnologia.service';
import { Tecnologia } from './tecnologia.model';

@Component({
  selector: 'mt-tecnologia',
  templateUrl: './tecnologia.component.html',
  styleUrls: ['./tecnologia.component.css']
})
export class TecnologiaComponent implements OnInit {

  private Tecnologia: Tecnologia[];
  constructor(private _tecnologiaService: TecnologiaService) { }

  ngOnInit() {

    this._tecnologiaService.getTecnologia().subscribe(tecnologia => this.Tecnologia = tecnologia)
  }

  deleteTecnologia(tecnologia){
    if (confirm("Tem certeza que quer APAGAR a Tecnologia #" + tecnologia.id_tecnologia + " ?")) {
      var index = this.Tecnologia.indexOf(tecnologia);
      this.Tecnologia.splice(index, 1);

      this._tecnologiaService.deleteTecnologia(tecnologia.id_tecnologia)
        .subscribe(null,
          err => {
            alert("A Tecnologia não foi apagada!");

            // Revert the view back to its original state
            this.Tecnologia.splice(index, 0, tecnologia);
          });
    }
  }
}