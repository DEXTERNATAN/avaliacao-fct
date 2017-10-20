import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { Subject } from 'rxjs/Rx';

import { ImpactoService } from './impacto.service';
import { Impacto } from './impacto.model';

@Component({
  selector: 'mt-impacto',
  templateUrl: './impacto.component.html',
  styleUrls: ['./impacto.component.css']
})

export class ImpactoComponent implements OnInit {

  private Impacto: Impacto[] = [];
  private impactoCarregada: boolean = true;
  dtOptions: DataTables.Settings = {};

  // We use this trigger because fetching the list of persons can be quite long,
  // thus we ensure the data is fetched before rendering
  dtTrigger: Subject<Impacto> = new Subject();


  constructor(private _impactoService: ImpactoService) { }

  ngOnInit() {

  this.dtOptions = {
      //pagingType: 'full_numbers'
      //searching: true
    };
    

    this._impactoService.getImpacto()
    .subscribe(impacto =>{
      this.Impacto = impacto
      this.impactoCarregada = false;
      // Calling the DT trigger to manually render the table
      this.dtTrigger.next();
   });
  }

  deleteImpacto(impacto){
    if (confirm("Tem certeza que quer APAGAR o Impacto #" + impacto.id_impacto + " ?")) {
      var index = this.Impacto.indexOf(impacto);
      this.Impacto.splice(index, 1);

      this._impactoService.deleteImpacto(impacto.id_impacto)
        .subscribe(null,
          err => {
            alert("O Impacto não foi apagado!");
            // Revert the view back to its original state
            this.Impacto.splice(index, 0, impacto);
          });
    }
  }
}
