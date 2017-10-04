import { Component, OnInit } from '@angular/core';
import { DivisaoService } from './divisao.service';
import { Divisao } from './divisao.model';

@Component({
  selector: 'mt-divisao',
  templateUrl: './divisao.component.html',
  styleUrls: ['./divisao.component.css']
})
export class DivisaoComponent implements OnInit {

  private Divisao: Divisao[];

  constructor(private _divisaoService: DivisaoService) { }

  ngOnInit() {
    this._divisaoService.getDivisao().subscribe(divisao => this.Divisao = divisao)
  }

  deleteDivisao(divisao){
    if (confirm("Tem certeza que quer APAGAR a Divisão #" + divisao.id + " - " + divisao.sigla + "?")) {
      var index = this.Divisao.indexOf(divisao);
      this.Divisao.splice(index, 1);

      this._divisaoService.deleteDivisao(divisao.id)
        .subscribe(null,
          err => {
            alert("Não foi possível apagar a Divisão!");
            // Revert the view back to its original state
            this.Divisao.splice(index, 0, divisao);
          });
    }

    console.log('Divisao', divisao)
  }

}
