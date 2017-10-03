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
    if (confirm("Você tem certeza que quer Deletar esta Tecnologia: " + tecnologia.nome + "?")) {
      var index = this.Tecnologia.indexOf(tecnologia);
      this.Tecnologia.splice(index, 1);

      this._tecnologiaService.deleteTecnologia(tecnologia.id)
        .subscribe(null,
          err => {
            alert("A divisão não foi apagada!");

            // Revert the view back to its original state
            this.Tecnologia.splice(index, 0, tecnologia);
          });
    }

    console.log('Tecnologia', tecnologia)
  }

}
