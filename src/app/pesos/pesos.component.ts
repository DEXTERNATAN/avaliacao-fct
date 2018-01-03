import { DataTableDirective } from 'angular-datatables';
import { FormBuilder } from '@angular/forms';
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';

import { Subject } from 'rxjs/Rx';

import { PesosService } from 'app/pesos/pesos.service';
import { Pesos } from './pesos.model';

@Component({
  selector: 'mt-pesos',
  templateUrl: './pesos.component.html',
  styleUrls: ['./pesos.component.css']
})
export class PesosComponent implements OnInit {

  public Pesos: Pesos[];
  public pesoCarregado: boolean = true;
  dtOptions: DataTables.Settings = {};
  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;

  // We use this trigger because fetching the list of persons can be quite long,
  // thus we ensure the data is fetched before rendering
  dtTrigger: Subject<Pesos> = new Subject();
  lang: string = 'Portuguese-Brasil';

  constructor(private _pesosService: PesosService) { }

  ngOnInit() {

    this.dtOptions = {
      language: {
        url: `assets/language/datatables/${this.lang}.json`
      }
    };

    this._pesosService.getPesos()
      .subscribe(pesos => {
        this.Pesos = pesos
        this.pesoCarregado = false;
        // Calling the DT trigger to manually render the table
        this.dtTrigger.next();
      });
  }

  ngAfterViewInit(): void {
    //this.dtTrigger.next();
  }

  deletePesos(pesos) {
    if (confirm("Tem certeza que quer APAGAR o Peso #" + pesos.id_pesos + " (" + pesos.tipo + " " + pesos.quantidade + ")?")) {
      var index = this.Pesos.indexOf(pesos);
      this.Pesos.splice(index, 1);

      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        // Destroy the table first
        dtInstance.destroy();

        // Call the dtTrigger to rerender again
        this.dtTrigger.next();
      })

      this._pesosService.deletePesos(pesos.id_pesos)
        .subscribe(null,
        err => {
          alert("O peso não foi apagado!");
          // Revert the view back to its original state
          this.Pesos.splice(index, 0, pesos);
          throw err;
        });
    }
  }

  ajustaPesos(valor: string): string {
    let vlrPeso = valor.toString();
    if (vlrPeso.length == 3) {
      valor = valor + "00";
    }

    if (vlrPeso.length == 4) {
      valor = valor + "0";
    }

    return valor;
  }

}