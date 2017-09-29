import { AbrangenciaService } from 'app/abrangencia/abrangencia.service';
import { Component, OnInit } from '@angular/core';
import { Abrangencia } from './abrangencia.model';


@Component({
  selector: 'mt-abrangencia',
  templateUrl: './abrangencia.component.html',
  styleUrls: ['./abrangencia.component.css']
})
export class AbrangenciaComponent implements OnInit {

  private Abrangencia: Abrangencia[];

  constructor(private _abrangenciaService: AbrangenciaService) { }

  ngOnInit() {
    this._abrangenciaService.getAbrangencia().subscribe(abrangencia => this.Abrangencia = abrangencia )
  }

  deleteAbrangencia(abrangencia){
    if (confirm("Are you sure you want to delete " + abrangencia.nome + "?")) {
      var index = this.Abrangencia.indexOf(abrangencia);
      this.Abrangencia.splice(index, 1);

      this._abrangenciaService.deleteAbrangencia(abrangencia.id)
        .subscribe(null,
          err => {
            alert("Could not delete abrangência");
            // Revert the view back to its original state
            this.Abrangencia.splice(index, 0, abrangencia);
          });
    }

    console.log('Abrangencia', abrangencia)
  }



}
