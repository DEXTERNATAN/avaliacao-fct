import { DistribuicaoService } from 'app/distribuicao/distribuicao.service';
import { Component, OnInit } from '@angular/core';

import { Distribuicao } from './distribuicao.model';

@Component({
  selector: 'mt-distribuicao',
  templateUrl: './distribuicao.component.html',
  styleUrls: ['./distribuicao.component.css']
})
export class DistribuicaoComponent implements OnInit {

  private Distribuicao: Distribuicao[];
  constructor(private _distribuicaoService: DistribuicaoService) { }

  ngOnInit() {
    this._distribuicaoService.getDistribuicao().subscribe(distribuicao => this.Distribuicao = distribuicao )
  }

  deleteDistribuicao(distribuicao){
    if (confirm("Tem certeza que quer APAGAR a Distribuição #" + distribuicao.id_distribuicao + " ?")) {
      var index = this.Distribuicao.indexOf(distribuicao);
      this.Distribuicao.splice(index, 1);

      this._distribuicaoService.deleteDistribuicao(distribuicao.id_distribuicao)
        .subscribe(null,
          err => {
            alert("A Distribuição não foi apagada!");
            // Revert the view back to its original state
            this.Distribuicao.splice(index, 0, distribuicao);
          });
    }
  }
}