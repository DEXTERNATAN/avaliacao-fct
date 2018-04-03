use avaliacaofct;

SET @sql = NULL;

SELECT
  GROUP_CONCAT(DISTINCT
    CONCAT(
      (SELECT nome FROM avaliacaofct.TB_TECNOLOGIA where id_tecnologia = TB_TECNOLOGIA_id_tecnologia)
    )
  ) 
  -- INTO @sql
FROM 
	TB_TECNOLOGIA_has_TB_COLABORADOR tbTC 
WHERE tbTC.TB_RESULTADO_id_resultado = 164

-- SET @sql = CONCAT('SELECT 
-- 						TB_TECNOLOGIA_id_tecnologia,
-- 						(SELECT nome FROM avaliacaofct.TB_TECNOLOGIA where id_tecnologia = TB_TECNOLOGIA_id_tecnologia)', @sql, ' 
-- 					FROM 
-- 						TB_TECNOLOGIA_has_TB_COLABORADOR tbTC 
-- 					WHERE tbTC.TB_RESULTADO_id_resultado = 164');
-- 
-- PREPARE stmt FROM @sql;
-- EXECUTE stmt;
-- DEALLOCATE PREPARE stmt;