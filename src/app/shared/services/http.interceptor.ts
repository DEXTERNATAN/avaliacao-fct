import {Injectable} from '@angular/core';
import { ConnectionBackend, RequestOptions, RequestOptionsArgs, Response, Http, Headers} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import { LoaderService } from 'app/shared/services/loader.service';
import { MensagensHandler } from 'app/shared/services/mensagens-handler.service';


@Injectable()
export class InterceptedHttp extends Http {

    private requestsCount = 0;
    private resolutionsCount = 0;
    private processing: boolean;

    constructor(
        backend: ConnectionBackend,
        defaultOptions: RequestOptions,
        private loaderService: LoaderService, 
        private mensageHandler: MensagensHandler
    ) {
        super(backend, defaultOptions);
        console.log('InterceptedHttp');
    }

    get(url: string, options?: RequestOptionsArgs): Observable<Response> {
        return this.watch(super.get(url, options))
        .catch(this.catchErrors());
    }

    post(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
        return this.watch(super.post(url, body, this.getRequestOptionArgs(options)))
        .catch(this.catchErrors());
    }

    put(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
        return this.watch(super.put(url, body, this.getRequestOptionArgs(options)))
        .catch(this.catchErrors());
    }

    delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
        return this.watch(super.delete(url, this.getRequestOptionArgs(options)))
        .catch(this.catchErrors());
    }

    head(url: string, options?: RequestOptionsArgs): Observable<Response> {
        return this.watch(super.head(url, this.getRequestOptionArgs(options)))
        .catch(this.catchErrors());
    }

    private getRequestOptionArgs(options?: RequestOptionsArgs) : RequestOptionsArgs {
        if (options == null) {
            options = new RequestOptions();
        }
        if (options.headers == null) {
            options.headers = new Headers();
        }
        options.headers.append('Content-Type', 'application/json');

        return options;
    }

    private catchErrors() {
        return (res: Response) => {
            this.mensageHandler.handleHttpError(res)
            return Observable.throw(res);
        };
    }

    watch(response: Observable<Response>): Observable<Response> {
        this.loaderService.show();
        this.addRequest();
        return response.do(next => {
            this.addResolution();
        }, (errorResponse: Response) => {
            this.addResolution();
        });
    }

    private addRequest(): void {
        this.requestsCount++;
        this.updateStatus();
    };

    private addResolution(): void {
        this.resolutionsCount++;
        this.updateStatus();
    };

    private updateStatus(): void {
        this.processing = this.resolutionsCount < this.requestsCount;
        if (!this.processing) {
            this.loaderService.hide();
        }
    }

}
