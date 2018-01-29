SELECT t1.id_papel,
               t1.tipo,
               t1.nome,
               t1.descricao,
               t2.id_atributo,
               t2.letra,
               t2.descricao descricao_atributo
FROM `TB_PAPEL` t1,
            `TB_ATRIBUTO` t2,
            `TB_ATRIBUTO_has_TB_PAPEL` t3
WHERE t1.id_papel = t3.TB_PAPEL_id_papel
AND       t2.id_atributo = t3.TB_ATRIBUTO_id_atributo	
GROUP BY t1.nome, t2.letra