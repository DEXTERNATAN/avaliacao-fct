import { Abrangencia } from './../abrangencia/abrangencia.model';
import { Complexidade } from './../complexidade/complexidade.model';
import { Impacto } from './../impacto/impacto.model';

export class Atributo {
    id_atributo: number;
    letra: string;
    descricao: string;
    TB_ABRANGENCIA_id_abrangencia: Abrangencia;
    TB_COMPLEXIDADE_id_complexidade: Complexidade;
    TB_IMPACTO_id_impacto: Impacto;
}
