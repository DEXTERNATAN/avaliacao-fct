import { DataTableDirective } from 'angular-datatables';
import { FormBuilder } from '@angular/forms';
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';

import { Subject } from 'rxjs/Rx';

import { AvaliacaoService } from 'app/avaliacao/avaliacao.service';
import { Avaliacao } from './avaliacao.model';

@Component({
  selector: 'mt-avaliacao',
  templateUrl: './avaliacao.component.html',
  styleUrls: ['./avaliacao.component.css']
})
export class AvaliacaoComponent implements OnInit, AfterViewInit {

  private Avaliacao: Avaliacao[] = [];
  private avaliacaoCarregada: boolean = true;
  dtOptions: DataTables.Settings = {};
  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;
  
  // We use this trigger because fetching the list of persons can be quite long,
  // thus we ensure the data is fetched before rendering
  dtTrigger: Subject<Avaliacao> = new Subject();
  lang: string = 'Portuguese-Brasil';

  constructor(private _avaliacaoService: AvaliacaoService) { }

   ngOnInit() {

    this.dtOptions = {
      language: {
        url: `assets/language/datatables/${this.lang}.json`
      }
    };
    
    this._avaliacaoService.getAvaliacao()
     .subscribe(avaliacao => {
      this.Avaliacao = avaliacao
      this.avaliacaoCarregada = false;
      // Calling the DT trigger to manually render the table
      this.dtTrigger.next();
    }); 
  }

  ngAfterViewInit(): void {
    //this.dtTrigger.next();
  }

  deleteAvaliacao(avaliacao){
    if (confirm("Tem certeza que quer APAGAR a Avaliação #" + avaliacao.id_resultado + " ?")) {
      var index = this.Avaliacao.indexOf(avaliacao);
      this.Avaliacao.splice(index, 1);
      
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api)=>{  
        // Destroy the table first
        dtInstance.destroy();
        
        // Call the dtTrigger to rerender again
        this.dtTrigger.next();
      })

      this._avaliacaoService.deleteAvaliacao(avaliacao.id_resultado)
        .subscribe(null,
          err => {
            alert("A avaliação não foi apagada!");
            // Revert the view back to its original state
            this.Avaliacao.splice(index, 0, avaliacao);
            throw err;
          });
    }
  }
}
