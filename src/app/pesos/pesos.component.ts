import { PesosService } from 'app/pesos/pesos.service';
import { Component, OnInit } from '@angular/core';
import { Pesos } from './pesos.model';

@Component({
  selector: 'mt-pesos',
  templateUrl: './pesos.component.html',
  styleUrls: ['./pesos.component.css']
})
export class PesosComponent implements OnInit {

  private Pesos: Pesos[];

  constructor(private _pesosService: PesosService) { }

  ngOnInit() {
    this._pesosService.getPesos().subscribe(pesos => this.Pesos = pesos )
  }

  deletePesos(pesos){
    if (confirm("Tem certeza que quer APAGAR o Peso #" + pesos.id + " ?")) {
      var index = this.Pesos.indexOf(pesos);
      this.Pesos.splice(index, 1);

      this._pesosService.deletePesos(pesos.id)
        .subscribe(null,
          err => {
            alert("O peso não foi apagado!");
            // Revert the view back to its original state
            this.Pesos.splice(index, 0, pesos);
          });
    }

    console.log('Pesos', pesos)
  }



}
