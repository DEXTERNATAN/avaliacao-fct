import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { MEAT_API } from 'app/app.api';
import { ErrorHandler } from 'app/app.error-handler';

const AUTH_HEADER_KEY = 'Authorization';
const AUTH_PREFIX = 'Bearer';

export abstract class RestService<T>{

    httpOptions: { headers: HttpHeaders; };
    private urlBase = `${MEAT_API}`;
    protected headers: Headers;
    protected TOKEN_NAME = 'jwt_token';


    constructor(protected http: HttpClient) {
        this.httpOptions = {
            headers: new HttpHeaders(
                {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('jwt_token')
                }
            )
        };
        // this.headers = new Headers({
        //     'Content-Type': 'application/json;charset=utf-8'
        // });

        // const token = localStorage.getItem(this.TOKEN_NAME);
        // if (token) { this.headers.append(AUTH_HEADER_KEY, `${AUTH_PREFIX} ${token}`); }

    }

    public getUrlBase(): string {
        return this.urlBase;
    }

    public abstract getUrl(): string;

    public abstract mapIdentificador(objeto: T): number;

    // getDefaultRequestOptions(): RequestOptions {
    //     return <RequestOptions>{
    //         headers: this.headers
    //     };
    // }

    getDefaultRequestOptions() {
        return this.httpOptions;
    }

    // 
    obterTodos() : Observable<T[]>{
        // return this.http.get(`${this.getUrlBase()}/${this.getUrl()}`, this.getDefaultRequestOptions())
        //     .map(response => response.json())
        //     // .do(data => console.log('COLABORADOR:', data))  // debug
        //     .catch(ErrorHandler.handleError);
        return this.http.get(`${this.getUrlBase()}/${this.getUrl()}`, this.httpOptions)
        .catch(ErrorHandler.handleError);
    }

    obterPorId(id: string): Observable<T> {
        return this.http.get(`${this.getUrlBase()}/${this.getUrl()}/${id}`, this.httpOptions)
        // this.getDefaultRequestOptions()
        .do(data => console.log('server data:', data))  // debug
        .catch(ErrorHandler.handleError);
    }

    // obterPorFiltro(url: string, urlSearch: URLSearchParams): Observable<T> {
    //     let options: RequestOptions = this.getDefaultRequestOptions();
    //     options.search = urlSearch;
    //     return this.http.get(`${this.getUrlBase()}/${url}`, options)
    //         .map(response => response.json())
    //         // .do(data => console.log('server data:', data))  // debug
    //         .catch(ErrorHandler.handleError);
    // }

    adicionar(objeto: T): Observable<string> {
        return this.http.post(`${this.getUrlBase()}/${this.getUrl()}`, objeto, this.httpOptions)
        // this.getDefaultRequestOptions()
        // .do(data => console.log('server data:', data))  // debug
        .catch(ErrorHandler.handleError);
    }

    atualizar(objeto: T): Observable<T> {
        return this.http.put(`${this.getUrlBase()}/${this.getUrl()}` + '/' + this.mapIdentificador(objeto), objeto, this.httpOptions)
        // this.getDefaultRequestOptions()
        .do(data => console.log('server data:', data))  // debug
        .catch(ErrorHandler.handleError);
    }

    atualizarPorId(objeto: T, id): Observable<T> {
      return this.http.put(`${this.getUrlBase()}/${this.getUrl()}` + '/' + id , objeto,
      this.getDefaultRequestOptions())
            .do(data => console.log('server data:', data))  // debug
            .catch(ErrorHandler.handleError);
    }

    remover(objeto: T): Observable<T> {
        return this.http.delete(`${this.getUrlBase()}/${this.getUrl()}` + '/' + this.mapIdentificador(objeto),
            this.getDefaultRequestOptions())
            .catch(ErrorHandler.handleError);

    }

    removerAll(): Observable<T> {
        return this.http.delete(`${this.getUrlBase()}/${this.getUrl()}`,
            this.getDefaultRequestOptions())
            .catch(ErrorHandler.handleError);
    }

    removerPorId(id: number): Observable<any> {
        return this.http.delete(`${this.getUrlBase()}/${this.getUrl()}` + '/' + id,
            this.getDefaultRequestOptions())
            // .do(data => console.log('server data:', data))  // debug
            .catch(ErrorHandler.handleError);
    }

}
