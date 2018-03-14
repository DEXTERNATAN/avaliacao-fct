CREATE VIEW `avaliacaofct`.`VW_DISTRIBUICAO` AS
SELECT `TB1
`.`id_distribuicao` AS `id_distribuicao`,
        `TB1`.`valor` AS `valor`,
(SELECT DISTINCT MIN(`avaliacaofct
`.`TB_RESULTADO`.`pontuacao`)
            FROM
                `avaliacaofct`.`TB_RESULTADO`) AS `pontuacao_minima`,
(SELECT DISTINCT MAX(`avaliacaofct
`.`TB_RESULTADO`.`pontuacao`)
            FROM
                `avaliacaofct`.`TB_RESULTADO`) AS `pontuacao_maxima`,
        `TB1`.`qtde_faixas` AS `qtde_faixas`,
        DATE_FORMAT
(`TB1`.`dt_registro`, '%d/%m/%Y') AS `dt_registro`,
(SELECT CONCAT(`avaliacaofct
`.`TB_REFERENCIA_FCT_GFE`.`num_referencia`,
                            ' - ',
                            `avaliacaofct`.`TB_REFERENCIA_FCT_GFE`.`cargo`,
                            ' (R$ 		',
                            `avaliacaofct`.`TB_REFERENCIA_FCT_GFE`.`valor_referencia`,
                            ')') AS `referencia_fct`
            FROM
                `avaliacaofct`.`TB_REFERENCIA_FCT_GFE`
            WHERE
(`avaliacaofct`.`TB_REFERENCIA_FCT_GFE`.`id_referencia_fct_gfe` =
(SELECT `tb3
`.`TB_REFERENCIA_FCT_GFE_id_referencia_fct_gfe`
                    FROM
(`avaliacaofct`.`TB_RESULTADO` `tb2`
                        JOIN `avaliacaofct`.`TB_COLABORADOR` `tb3`)
                    WHERE
((`tb2`.`TB_COLABORADOR_id_colaborador` = `tb3`.`id_colaborador`)
                            AND
(`tb2`.`pontuacao` = `pontuacao_minima`))))) AS `referencia_fct`
    FROM
        `avaliacaofct`.`TB_DISTRIBUICAO` `TB1`