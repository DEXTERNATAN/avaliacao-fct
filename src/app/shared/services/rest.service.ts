
import { Http, Response, RequestOptions, Headers, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw'
import { LoaderService } from 'app/shared/services/loader.service';
import { MensagensHandler } from 'app/shared/services/mensagens-handler.service';
import { MEAT_API } from 'app/app.api';
import { ErrorHandler } from 'app/app.error-handler';

export abstract class RestService<T> {

    private urlBase: string = `${MEAT_API}`;
    protected headers: Headers;

    constructor(protected http: Http) {
        this.headers = new Headers({
            'Content-Type': 'application/json;charset=utf-8'
        });
    }

    public getUrlBase(): string {
        return this.urlBase;
    }

    public abstract getUrl(): string;

    public abstract mapIdentificador(objeto: T): number;

    getDefaultRequestOptions(): RequestOptions {
        return <RequestOptions>{
            headers: this.headers
        };
    }

    obterTodos(): Observable<T[]> {
        return this.http.get(`${this.getUrlBase()}/${this.getUrl()}`, this.getDefaultRequestOptions())
            .map(response => response.json())
            .do(data => console.log('COLABORADOR:', data))  // debug
            .catch(ErrorHandler.handleError);
    }

    obterPorId(id: string): Observable<T> {
        return this.http.get(`${this.getUrlBase()}/${this.getUrl()}/${id}`, this.getDefaultRequestOptions())
            .map(response => response.json())
            //.do(data => console.log('server data:', data))  // debug
            .catch(ErrorHandler.handleError);
    }

    obterPorFiltro(url: string, urlSearch: URLSearchParams): Observable<T> {
        let options: RequestOptions = this.getDefaultRequestOptions();
        options.search = urlSearch;
        return this.http.get(`${this.getUrlBase()}/${url}`, options)
            .map(response => response.json())
            //.do(data => console.log('server data:', data))  // debug
            .catch(ErrorHandler.handleError);
    }

    adicionar(objeto: T): Observable<string> {
        return this.http.post(`${this.getUrlBase()}/${this.getUrl()}`, objeto, this.getDefaultRequestOptions())
            .map(response => response.text())
            .do(data => console.log('server data:', data))  // debug
            .catch(ErrorHandler.handleError);
    }

    atualizar(objeto: T): Observable<T> {
        return this.http.put(`${this.getUrlBase()}/${this.getUrl()}` + '/' + this.mapIdentificador(objeto), objeto, this.getDefaultRequestOptions())
            .map(response => response.json())
            //.do(data => console.log('server data:', data))  // debug
            .catch(ErrorHandler.handleError);
    }

    atualizarPorId(objeto: T, id): Observable<T> {
        //debugger
        return this.http.put(`${this.getUrlBase()}/${this.getUrl()}` + '/' + id + this.mapIdentificador(objeto), objeto, this.getDefaultRequestOptions())
            .map(response => response.json())
            .do(data => console.log('server data:', data))  // debug
            .catch(ErrorHandler.handleError);
    }

    remover(objeto: T): Observable<T> {
        return this.http.delete(`${this.getUrlBase()}/${this.getUrl()}` + '/' + this.mapIdentificador(objeto),
            this.getDefaultRequestOptions())
            .map(response => response.json())
            //.do(data => console.log('server data:', data))  // debug
            .catch(ErrorHandler.handleError);

    }

    removerPorId(id: number): Observable<any> {
        return this.http.delete(`${this.getUrlBase()}/${this.getUrl()}` + '/' + id,
            this.getDefaultRequestOptions())
            //.do(data => console.log('server data:', data))  // debug
            .catch(ErrorHandler.handleError);
    }

}
