import { DataTableDirective } from 'angular-datatables';
import { FormBuilder } from '@angular/forms';
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';

import { Subject } from 'rxjs/Rx';

import { ConsultaavaliacaoService } from 'app/consultaavaliacao/consultaavaliacao.service';
import { Consultaavaliacao } from './consultaavaliacao.model';

@Component({
  selector: 'mt-consultaavaliacao',
  templateUrl: './consultaavaliacao.component.html',
  styleUrls: ['./consultaavaliacao.component.css']
})
export class ConsultaavaliacaoComponent implements OnInit, AfterViewInit {

  private Consultaavaliacao: Consultaavaliacao[] = [];
  private consultaavaliacaoCarregada: boolean = true;
  dtOptions: DataTables.Settings = {};
  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;
  
  // We use this trigger because fetching the list of persons can be quite long,
  // thus we ensure the data is fetched before rendering
  dtTrigger: Subject<Consultaavaliacao> = new Subject();
  lang: string = 'Portuguese-Brasil';

  constructor(private _consultaavaliacaoService: ConsultaavaliacaoService) { }

   ngOnInit() {

    this.dtOptions = {
      language: {
        url: `assets/language/datatables/${this.lang}.json`
      }
    };
    
    this._consultaavaliacaoService.getConsultaavaliacao()
     .subscribe(consultaavaliacao => {
      this.Consultaavaliacao = consultaavaliacao
      this.consultaavaliacaoCarregada = false;
      // Calling the DT trigger to manually render the table
      this.dtTrigger.next();
    }); 
  }

  ngAfterViewInit(): void {
    //this.dtTrigger.next();
  }
}