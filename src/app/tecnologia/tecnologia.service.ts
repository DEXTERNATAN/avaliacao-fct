import { Observable } from 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RestService } from 'app/shared/services/rest.service';
import { Tecnologia } from './tecnologia.model';

@Injectable()
export class TecnologiaService extends RestService<Tecnologia>{

    constructor(protected http: HttpClient){
        super(http);
    }

    public getUrl(): string {
        return 'tecnologia';
    }

    public mapIdentificador(objeto: Tecnologia): number {
        return objeto.id_tecnologia;
    }

    getTecnologia(): Observable<Tecnologia[]> {
        return super.obterTodos();
    }

    getTecnologiaId(id): Observable<Tecnologia> {
        return super.obterPorId(id);
    }

    addTecnologia(tecnologia: Tecnologia) {
        return super.adicionar(tecnologia);
    }

    deleteTecnologia(id: number) {
        return super.removerPorId(id);
    }

    updateTecnologia(id, tecnologia) {
        return super.atualizarPorId(tecnologia, id);
    }
}