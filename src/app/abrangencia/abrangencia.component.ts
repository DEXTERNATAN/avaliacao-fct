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
    if (confirm("Tem certeza que quer APAGAR a Abrangência #" + abrangencia.id_abrangencia + " ?")) {
      var index = this.Abrangencia.indexOf(abrangencia);
      this.Abrangencia.splice(index, 1);

      this._abrangenciaService.deleteAbrangencia(abrangencia.id_abrangencia)
        .subscribe(null,
          err => {
            alert("A abrangência não foi apagada!");
            // Revert the view back to its original state
            this.Abrangencia.splice(index, 0, abrangencia);
          });
    }
  }
}
