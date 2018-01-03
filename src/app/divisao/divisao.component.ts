import { DataTableDirective } from 'angular-datatables';
import { FormBuilder } from '@angular/forms';
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';

import { Subject } from 'rxjs/Rx';

import { DivisaoService } from './divisao.service';
import { Divisao } from './divisao.model';

@Component({
  selector: 'mt-divisao',
  templateUrl: './divisao.component.html',
  styleUrls: ['./divisao.component.css']
})
export class DivisaoComponent implements OnInit {

  public Divisao: Divisao[] = [];
  public divisaoCarregada: boolean = true;
  dtOptions: DataTables.Settings = {};
  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;
  

  // We use this trigger because fetching the list of persons can be quite long,
  // thus we ensure the data is fetched before rendering
  dtTrigger: Subject<Divisao> = new Subject();
  lang: string = 'Portuguese-Brasil';

  constructor(private _divisaoService: DivisaoService) { }

  ngOnInit() {

    this.dtOptions = {
      language: {
        url: `assets/language/datatables/${this.lang}.json`
      }
    };
    
    
    this._divisaoService.getDivisao()
    .subscribe(divisao =>{ 
      this.Divisao = divisao
      this.divisaoCarregada = false;
      // Calling the DT trigger to manually render the table
      this.dtTrigger.next();
    });
  }

  deleteDivisao(divisao){
    if (confirm("Tem certeza que quer APAGAR a Divisão #" + divisao.id_divisao + " (" + divisao.nome + ")?")) {
      var index = this.Divisao.indexOf(divisao);
      this.Divisao.splice(index, 1);

      this.dtElement.dtInstance.then((dtInstance: DataTables.Api)=>{  
        // Destroy the table first
        dtInstance.destroy();
        
        // Call the dtTrigger to rerender again
        this.dtTrigger.next();
      })

      this._divisaoService.deleteDivisao(divisao.id_divisao)
        .subscribe(null,
          err => {
            alert("Não foi possível apagar a Divisão!");
            // Revert the view back to its original state
            this.Divisao.splice(index, 0, divisao);
          });
    }
  }

}