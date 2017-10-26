import * as moment from 'moment';
import 'moment/locale/pt-br';

export class FuncoesGlobais {
    static dtFormatada: string;

    static dataFormatadaView(data) {
        moment.locale('pt-BR');
        this.dtFormatada = moment(data).format('DD/MM/YYYY');
        if (this.dtFormatada == "Invalid date") {
            this.dtFormatada = moment(new Date(), 'DD/MM/YYYY').format('DD/MM/YYYY');
        }
        return this.dtFormatada;
    }

    static dataFormatadaCad(data) {
        moment.locale('pt-BR');
        this.dtFormatada = moment(data, 'DD-MM-YYYY').format('YYYY-MM-DD HH:mm:ss');
        if (this.dtFormatada == "Invalid date") {
            this.dtFormatada = moment(new Date(), 'DD-MM-YYYY').format('YYYY-MM-DD HH:mm:ss');
        }else{
            this.dtFormatada = moment(data, 'DD-MM-YYYY').format('YYYY-MM-DD HH:mm:ss');
        }
        return this.dtFormatada;
    }
}