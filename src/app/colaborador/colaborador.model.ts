import { Referencia } from './../referencia/referencia.model';
import { Divisao } from './../divisao/divisao.model';

export class Colaborador {
    id: number;
    nome: string;
    matricula: string;
    telefone: string;
    especialidade: string;
    salario: string;
    percentualSalario: string;
    referencia: Referencia;
    divisao: Divisao;
}
