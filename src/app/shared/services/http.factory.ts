import { MensagensHandler } from "app/shared/services/mensagens-handler.service";
import {XHRBackend, Http, RequestOptions} from "@angular/http";
import {InterceptedHttp} from "./http.interceptor";
import { LoaderService } from 'app/shared/services/loader.service';

export function httpFactory(xhrBackend: XHRBackend, requestOptions: RequestOptions, loaderService: LoaderService, mensageHandler: MensagensHandler): Http {
    return new InterceptedHttp(xhrBackend, requestOptions, loaderService, mensageHandler);
}