import { ReferenciaService } from 'app/referencia/referencia.service';
import { Component, OnInit } from '@angular/core';

import { Referencia } from './referencia.model';

@Component({
  selector: 'mt-referencia',
  templateUrl: './referencia.component.html',
  styleUrls: ['./referencia.component.css']
})
export class ReferenciaComponent implements OnInit {

  private Referencia: Referencia[];
  constructor(private _referenciaService: ReferenciaService) { }

  ngOnInit() {
    this._referenciaService.getReferencia().subscribe(referencia => this.Referencia = referencia )
  }

  deleteReferencia(referencia){
    if (confirm("Você tem certeza que quer APAGAR a Referência #" + referencia.id + " ?")) {
      var index = this.Referencia.indexOf(referencia);
      this.Referencia.splice(index, 1);

      this._referenciaService.deleteReferencia(referencia.id)
        .subscribe(null,
          err => {
            alert("Não foi possível apagar a Referência!");
            // Revert the view back to its original state
            this.Referencia.splice(index, 0, referencia);
          });
    }
  }
}