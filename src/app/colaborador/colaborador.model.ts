import { Referencia } from './../referencia/referencia.model';
import { Divisao } from './../divisao/divisao.model';

export class Colaborador {
    id_colaborador: number;
    nome: string;
    matricula: string;
    telefone: string;
    especialidade: string;
    salario: string;
    percentual_salario: string;
    TB_REFERENCIA_FCT_GFE_id_referencia_fct_gfe: Referencia;
    TB_DIVISAO_id_divisao: Divisao;
}
