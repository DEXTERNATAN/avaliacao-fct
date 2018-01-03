import { DataTableDirective } from 'angular-datatables';
import { FormBuilder } from '@angular/forms';
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';

import { Subject } from 'rxjs/Rx';

import { ColaboradorService } from './colaborador.service';
import { Colaborador } from './colaborador.model';
import { colaboradorRouting } from './colaborador.routes';

@Component({
  selector: 'mt-colaborador',
  templateUrl: './colaborador.component.html',
  styleUrls: ['./colaborador.component.css']
})
export class ColaboradorComponent implements OnInit {

  public Colaborador: Colaborador[] = [];
  public colaboradorCarregada: boolean = true;
  dtOptions: DataTables.Settings = {};
  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;

  // We use this trigger because fetching the list of persons can be quite long,
  // thus we ensure the data is fetched before rendering
  dtTrigger: Subject<Colaborador> = new Subject();
  lang: string = 'Portuguese-Brasil';

  constructor(
    private _colaboradorService: ColaboradorService
  ) { }

  ngOnInit() {
     
     this.dtOptions = {
      language: {
        url: `assets/language/datatables/${this.lang}.json`
      }
    };
    
    this._colaboradorService.getColaborador()
    .subscribe(colaborador =>{ 
      this.Colaborador = colaborador
      this.colaboradorCarregada = false;
      // Calling the DT trigger to manually render the table
      this.dtTrigger.next();
    });
  }

  deleteColaborador(colaborador) {
    if (confirm("Tem certeza que quer APAGAR o Colaborador #" + colaborador.idColaborador + " (" + colaborador.nome + ")?")) {
      var index = this.Colaborador.indexOf(colaborador);
      this.Colaborador.splice(index, 1);

      this.dtElement.dtInstance.then((dtInstance: DataTables.Api)=>{  
        // Destroy the table first
        dtInstance.destroy();
        
        // Call the dtTrigger to rerender again
        this.dtTrigger.next();
      })

      this._colaboradorService.deleteColaborador(colaborador.idColaborador)
        .subscribe(null,
        err => {
          alert("Não foi possível apagar o Colaborador!");
          this.Colaborador.splice(index, 0, colaborador);
        });
    }
  }
}
