import { DataTableDirective } from 'angular-datatables';
import { FormBuilder } from '@angular/forms';
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';

import { Subject } from 'rxjs/Rx';

import { ReferenciaService } from 'app/referencia/referencia.service';
import { Referencia } from './referencia.model';

@Component({
  selector: 'mt-referencia',
  templateUrl: './referencia.component.html',
  styleUrls: ['./referencia.component.css']
})
export class ReferenciaComponent implements OnInit {

  private Referencia: Referencia[];
  private referenciaCarregada: boolean = true;
  dtOptions: DataTables.Settings = {};
  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;
  
  // We use this trigger because fetching the list of persons can be quite long,
  // thus we ensure the data is fetched before rendering
  dtTrigger: Subject<Referencia> = new Subject();
  lang: string = 'Portuguese-Brasil';

  constructor(private _referenciaService: ReferenciaService) { }

  ngOnInit() {

    this.dtOptions = {
      language: {
        url: `assets/language/datatables/${this.lang}.json`
      }
    };

    this._referenciaService.getReferencia()
    .subscribe(referencia => {
      this.Referencia = referencia
      this.referenciaCarregada = false;
      // Calling the DT trigger to manually render the table
      this.dtTrigger.next(); 
    });
  }

  ngAfterViewInit(): void {
    //this.dtTrigger.next();
  }

  deleteReferencia(referencia){
    if (confirm("Você tem certeza que quer APAGAR a Referência #" + referencia.id_referencia_fct_gfe + " ?")) {
      var index = this.Referencia.indexOf(referencia);
      this.Referencia.splice(index, 1);

      this.dtElement.dtInstance.then((dtInstance: DataTables.Api)=>{  
        // Destroy the table first
        dtInstance.destroy();
        
        // Call the dtTrigger to rerender again
        this.dtTrigger.next();
      })

      this._referenciaService.deleteReferencia(referencia.id_referencia_fct_gfe)
        .subscribe(null,
          err => {
            alert("Não foi possível apagar a Referência!");
            // Revert the view back to its original state
            this.Referencia.splice(index, 0, referencia);
            throw err;
          });
    }
  }
}