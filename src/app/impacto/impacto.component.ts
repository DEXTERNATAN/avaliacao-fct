import { DataTableDirective } from 'angular-datatables';
import { FormBuilder } from '@angular/forms';
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';

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
  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;

  // We use this trigger because fetching the list of persons can be quite long,
  // thus we ensure the data is fetched before rendering
  dtTrigger: Subject<Impacto> = new Subject();
  lang: string = 'Portuguese-Brasil';

  constructor(private _impactoService: ImpactoService) { }

  ngOnInit() {

  this.dtOptions = {
      language: {
        url: `assets/language/datatables/${this.lang}.json`
      }
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

      this.dtElement.dtInstance.then((dtInstance: DataTables.Api)=>{  
        // Destroy the table first
        dtInstance.destroy();
        
        // Call the dtTrigger to rerender again
        this.dtTrigger.next();
      })

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
