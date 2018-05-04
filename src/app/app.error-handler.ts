import { Response } from '@angular/http'
import { Observable } from 'rxjs/Observable'

export class ErrorHandler {

    static handleError(error: Response | any) {
        let errorMessage: string;
        let errorMessageJson: Object;

        if (error instanceof Response) {
            // errorMessage = `Erro ${error.status} ao obter a URL ${error.url} - ${error.statusText} - ${error._body}`;

            errorMessageJson = {
                status: error.status,
                url: error.url,
                text: error.statusText,
                body: error.json()
            };
            console.log(errorMessageJson)

        } else {
            errorMessage = error.toString();
        }

        return Observable.throw(errorMessageJson);
    }
}