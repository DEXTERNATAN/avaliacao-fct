import { colaboradorRouting } from './colaborador.routes';
import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { ColaboradorService } from './colaborador.service';
import { ReferenciaService } from './../referencia/referencia.service';
import { DivisaoService } from 'app/divisao/divisao.service';

import { Colaborador } from './colaborador.model';
import { Referencia } from './../referencia/referencia.model';
import { Divisao } from './../divisao/divisao.model';

@Component({
  selector: 'mt-colaborador',
  templateUrl: './colaborador.component.html',
  styleUrls: ['./colaborador.component.css']
})
export class ColaboradorComponent implements OnInit {

  private Colaborador: Colaborador[];
  private Referencia: Referencia = new Referencia();
  public Divisao: Divisao = new Divisao();
  
  constructor(
    private _colaboradorService: ColaboradorService,
    private _divisaoService: DivisaoService,
    private _referenciaService: ReferenciaService
  ) { }

  ngOnInit() {
    this._colaboradorService.getColaborador().subscribe(colaborador =>
    { 
      this.Colaborador = colaborador
      this.getReferenciaFk(colaborador);
      this.getDivisaoFk(colaborador);
      
    });
  }

  getReferenciaFk(colaborador: Colaborador[]){
    colaborador.forEach(colabRef => {
      this._referenciaService.getReferenciaId(colabRef.TB_REFERENCIA_FCT_GFE_id_referencia_fct_gfe).subscribe(resultRef => {
      colabRef.TB_REFERENCIA_FCT_GFE_id_referencia_fct_gfe = resultRef;
      })
    })
  }

  getDivisaoFk(colaborador: Colaborador[]){
    colaborador.forEach(colab => {
      this._divisaoService.getDivisaoId(colab.TB_DIVISAO_id_divisao).subscribe(result => {
      colab.TB_DIVISAO_id_divisao = result;
      })
    })
  }

  deleteColaborador(colaborador) {
    if (confirm("Tem certeza que quer APAGAR o Colaborador #" + colaborador.id_colaborador + " - " + colaborador.nome + "?")) {
      var index = this.Colaborador.indexOf(colaborador);
      this.Colaborador.splice(index, 1);

      this._colaboradorService.deleteColaborador(colaborador.id_colaborador)
        .subscribe(null,
        err => {
          alert("Não foi possível apagar o Colaborador!");
          this.Colaborador.splice(index, 0, colaborador);
        });
    }
  }
}
