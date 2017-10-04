import { Component, OnInit } from '@angular/core';
import { ColaboradorService } from './colaborador.service';
import { Colaborador } from './colaborador.model';

@Component({
  selector: 'mt-colaborador',
  templateUrl: './colaborador.component.html',
  styleUrls: ['./colaborador.component.css']
})
export class ColaboradorComponent implements OnInit {

  private Colaborador: Colaborador[];

  constructor(private _colaboradorService: ColaboradorService) { }

  ngOnInit() {
    this._colaboradorService.getColaborador().subscribe(colaborador => this.Colaborador = colaborador)
  }

  deleteColaborador(colaborador){
    if (confirm("Tem certeza que quer APAGAR o Colaborador #" + colaborador.id + " - " + colaborador.nome + "?")) {
      var index = this.Colaborador.indexOf(colaborador);
      this.Colaborador.splice(index, 1);

      this._colaboradorService.deleteColaborador(colaborador.id)
        .subscribe(null,
          err => {
            alert("Não foi possível apagar o Colaborador!");
            // Revert the view back to its original state
            this.Colaborador.splice(index, 0, colaborador);
          });
    }

   // console.log('Colaborador', colaborador)
  }

}
