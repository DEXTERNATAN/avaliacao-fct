-- Tecnologia,
-- Papeis,
-- Atributos,

SELECT 
    *
    ,(SELECT 
            GROUP_CONCAT(DISTINCT CONCAT((SELECT 
                                    nome
                                FROM
                                    avaliacaofct.TB_TECNOLOGIA
                                WHERE
                                    id_tecnologia = TB_TECNOLOGIA_id_tecnologia)))
        FROM
            TB_TECNOLOGIA_has_TB_COLABORADOR tbTC
        WHERE
            tbTC.TB_RESULTADO_id_resultado = tbr.id_resultado) as tecnologias
            
FROM
    avaliacaofct.TB_RESULTADO tbr
WHERE
    tbr.id_resultado = 164;
    