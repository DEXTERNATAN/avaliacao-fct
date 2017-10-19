import { Subject } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';

import { DivisaoService } from './divisao.service';
import { Divisao } from './divisao.model';

@Component({
  selector: 'mt-divisao',
  templateUrl: './divisao.component.html',
  styleUrls: ['./divisao.component.css']
})
export class DivisaoComponent implements OnInit {

  private Divisao: Divisao[] = [];
  private divisaoCarregada: boolean = true;
  dtOptions: DataTables.Settings = {};

  // We use this trigger because fetching the list of persons can be quite long,
  // thus we ensure the data is fetched before rendering
  dtTrigger: Subject<Divisao> = new Subject();

  constructor(private _divisaoService: DivisaoService) { }

  ngOnInit() {

    this.dtOptions = {
      //pagingType: 'full_numbers'
      searching: true
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
    if (confirm("Tem certeza que quer APAGAR a Divisão #" + divisao.id_divisao + " - " + divisao.sigla + "?")) {
      var index = this.Divisao.indexOf(divisao);
      this.Divisao.splice(index, 1);

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