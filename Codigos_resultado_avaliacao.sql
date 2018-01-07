use avaliacaofct; 

-- select * from tb_resultado tba where TB_COLABORADOR_id_colaborador = 1;
-- select * from tb_colaborador;
-- select * from tb_divisao;

-- select * from vw_avaliacao where TB_COLABORADOR_id_colaborador = 1

-- drop view vw_avaliacao;

create view vw_avaliacao as
select 
	tba.pontuacao,
    tba.dt_resultado,
    tba.ajuste,
    tba.ociosidade,
    tba.referencia_fct_gfe_pontuacao,
    tba.TB_COLABORADOR_id_colaborador,
    tba.TB_COLABORADOR_TB_REFERENCIA_FCT_GFE_id_referencia_fct_gfe,
    tba.TB_COLABORADOR_TB_DIVISAO_id_divisao,
    clb.nome as no_colaborador,
	divs.sigla as sigla_divisao
from 
	tb_resultado tba 
inner join tb_colaborador clb on (clb.id_colaborador = tba.TB_COLABORADOR_id_colaborador)
inner join tb_divisao divs on (divs.id_divisao = tba.TB_COLABORADOR_TB_DIVISAO_id_divisao)
group by 
    tba.TB_COLABORADOR_id_colaborador
