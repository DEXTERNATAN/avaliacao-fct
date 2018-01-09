use avaliacaofct; 
select * from tb_resultado;
select * from tb_colaborador where id_colaborador = 2;
select * from vw_colaborador
select * from tb_colaborador where id_colaborador in (1,2,4,7);
Select * from vw_avaliacao GROUP BY TB_COLABORADOR_id_colaborador ORDER BY id_resultado;
select * from vw_avaliacao where TB_COLABORADOR_id_colaborador = 1;

-- drop view vw_avaliacao;

-- create view vw_avaliacao as
select 
	tba.*,
    clb.nome as no_colaborador,
	divs.sigla as sigla_divisao
from 
	tb_resultado tba 
inner join tb_colaborador clb on (clb.id_colaborador = tba.TB_COLABORADOR_id_colaborador)
inner join tb_divisao divs on (divs.id_divisao = tba.TB_COLABORADOR_TB_DIVISAO_id_divisao)
