use avaliacaofct;

SELECT 
    `tb1`.`id_distribuicao` AS `id_distribuicao`,
    `tb1`.`valor` AS `valor`,
    (SELECT DISTINCT
            MIN(`avaliacaofct`.`tb_resultado`.`pontuacao`)
        FROM
            `avaliacaofct`.`tb_resultado`) AS `pontuacao_minima`,
    (SELECT DISTINCT
            MAX(`avaliacaofct`.`tb_resultado`.`pontuacao`)
        FROM
            `avaliacaofct`.`tb_resultado`) AS `pontuacao_maxima`,
    `tb1`.`qtde_faixas` AS `qtde_faixas`,
    DATE_FORMAT(`tb1`.`dt_registro`, '%d/%m/%Y') AS `dt_registro`,
    (SELECT 
            CONCAT(`avaliacaofct`.`tb_referencia_fct_gfe`.`num_referencia`,
                        ' - ',
                        `avaliacaofct`.`tb_referencia_fct_gfe`.`cargo`,
                        ' (R$ 		',
                        `avaliacaofct`.`tb_referencia_fct_gfe`.`valor_referencia`,
                        ')') AS `referencia_fct`
        FROM
            `avaliacaofct`.`tb_referencia_fct_gfe`
        WHERE
            (`avaliacaofct`.`tb_referencia_fct_gfe`.`id_referencia_fct_gfe` = (SELECT 
                    `tb3`.`TB_REFERENCIA_FCT_GFE_id_referencia_fct_gfe`
                FROM
                    (`avaliacaofct`.`tb_resultado` `tb2`
                    JOIN `avaliacaofct`.`tb_colaborador` `tb3`)
                WHERE
                    ((`tb2`.`TB_COLABORADOR_id_colaborador` = `tb3`.`id_colaborador`)
                        AND (`tb2`.`pontuacao` = `pontuacao_minima`))))) AS `referencia_fct`
FROM
    `avaliacaofct`.`tb_distribuicao` `tb1`