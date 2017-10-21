import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Rx';

import { DistribuicaoService } from 'app/distribuicao/distribuicao.service';
import { Distribuicao } from './distribuicao.model';

@Component({
  selector: 'mt-distribuicao',
  templateUrl: './distribuicao.component.html',
  styleUrls: ['./distribuicao.component.css']
})
export class DistribuicaoComponent implements OnInit {

  private Distribuicao: Distribuicao[] = [];
  private distribuicaoCarregada: boolean = true;
  dtOptions: DataTables.Settings = {};

  // We use this trigger because fetching the list of persons can be quite long,
  // thus we ensure the data is fetched before rendering
  dtTrigger: Subject<Distribuicao> = new Subject();

  constructor(private _distribuicaoService: DistribuicaoService) { }

  ngOnInit() {

   this.dtOptions = {
      //pagingType: 'full_numbers'
      searching: false,
      paging: false,
      info: false,
      ordering: false
    };

    this._distribuicaoService.getDistribuicao()
    .subscribe(distribuicao =>{
      this.Distribuicao = distribuicao
      this.distribuicaoCarregada = false;
      // Calling the DT trigger to manually render the table
      this.dtTrigger.next();
   });
  }

  deleteDistribuicao(distribuicao){
    if (confirm("Tem certeza que quer APAGAR a Distribuição #" + distribuicao.id_distribuicao + " ?")) {
      var index = this.Distribuicao.indexOf(distribuicao);
      this.Distribuicao.splice(index, 1);

      this._distribuicaoService.deleteDistribuicao(distribuicao.id_distribuicao)
        .subscribe(null,
          err => {
            alert("A Distribuição não foi apagada!");
            // Revert the view back to its original state
            this.Distribuicao.splice(index, 0, distribuicao);
          });
    }
  }
}