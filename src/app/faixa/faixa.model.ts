export class Faixa {
    id_faixa: number;
    limite_inferior: string;
    limite_superior: number;
    pontuacao_referencia: string;
    qtde_pessoas: string;
    valor_rateio_pessoa: string;
    percentual: string;
    tb_colaborador_id_colaborador: string;
    tb_distribuicao_id_distribuicao: string;


    constructor(limite_inferior: string, limite_superior: number, pontuacao_referencia: string, tb_distribuicao_id_distribuicao: string) {
                    this.limite_inferior = limite_inferior;
                    this.limite_superior = limite_superior;
                    this.pontuacao_referencia = pontuacao_referencia;
                    this.tb_distribuicao_id_distribuicao = tb_distribuicao_id_distribuicao;
                }

}
