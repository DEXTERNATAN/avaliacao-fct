use avaliacaofct; 
select * from tb_resultado;
select * from tb_colaborador where id_colaborador = 2;
select * from vw_colaborador;
select * from tb_colaborador where id_colaborador in (1,2,4,7);
Select * from vw_avaliacao GROUP BY TB_COLABORADOR_id_colaborador ORDER BY id_resultado;
select * from vw_avaliacao where TB_COLABORADOR_id_colaborador = 1;

drop view VW_AVALIACAO;

create view VW_AVALIACAO as
select 
	tba.*,
    clb.nome as no_colaborador,
	(select dv.sigla from TB_DIVISAO dv where dv.id_divisao = clb.TB_DIVISAO_id_divisao) AS sigla_divisao
from 
	TB_RESULTADO tba 
inner join TB_COLABORADOR clb on (clb.id_colaborador = tba.TB_COLABORADOR_id_colaborador)
