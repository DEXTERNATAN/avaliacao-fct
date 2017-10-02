import { Component, OnInit } from '@angular/core';
import { PapelService } from './papel.service';
import { Papel } from './papel.model';

@Component({
  selector: 'mt-papel',
  templateUrl: './papel.component.html',
  styleUrls: ['./papel.component.css']
})
export class PapelComponent implements OnInit {

  Papel: Papel[];

  constructor(private _papelService: PapelService) { }

  ngOnInit() {

    this._papelService.getPapel().subscribe(papel => this.Papel = papel);

  }

  deletePapel(papel){
    if (confirm("Are you sure you want to delete " + papel.nome + "?")) {
      var index = this.Papel.indexOf(papel);
      this.Papel.splice(index, 1);

      this._papelService.deletePapel(papel.id)
        .subscribe(null,
          err => {
            alert("Could not delete divisão");
            // Revert the view back to its original state
            this.Papel.splice(index, 0, papel);
          });
    }

    console.log('Papel', papel)
  }

}
