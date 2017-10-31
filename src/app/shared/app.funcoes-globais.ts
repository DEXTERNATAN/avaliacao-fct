import * as moment from 'moment';
import 'moment/locale/pt-br';

export class FuncoesGlobais {
    static dtFormatada: string;

    static dataFormatadaView(data) {
        moment.locale('pt-BR');
        this.dtFormatada = moment(new Date(data)).format('DD/MM/YYYY');
        if (this.dtFormatada == "Invalid date") {
            this.dtFormatada = moment(new Date(), 'DD/MM/YYYY').format('DD/MM/YYYY');
        }
        return this.dtFormatada;
    }

    static dataFormatadaCad(data) {
        moment.locale('pt-BR');
        let StrDate: Date  = moment(data, 'DD-MM-YYYY').toDate();
        //let isoDate: string  = JSON.parse(JSON.stringify(StrDate));
        return StrDate;
    }
}