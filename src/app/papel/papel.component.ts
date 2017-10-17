import { Component, OnInit } from '@angular/core';

import { PapelService } from './papel.service';
import { Papel } from './papel.model';

@Component({
  selector: 'mt-papel',
  templateUrl: './papel.component.html',
  styleUrls: ['./papel.component.css']
})
export class PapelComponent implements OnInit {

  private Papel: Papel[];
  constructor(private _papelService: PapelService) { }

  ngOnInit() {

    this._papelService.getPapel().subscribe(papel => this.Papel = papel)
  }

  deletePapel(papel){
    if (confirm("Tem certeza que quer APAGAR o Papel #" + papel.id_papel + " ?")) {
      var index = this.Papel.indexOf(papel);
      this.Papel.splice(index, 1);

      this._papelService.deletePapel(papel.id_papel)
        .subscribe(null,
          err => {
            alert("O papel não foi apagado!");
            // Revert the view back to its original state
            this.Papel.splice(index, 0, papel);
          });
    }
  }
}