import { DataTableDirective } from 'angular-datatables';
import { FormBuilder } from '@angular/forms';
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';

import { Subject } from 'rxjs/Rx';

import { ComplexidadeService } from 'app/complexidade/complexidade.service';
import { Complexidade } from './complexidade.model';

@Component({
  selector: 'mt-complexidade',
  templateUrl: './complexidade.component.html',
  styleUrls: ['./complexidade.component.css']
})
export class ComplexidadeComponent implements OnInit {

  private Complexidade: Complexidade[] = [];
  private complexidadeCarregada: boolean = true;
  dtOptions: DataTables.Settings = {};
  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;
  

  // We use this trigger because fetching the list of persons can be quite long,
  // thus we ensure the data is fetched before rendering
  dtTrigger: Subject<Complexidade> = new Subject();
  lang: string = 'Portuguese-Brasil';

  constructor(private _complexidadeService: ComplexidadeService) { }

  ngOnInit() {

  this.dtOptions = {
      language: {
        url: `assets/language/datatables/${this.lang}.json`
      }
    };


    this._complexidadeService.getComplexidade()
    .subscribe(complexidade =>{
      this.Complexidade = complexidade
      this.complexidadeCarregada = false;
      // Calling the DT trigger to manually render the table
      this.dtTrigger.next();
    });
  }

  deleteComplexidade(complexidade){
    if (confirm("Tem certeza que quer APAGAR a Complexidade #" + complexidade.id_complexidade + " (" + complexidade.atributo + " " + complexidade.classificacao + "-" + complexidade.nome + ")?")) {
      var index = this.Complexidade.indexOf(complexidade);
      this.Complexidade.splice(index, 1);

      this.dtElement.dtInstance.then((dtInstance: DataTables.Api)=>{  
        // Destroy the table first
        dtInstance.destroy();
        // Call the dtTrigger to rerender again
        this.dtTrigger.next();
      })

      this._complexidadeService.deleteComplexidade(complexidade.id_complexidade)
        .subscribe(null,
          err => {
            alert("A Complexidade não foi apagada!");
            // Revert the view back to its original state
            this.Complexidade.splice(index, 0, complexidade);
          });
    }
  }
}