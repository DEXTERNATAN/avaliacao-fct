import { Component, OnInit } from '@angular/core';
import { ImpactoService } from './impacto.service';
import { Impacto } from './impacto.model';

@Component({
  selector: 'mt-impacto',
  templateUrl: './impacto.component.html',
  styleUrls: ['./impacto.component.css']
})

export class ImpactoComponent implements OnInit {

  private Impacto: Impacto[];

  constructor(private _impactoService: ImpactoService) { }

  ngOnInit() {
    this._impactoService.getImpacto().subscribe(impacto => this.Impacto = impacto)
  }

  deleteImpacto(impacto){
    if (confirm("Tem certeza que quer APAGAR o Impacto #" + impacto.id + " ?")) {
      var index = this.Impacto.indexOf(impacto);
      this.Impacto.splice(index, 1);

      this._impactoService.deleteImpacto(impacto.id)
        .subscribe(null,
          err => {
            alert("O Impacto não foi apagado!");
            // Revert the view back to its original state
            this.Impacto.splice(index, 0, impacto);
          });
    }

    console.log('Impacto', Impacto)
  }

}
