import { DataTableDirective } from 'angular-datatables';
import { FormBuilder } from '@angular/forms';
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';

import { Subject } from 'rxjs/Rx';

import { TecnologiaService } from './tecnologia.service';
import { Tecnologia } from './tecnologia.model';

@Component({
  selector: 'mt-tecnologia',
  templateUrl: './tecnologia.component.html',
  styleUrls: ['./tecnologia.component.css']
})
export class TecnologiaComponent implements OnInit {

  private Tecnologia: Tecnologia[];
  private tecnologiaCarregada: boolean = true;
  dtOptions: DataTables.Settings = {};
  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;
  
  // We use this trigger because fetching the list of persons can be quite long,
  // thus we ensure the data is fetched before rendering
  dtTrigger: Subject<Tecnologia> = new Subject();
  lang: string = 'Portuguese-Brasil';

  constructor(private _tecnologiaService: TecnologiaService) { }

  ngOnInit() {
    
    this.dtOptions = {
      language: {
        url: `assets/language/datatables/${this.lang}.json`
      }
    };

    this._tecnologiaService.getTecnologia()
    .subscribe(tecnologia => {
      this.Tecnologia = tecnologia
      this.tecnologiaCarregada = false;
      // Calling the DT trigger to manually render the table
      this.dtTrigger.next();
    });
  }

  ngAfterViewInit(): void {
    //this.dtTrigger.next();
  }

  deleteTecnologia(tecnologia){
    if (confirm("Tem certeza que quer APAGAR a Tecnologia #" + tecnologia.id_tecnologia + " ?")) {
      var index = this.Tecnologia.indexOf(tecnologia);
      this.Tecnologia.splice(index, 1);

      this.dtElement.dtInstance.then((dtInstance: DataTables.Api)=>{  
        // Destroy the table first
        dtInstance.destroy();
        
        // Call the dtTrigger to rerender again
        this.dtTrigger.next();
      })

      this._tecnologiaService.deleteTecnologia(tecnologia.id_tecnologia)
        .subscribe(null,
          err => {
            alert("A Tecnologia não foi apagada!");

            // Revert the view back to its original state
            this.Tecnologia.splice(index, 0, tecnologia);
            throw err;
          });
    }
  }
}