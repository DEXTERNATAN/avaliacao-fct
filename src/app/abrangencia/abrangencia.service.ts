import { Observable } from 'rxjs/Rx';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { RestService } from 'app/shared/services/rest.service';
import { Abrangencia } from './abrangencia.model';
import { LoginService } from 'app/security/login/login.service';

@Injectable()
export class AbrangenciaService extends RestService<Abrangencia> {

    constructor(protected http: Http, private loginService: LoginService) {
        super(http);
    }

    public getUrl(): string {
        return 'abrangencia';
    }

    public mapIdentificador(objeto: Abrangencia): number {
        return objeto.id_abrangencia;
    }

    getAbrangencia(): Observable<Abrangencia[]> {
        return super.obterTodos();
    }

    getAbrangenciaId(id): Observable<Abrangencia> {
        return super.obterPorId(id);
    }

    addAbrangencia(abrangencia: Abrangencia) {
        return super.adicionar(abrangencia);
    }

    deleteAbrangencia(id: number) {
        return super.removerPorId(id);
    }

    updateAbrangencia(id, abrangencia) {
        return super.atualizarPorId(abrangencia, id);
    }
}
