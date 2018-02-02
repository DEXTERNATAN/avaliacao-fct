CREATE DEFINER=`root`@`localhost` PROCEDURE `registraAvaliacao`(IN objAvaliacao INT)
BEGIN

-- INSERT INTO `tb_colaborador_has_tb_atributo` (`TB_COLABORADOR_id_colaborador`, `TB_COLABORADOR_TB_REFERENCIA_FCT_GFE_id_referencia_fct_gfe`, `TB_COLABORADOR_TB_DIVISAO_id_divisao`, `TB_ATRIBUTO_id_atributo`, `TB_ATRIBUTO_TB_ABRANGENCIA_id_abrangencia`, `TB_ATRIBUTO_TB_COMPLEXIDADE_id_complexidade`, `TB_ATRIBUTO_TB_IMPACTO_id_impacto`) VALUES ('2', '59', '3', '1', '1', '1', '1');

SELECT `tb_colaborador_has_tb_atributo`.`TB_COLABORADOR_id_colaborador`,
    `tb_colaborador_has_tb_atributo`.`TB_COLABORADOR_TB_REFERENCIA_FCT_GFE_id_referencia_fct_gfe`,
    `tb_colaborador_has_tb_atributo`.`TB_COLABORADOR_TB_DIVISAO_id_divisao`,
    `tb_colaborador_has_tb_atributo`.`TB_ATRIBUTO_id_atributo`,
    `tb_colaborador_has_tb_atributo`.`TB_ATRIBUTO_TB_ABRANGENCIA_id_abrangencia`,
    `tb_colaborador_has_tb_atributo`.`TB_ATRIBUTO_TB_COMPLEXIDADE_id_complexidade`,
    `tb_colaborador_has_tb_atributo`.`TB_ATRIBUTO_TB_IMPACTO_id_impacto`
FROM `avaliacaofct`.`tb_colaborador_has_tb_atributo`
LIMIT objAvaliacao;
END