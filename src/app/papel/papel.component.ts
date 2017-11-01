import { DataTableDirective } from 'angular-datatables';
import { FormBuilder } from '@angular/forms';
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';

import { Subject } from 'rxjs/Rx';

import { PapelService } from './papel.service';
import { Papel } from './papel.model';

@Component({
  selector: 'mt-papel',
  templateUrl: './papel.component.html',
  styleUrls: ['./papel.component.css']
})
export class PapelComponent implements OnInit {

  private Papel: Papel[];
  private papelCarregado: boolean = true;
  dtOptions: DataTables.Settings = {};
  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;
  
  // We use this trigger because fetching the list of persons can be quite long,
  // thus we ensure the data is fetched before rendering
  dtTrigger: Subject<Papel> = new Subject();
  lang: string = 'Portuguese-Brasil';
  
  constructor(private _papelService: PapelService) { }
  
  ngOnInit() {
    
    this.dtOptions = {
      language: {
        url: `assets/language/datatables/${this.lang}.json`
      }
    };

    this._papelService.getPapel()
    .subscribe(papel => { 
      this.Papel = papel
      this.papelCarregado = false;
      // Calling the DT trigger to manually render the table
      this.dtTrigger.next();
    });
  }

  ngAfterViewInit(): void {
    //this.dtTrigger.next();
  }

  deletePapel(papel){
    if (confirm("Tem certeza que quer APAGAR o Papel #" + papel.id_papel + " (" + papel.nome + ")?")) {
      var index = this.Papel.indexOf(papel);
      this.Papel.splice(index, 1);

      this.dtElement.dtInstance.then((dtInstance: DataTables.Api)=>{  
        // Destroy the table first
        dtInstance.destroy();
        
        // Call the dtTrigger to rerender again
        this.dtTrigger.next();
      })

      this._papelService.deletePapel(papel.id_papel)
        .subscribe(null,
          err => {
            alert("O papel não foi apagado!");
            // Revert the view back to its original state
            this.Papel.splice(index, 0, papel);
            throw err;
          });
    }
  }
}