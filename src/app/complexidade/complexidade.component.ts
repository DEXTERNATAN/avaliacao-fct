import { Component, OnInit } from '@angular/core';
import { Complexidade } from './complexidade.model';

import { ComplexidadeService } from 'app/complexidade/complexidade.service';

@Component({
  selector: 'mt-complexidade',
  templateUrl: './complexidade.component.html',
  styleUrls: ['./complexidade.component.css']
})
export class ComplexidadeComponent implements OnInit {

  private Complexidade: Complexidade[];

  constructor(private _complexidadeService: ComplexidadeService) { }

  ngOnInit() {
    this._complexidadeService.getComplexidade().subscribe(complexidade => this.Complexidade = complexidade )
  }

  deleteComplexidade(complexidade){
    if (confirm("Are you sure you want to delete " + complexidade.nome + "?")) {
      var index = this.Complexidade.indexOf(complexidade);
      this.Complexidade.splice(index, 1);

      this._complexidadeService.deleteComplexidade(complexidade.id)
        .subscribe(null,
          err => {
            alert("Could not delete abrangência");
            // Revert the view back to its original state
            this.Complexidade.splice(index, 0, complexidade);
          });
    }

    console.log('Complexidade', complexidade)
  }



}