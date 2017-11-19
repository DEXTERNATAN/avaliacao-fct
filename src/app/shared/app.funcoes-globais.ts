import * as moment from 'moment';
import 'moment/locale/pt-br';

export class FuncoesGlobais {
    static dtFormatada: string;
    static regexRetirarCaracteres: any = /[^\w\s]/gi;
    
    static dataFormatadaView(data) {
        moment.locale('pt-BR');
        this.dtFormatada = moment(new Date(data)).format('DD/MM/YYYY');
        if (this.dtFormatada == "Invalid date") {
            this.dtFormatada = moment(new Date(), 'DD/MM/YYYY').format('DD/MM/YYYY');
        }
        return this.dtFormatada;
    }

    static dataFormatadaCad(data) {
        //debugger
        moment.locale('pt-BR');
        let StrDate: Date  = moment(data, 'DD-MM-YYYY').toDate();
        //let isoDate: string  = JSON.parse(JSON.stringify(StrDate));
        return StrDate;
    }

    static retiraCaracteres(valor: string){
        let strValor: string = "(61) 3333-9999";
        strValor.replace("(", '');
        return valor;
    }

    static comparaDatas(dataInicio: string, dataFim: string): boolean{
        //debugger
        moment.locale('pt-BR');
        let StrDateInicio: Date  = moment(dataInicio, 'DD-MM-YYYY').toDate();
        let StrDateFim: Date  = moment(dataFim, 'DD-MM-YYYY').toDate();
        
        if(StrDateInicio > StrDateFim){
            return true;
        }else{
            return false;
        }
        
    }
    
}