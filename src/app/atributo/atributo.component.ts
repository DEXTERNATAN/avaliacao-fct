import { atributoRouting } from './atributo.routes';
import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { AtributoService } from './atributo.service';
import { AbrangenciaService } from './../abrangencia/abrangencia.service';
import { ComplexidadeService } from './../complexidade/complexidade.service';
import { ImpactoService } from './../impacto/impacto.service';

import { Atributo } from './atributo.model';
import { Abrangencia } from './../abrangencia/abrangencia.model';
import { Complexidade } from './../complexidade/complexidade.model';
import { Impacto } from './../impacto/impacto.model';

@Component({
  selector: 'mt-atributo',
  templateUrl: './atributo.component.html',
  styleUrls: ['./atributo.component.css']
})
export class AtributoComponent implements OnInit {

  private Atributo: Atributo[];
  public Abrangencia: Abrangencia = new Abrangencia();
  public Complexidade: Complexidade = new Complexidade();
  public Impacto: Impacto = new Impacto();
  
  constructor(
    private _atributoService: AtributoService,
    private _abrangenciaService: AbrangenciaService,
    private _complexidadeService: ComplexidadeService,
    private _impactoService: ImpactoService
  ) { }

  ngOnInit() {
    this._atributoService.getAtributo().subscribe(atributo =>
    { 
      this.Atributo = atributo
      this.getAbrangenciaAt(atributo);
      this.getComplexidadeAt(atributo);
      this.getImpactoAt(atributo);
    });
  }

  getAbrangenciaAt(atributo: Atributo[]){
    atributo.forEach(atributoAbr => {
      this._abrangenciaService.getAbrangenciaId(atributoAbr.TB_ABRANGENCIA_id_abrangencia).subscribe(resultAbr => {
      atributoAbr.TB_ABRANGENCIA_id_abrangencia = resultAbr;
      })
    })
  }

  getComplexidadeAt(atributo: Atributo[]){
    atributo.forEach(atributoCom => {
      this._complexidadeService.getComplexidadeId(atributoCom.TB_COMPLEXIDADE_id_complexidade).subscribe(resultCom => {
      atributoCom.TB_COMPLEXIDADE_id_complexidade = resultCom;
      })
    })
  }

  getImpactoAt(atributo: Atributo[]){
    atributo.forEach(atributoIm => {
      this._impactoService.getImpactoId(atributoIm.TB_IMPACTO_id_impacto).subscribe(resultIm => {
      atributoIm.TB_IMPACTO_id_impacto = resultIm;
      })
    })
  }

  deleteAtributo(atributo) {
    if (confirm("Tem certeza que quer APAGAR o Atributo #" + atributo.id_atributo + "?")) {
      var index = this.Atributo.indexOf(atributo);
      this.Atributo.splice(index, 1);

      this._atributoService.deleteAtributo(atributo.id_atributo)
        .subscribe(null,
        err => {
          alert("Não foi possível apagar o Atributo!");
          this.Atributo.splice(index, 0, atributo);
        });
    }
  }
}