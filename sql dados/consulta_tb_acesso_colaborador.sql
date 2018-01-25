-- 1 - incluir o campo st_ativo na consulta abaixo e listar apenas os usuarios ativos na query
-- 2 - Fazer subquery para trazer a divisao
-- 3 - corrigir o erro de login quando o mesmo não estiver ativo
SELECT 
    tac.id_acesso,
    tac.login,
    tac.senha,
    tac.status_ativo,
    tbc.TB_DIVISAO_id_divisao,
    tdv.sigla,
    tbp.id_perfil,
    tbp.ds_perfil
FROM
    tb_acesso tac 
join tb_colaborador tbc on (tac.id_acesso = tbc.TB_ACESSO_id_acesso)
join tb_perfil tbp on (tbp.id_perfil = tbc.TB_PERFIL_id_perfil)
join tb_divisao tdv on (tdv.id_divisao = tbc.TB_DIVISAO_id_divisao)
where 
	tac.login='3333333000' and tac.senha='00000000'
and tac.status_ativo = 1
-- select * from tb_perfil
-- select * from tb_divisao
-- select * from tb_acesso where id_acesso = 4
-- select * from tb_colaborador where TB_ACESSO_id_acesso = 4
