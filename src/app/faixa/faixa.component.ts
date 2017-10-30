import { DataTableDirective } from 'angular-datatables';
import { FormBuilder } from '@angular/forms';
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';

import { Subject } from 'rxjs/Rx';

import { FaixaService } from 'app/faixa/faixa.service';
import { Faixa } from './faixa.model';

@Component({
  selector: 'mt-faixa',
  templateUrl: './faixa.component.html',
  styleUrls: ['./faixa.component.css']
})
export class FaixaComponent implements OnInit, AfterViewInit {

  private Faixa: Faixa[] = [];
  private faixaCarregada: boolean = true;
  dtOptions: DataTables.Settings = {};
  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;
  
  // We use this trigger because fetching the list of persons can be quite long,
  // thus we ensure the data is fetched before rendering
  dtTrigger: Subject<Faixa> = new Subject();
  lang: string = 'Portuguese-Brasil';

  constructor(private _faixaService: FaixaService) { }

   ngOnInit() {

    this.dtOptions = {
      language: {
        url: `assets/language/datatables/${this.lang}.json`
      }
    };
    
    this._faixaService.getFaixa()
     .subscribe(faixa => {
      this.Faixa = faixa
      this.faixaCarregada = false;
      // Calling the DT trigger to manually render the table
      this.dtTrigger.next();
    }); 
  }

  ngAfterViewInit(): void {
    //this.dtTrigger.next();
  }

  deleteFaixa(faixa){
    if (confirm("Tem certeza que quer APAGAR a Faixa #" + faixa.id_faixa + " ?")) {
      var index = this.Faixa.indexOf(faixa);
      this.Faixa.splice(index, 1);
      
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api)=>{  
        // Destroy the table first
        dtInstance.destroy();
        
        // Call the dtTrigger to rerender again
        this.dtTrigger.next();
      })

      this._faixaService.deleteFaixa(faixa.id_resultado)
        .subscribe(null,
          err => {
            alert("A faixa não foi apagada!");
            // Revert the view back to its original state
            this.Faixa.splice(index, 0, faixa);
            throw err;
          });
    }
  }
}