import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { RestService } from 'app/shared/services/rest.service';

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { AtributoColaborador } from './AtributoColaborador.model';

@Injectable()
export class AtributoColaboradorService  extends RestService<AtributoColaborador> {

    constructor(protected http: Http) {
        super(http);
    }

    public getUrl(): string {
        return 'AtributoColaborador';
    }

    public mapIdentificador(objeto: AtributoColaborador): number {
        return objeto.TB_COLABORADOR_id_colaborador;
    }

    addAssociacaoAtributoColaborador(associacao: any) {
        return super.adicionar(associacao);
    }


}
