import { LoaderService } from 'app/shared/services/loader.service';
import { DataTableDirective } from 'angular-datatables';
import { FormBuilder } from '@angular/forms';
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs/Rx';

import { AtributoService } from './atributo.service';
import { Atributo } from './atributo.model';

@Component({
  selector: 'mt-atributo',
  templateUrl: './atributo.component.html',
  styleUrls: ['./atributo.component.css']
})
export class AtributoComponent implements OnInit {

  private Atributo: Atributo[] = [];
  atributoCarregada: boolean = true;
  dtOptions: DataTables.Settings = {};
  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;

  // We use this trigger because fetching the list of persons can be quite long,
  // thus we ensure the data is fetched before rendering
  dtTrigger: Subject<Atributo> = new Subject();
  lang: string = 'Portuguese-Brasil';

  constructor(
    private _atributoService: AtributoService,
    private loaderService: LoaderService
  ) { }

  ngOnInit() {
    
    this.loaderService.setMsgLoading("Carregando...");

    // Configurações do datatable
    this.dtOptions = {
      language: {
        url: `assets/language/datatables/${this.lang}.json`
      }
    };

    this._atributoService.getAtributo()
      .subscribe(atributo => {
        this.Atributo = atributo
        this.atributoCarregada = false;
        // Calling the DT trigger to manually render the table
        this.dtTrigger.next();
      });
  }

  deleteAtributo(atributo) {
    if (confirm("Tem certeza que quer APAGAR o Atributo #" + atributo.idAtributo + " (" + atributo.letra + ")?")) {
      var index = this.Atributo.indexOf(atributo);
      this.Atributo.splice(index, 1);

      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        // Destroy the table first
        dtInstance.destroy();

        // Call the dtTrigger to rerender again
        this.dtTrigger.next();
      })

      this._atributoService.deleteAtributo(atributo.idAtributo)
        .subscribe(null,
        err => {
          alert("Não foi possível apagar o Atributo!");
          this.Atributo.splice(index, 0, atributo);
        });
    }
  }
}