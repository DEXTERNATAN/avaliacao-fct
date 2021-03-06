import { MensagensHandler } from 'app/shared/services/mensagens-handler.service';
import { LoaderService } from 'app/shared/services/loader.service';
import { DataTableDirective } from 'angular-datatables';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs/Rx';

import { AtributoService } from './atributo.service';
import { Atributo } from './atributo.model';

@Component({
  selector: 'mt-atributo',
  templateUrl: './atributo.component.html',
  styleUrls: ['./atributo.component.css']
})
export class AtributoComponent implements OnInit {

  public Atributo: Atributo[] = [];
  dtOptions: DataTables.Settings = {};
  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;

  // We use this trigger because fetching the list of persons can be quite long,
  // thus we ensure the data is fetched before rendering
  dtTrigger: Subject<Atributo> = new Subject();
  lang = 'Portuguese-Brasil';

  constructor(
    private _atributoService: AtributoService,
    private loaderService: LoaderService,
    private mensagensHandler: MensagensHandler
  ) { }

  ngOnInit() {
    this.loaderService.setMsgLoading('Carregando...');

    // Configurações do datatable
    this.dtOptions = {
      language: {
        url: `assets/language/datatables/${this.lang}.json`
      }
    };

    this._atributoService.getAtributo()
      .subscribe(atributo => {
        this.Atributo = atributo;

        // Calling the DT trigger to manually render the table
        this.dtTrigger.next();
      });
  }

  deleteAtributo(atributo) {
    if (confirm('Tem certeza que quer APAGAR o Atributo #' + atributo.idAtributo + ' (' + atributo.letra + ')?')) {
      let index = this.Atributo.indexOf(atributo);
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

          alert('Não foi possível apagar o Atributo!');
          this.Atributo.splice(index, 0, atributo);

        });
    }
  }
}
