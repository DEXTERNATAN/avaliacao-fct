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



CREATE VIEW `vw_avaliacao`  AS  
select 	`tba`.`id_resultado` AS `id_resultado`,
		`tba`.`pontuacao` AS `pontuacao`,
		date_format(`tba`.`dt_resultado`,'%d/%m/%Y') AS `dt_resultado`,
		`tba`.`ajuste` AS `ajuste`,
		`tba`.`ociosidade` AS `ociosidade`,
		`tba`.`referencia_fct_gfe_pontuacao` AS `referencia_fct_gfe_pontuacao`,
		`tba`.`TB_COLABORADOR_id_colaborador` AS `TB_COLABORADOR_id_colaborador`,
		`clb`.`nome` AS `no_colaborador`,
		(select `dv`.`sigla` from `tb_divisao` `dv` where (`dv`.`id_divisao` = `clb`.`TB_DIVISAO_id_divisao`)) AS `sigla_divisao`,
		(select sum(`t1`.`valor_rateio_pessoa`) from `tb_faixa` `t1` where (`t1`.`limite_superior` <= (
				select `tb_faixa`.`limite_superior` from `tb_faixa` where (`tb_faixa`.`id_faixa` = `clb`.`TB_FAIXA_id_faixa`)))) AS `valor_rateio` 
from ((`tb_resultado` `tba` join `tb_colaborador` `clb`) 
	join `tb_faixa` `tbf`) 
where ((`clb`.`id_colaborador` = `tba`.`TB_COLABORADOR_id_colaborador`) 
and (`tbf`.`id_faixa` = `clb`.`TB_FAIXA_id_faixa`)) 
order by `clb`.`nome`,`tba`.`dt_resultado` ;
