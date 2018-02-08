-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Tempo de geração: 08/02/2018 às 21:08
-- Versão do servidor: 10.1.28-MariaDB
-- Versão do PHP: 7.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `avaliacaofct`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `TB_ABRANGENCIA`
--

CREATE TABLE `TB_ABRANGENCIA` (
  `id_abrangencia` int(9) NOT NULL,
  `atributo` varchar(1) NOT NULL,
  `classificacao` int(2) NOT NULL,
  `tipo` varchar(50) NOT NULL,
  `nome` varchar(50) NOT NULL,
  `descricao` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Fazendo dump de dados para tabela `TB_ABRANGENCIA`
--

INSERT INTO `TB_ABRANGENCIA` (`id_abrangencia`, `atributo`, `classificacao`, `tipo`, `nome`, `descricao`) VALUES
(1, 'a', 1, 'Desenvolvimento', 'Moderado', 'Conhece parcialmente o negócio; SDSEP\nNecessita de auxilio proposição de soluções;\nExecuta proposições com oportunidades de melhoria;'),
(2, 'a', 2, 'Desenvolvimento', 'Significativa', 'Conhecimento do negócio;\nVelocidade;\nReferência para discutir necessidades dos projetos em que atua(Evoluções);\nParticipa na proposição de soluções técnicas;\nTransita entre diferente tecnologias/assuntos;'),
(3, 'a', 3, 'Desenvolvimento', 'Muito', 'Reduzir custo;\nReuso;\nVelocidade (está relacionado ao conhecimento do negocio x tempo resposta);\nCenário novo;\nReferências para discutir necessidades de novos projetos;\nFacilidade de encontrar soluções;\nTransita entre diferente tecnologias/assuntos;\nHistórico de sucesso nas proposições;\nVisão sistêmica;\nDomínio do negócio;'),
(4, 'b', 1, 'Desenvolvimento', 'Moderado', 'Conhecimento Documentações Ágeis;\nAtua somente na atualização das documentações;\nNecessita revisão;\nNecessidade de apoio técnico(depende de auxílio);'),
(5, 'b', 2, 'Desenvolvimento', 'Significativa', 'Conhecimento do Negócio;\nTem o domínio sobre a criação e execução dos casos de testes;\nConsegue fazer revisão das documentações que outras pessoas criaram;'),
(6, 'b', 3, 'Desenvolvimento', 'Muito', 'Conhecimento de diferentes formas de documentação/metodologias (Swagger, documentação sob Protótipo, documentações ágeis);\nAplicação de UX no processo;\nGama de conhecimento na proposição de alternativas para testes(Visão mais sistêmica, relacionado a ferramentas e processo);\nDomínio do Negócio;\nConsegue fazer uma análise crítica na documentação/propor soluções e ainda discutir necessidades da solicitação;'),
(7, 'e', 1, 'Desenvolvimento', 'Moderado', 'Conhecimento da linguagem;\nDependência técnica;\nConhecimento parcial do negócio;'),
(8, 'e', 2, 'Desenvolvimento', 'Significativa', 'Conhecimento mediano da linguagem;\nReuso;\nConhecimento mediano do negócio;'),
(9, 'e', 3, 'Desenvolvimento', 'Muito', 'Versões de tecnologia;\nConhecimento pleno da linguagem;\nAlto Reuso;\nConhecimento pleno do Negócio;'),
(10, 'f', 1, 'Desenvolvimento', 'Moderado', 'Conhecimento da tecnologia(Unidade de implementação, documentação de API, UMLI);'),
(11, 'f', 2, 'Desenvolvimento', 'Significativa', 'Conhecimento mediano da tecnologia(Unidade de implementação,documentação de API, UMLI);'),
(12, 'f', 3, 'Desenvolvimento', 'Muito', 'Conhecimento Pleno da tecnologia(Unidade de implementação,documentação de API, UMLI);'),
(13, 'g', 1, 'Desenvolvimento', 'Moderado', 'Conhecimento do assunto(uso do sistema, tecnologia);\nCapacidade de comunicação;'),
(14, 'g', 2, 'Desenvolvimento', 'Significativa', 'Conhecimento mediano do assunto(uso do sistema, tecnologia);\nCapacidade mediana de comunicação;'),
(15, 'g', 3, 'Desenvolvimento', 'Muito', 'Conhecimento Pleno do assunto(uso do sistema, tecnologia);\nCapacidade pleno de comunicação;'),
(16, 'h', 1, 'Desenvolvimento', 'Moderado', 'Conhecimento do assunto(uso do sistema, tecnologia);\nCapacidade de comunicação;\nConhecimento do processo de internalização do SERPRO;'),
(17, 'h', 2, 'Desenvolvimento', 'Significativa', 'Conhecimento Mediano do assunto(uso do sistema, tecnologia);\nCapacidade Mediana de comunicação;\nConhecimento Mediano do processo de internalização do SERPRO;'),
(18, 'h', 3, 'Desenvolvimento', 'Muito', 'Conhecimento Pleno do assunto(uso do sistema, tecnologia);\nCapacidade pleno de comunicação;\nConhecimento Pleno do processo de internalização do SERPRO;'),
(19, 'i', 1, 'Desenvolvimento', 'Moderado', 'Conhecimento parcial do negócio;'),
(20, 'i', 2, 'Desenvolvimento', 'Significativa', 'Conhecimento Mediano do negócio;\nConsegue prever riscos;'),
(21, 'i', 3, 'Desenvolvimento', 'Muito', 'Conhecimento Pleno do Negócio;\nConhecimento da pilha tecnológica do departamento;\nConhecimento da lógica de componentização para reuso;\nHistórico de assertividade nos prazos;\nVisão sistêmica;\nConsegue prever riscos;'),
(22, 'j', 1, 'Desenvolvimento', 'Moderado', 'Conhecimento da linguagem;\nDependência técnica;\nConhecimento parcial do negócio;'),
(23, 'j', 2, 'Desenvolvimento', 'Significativa', 'Conhecimento mediano da linguagem;\nReuso;\nConhecimento mediano do negócio;'),
(24, 'j', 3, 'Desenvolvimento', 'Muito', 'Versões tecnologia;\nConhecimento pleno da linguagem;\nAlto Reuso;\nConhecimento pleno do Negócio;'),
(25, 'l', 1, 'Desenvolvimento', 'Moderado', 'Conhecimento de ciclo de vida de softwares;\nConhecimento em controle de versões/versionamento(Gestão de configuração);'),
(26, 'l', 2, 'Desenvolvimento', 'Significativa', 'Conhecimento Mediano em controle de versões/versionamento(Gestão de configuração);'),
(27, 'l', 3, 'Desenvolvimento', 'Muito', 'Conhecimento de ciclo de vida de softwares;\nConhecimento Pleno em controle de versões/versionamento(Gestão de configuração);\nConhecimento de ciclo de vida de softwares open source(licenças, releases, funcionamento de forks, desenvolvimento em comunidade);\nIntegração contínua;'),
(28, 'm', 1, 'Desenvolvimento', 'Moderado', 'Configure bem a ferramenta SONAR ou similar;'),
(29, 'm', 2, 'Desenvolvimento', 'Significativa', 'Familiarizado com a ferramenta SONAR ou similar e sabe produzir códigos de acordo com os parâmetros recomendados pela ferramenta;\nAtuação como code review;\nConhecimento de padrões de codificação da tecnologia utilizada;'),
(30, 'm', 3, 'Desenvolvimento', 'Muito', 'Conhecimento pleno da tecnologia e consegue fazer proposição de melhoria(processo de melhoria conhecimentos);'),
(31, 'n', 1, 'Desenvolvimento', 'Moderado', 'Conhecimento dos Processos;\nConhecimento do Negócio;'),
(32, 'n', 2, 'Desenvolvimento', 'Significativa', 'Conhecimento mediano dos Processos;\nConhecimento mediano do Negócio;'),
(33, 'n', 3, 'Design', 'Muito', 'Conhecimento pleno dos Processos;\nConhecimento Pleno do Negócio;\nConhecimento dos diferentes perfis e a gerencia dos mesmos(Capacidade de atendimento);'),
(52, 'c', 1, 'Desenvolvimento', 'Moderado', 'Sem informação Cadastrada'),
(53, 'c', 2, 'Desenvolvimento', 'Significativa', 'Sem informação Cadastrada'),
(54, 'c', 3, 'Desenvolvimento', 'Muito', 'Sem informação Cadastrada'),
(55, 'd', 1, 'Desenvolvimento', 'Moderado', 'Sem informação Cadastrada'),
(56, 'd', 2, 'Desenvolvimento', 'Significativa', 'Sem informação Cadastrada'),
(57, 'd', 3, 'Desenvolvimento', 'Muito', 'Sem informação Cadastrada'),
(58, 'k', 1, 'Desenvolvimento', 'Moderado', 'Sem informação Cadastrada'),
(59, 'k', 2, 'Desenvolvimento', 'Significativa', 'Sem informação Cadastrada'),
(60, 'k', 3, 'Desenvolvimento', 'Muito', 'Sem informação Cadastrada'),
(61, 'c', 1, 'Desenvolvimento', 'Moderado', 'iohkj');

-- --------------------------------------------------------

--
-- Estrutura para tabela `TB_ACESSO`
--

CREATE TABLE `TB_ACESSO` (
  `id_acesso` int(9) NOT NULL,
  `login` varchar(11) NOT NULL,
  `senha` varchar(8) NOT NULL,
  `status_ativo` tinyint(1) NOT NULL COMMENT '1 - Ativo    0 - Inativo'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Fazendo dump de dados para tabela `TB_ACESSO`
--

INSERT INTO `TB_ACESSO` (`id_acesso`, `login`, `senha`, `status_ativo`) VALUES
(1, '11111111135', '12345678', 0),
(2, '22222222256', '01020304', 1),
(3, '3333333000', '00000000', 0),
(4, '86860224134', '22222222', 1),
(5, '98287028191', '12345678', 1),
(6, '11111111119', '12345678', 0);

-- --------------------------------------------------------

--
-- Estrutura para tabela `TB_ATRIBUTO`
--

CREATE TABLE `TB_ATRIBUTO` (
  `id_atributo` int(9) NOT NULL,
  `letra` varchar(1) NOT NULL,
  `descricao` text NOT NULL,
  `TB_ABRANGENCIA_id_abrangencia` int(9) NOT NULL,
  `TB_COMPLEXIDADE_id_complexidade` int(9) NOT NULL,
  `TB_IMPACTO_id_impacto` int(9) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Fazendo dump de dados para tabela `TB_ATRIBUTO`
--

INSERT INTO `TB_ATRIBUTO` (`id_atributo`, `letra`, `descricao`, `TB_ABRANGENCIA_id_abrangencia`, `TB_COMPLEXIDADE_id_complexidade`, `TB_IMPACTO_id_impacto`) VALUES
(1, 'a', 'Analisar as demandas apresentadas pelas áreas de negócio e propor alternativas de solução técnica e estratégia de desenvolvimento', 1, 1, 1),
(2, 'a', 'Analisar as demandas apresentadas pelas áreas de negócio e propor alternativas de solução técnica e estratégia de desenvolvimento', 1, 1, 2),
(3, 'a', 'Analisar as demandas apresentadas pelas áreas de negócio e propor alternativas de solução técnica e estratégia de desenvolvimento', 1, 1, 3),
(4, 'a', 'Analisar as demandas apresentadas pelas áreas de negócio e propor alternativas de solução técnica e estratégia de desenvolvimento', 1, 2, 1),
(5, 'a', 'Analisar as demandas apresentadas pelas áreas de negócio e propor alternativas de solução técnica e estratégia de desenvolvimento', 1, 2, 2),
(6, 'a', 'Analisar as demandas apresentadas pelas áreas de negócio e propor alternativas de solução técnica e estratégia de desenvolvimento', 1, 2, 3),
(7, 'a', 'Analisar as demandas apresentadas pelas áreas de negócio e propor alternativas de solução técnica e estratégia de desenvolvimento', 1, 3, 1),
(8, 'a', 'Analisar as demandas apresentadas pelas áreas de negócio e propor alternativas de solução técnica e estratégia de desenvolvimento', 1, 3, 2),
(9, 'a', 'Analisar as demandas apresentadas pelas áreas de negócio e propor alternativas de solução técnica e estratégia de desenvolvimento', 1, 3, 3),
(10, 'a', 'Analisar as demandas apresentadas pelas áreas de negócio e propor alternativas de solução técnica e estratégia de desenvolvimento', 2, 1, 1),
(11, 'a', 'Analisar as demandas apresentadas pelas áreas de negócio e propor alternativas de solução técnica e estratégia de desenvolvimento', 2, 1, 2),
(12, 'a', 'Analisar as demandas apresentadas pelas áreas de negócio e propor alternativas de solução técnica e estratégia de desenvolvimento', 2, 1, 3),
(13, 'a', 'Analisar as demandas apresentadas pelas áreas de negócio e propor alternativas de solução técnica e estratégia de desenvolvimento', 2, 2, 1),
(14, 'a', 'Analisar as demandas apresentadas pelas áreas de negócio e propor alternativas de solução técnica e estratégia de desenvolvimento', 2, 2, 2),
(15, 'a', 'Analisar as demandas apresentadas pelas áreas de negócio e propor alternativas de solução técnica e estratégia de desenvolvimento', 2, 2, 3),
(16, 'a', 'Analisar as demandas apresentadas pelas áreas de negócio e propor alternativas de solução técnica e estratégia de desenvolvimento', 2, 3, 1),
(17, 'a', 'Analisar as demandas apresentadas pelas áreas de negócio e propor alternativas de solução técnica e estratégia de desenvolvimento', 2, 3, 2),
(18, 'a', 'Analisar as demandas apresentadas pelas áreas de negócio e propor alternativas de solução técnica e estratégia de desenvolvimento', 2, 3, 3),
(19, 'a', 'Analisar as demandas apresentadas pelas áreas de negócio e propor alternativas de solução técnica e estratégia de desenvolvimento', 3, 1, 1),
(20, 'a', 'Analisar as demandas apresentadas pelas áreas de negócio e propor alternativas de solução técnica e estratégia de desenvolvimento', 3, 1, 2),
(21, 'a', 'Analisar as demandas apresentadas pelas áreas de negócio e propor alternativas de solução técnica e estratégia de desenvolvimento', 3, 1, 3),
(22, 'a', 'Analisar as demandas apresentadas pelas áreas de negócio e propor alternativas de solução técnica e estratégia de desenvolvimento', 3, 2, 1),
(23, 'a', 'Analisar as demandas apresentadas pelas áreas de negócio e propor alternativas de solução técnica e estratégia de desenvolvimento', 3, 2, 2),
(24, 'a', 'Analisar as demandas apresentadas pelas áreas de negócio e propor alternativas de solução técnica e estratégia de desenvolvimento', 3, 2, 3),
(25, 'a', 'Analisar as demandas apresentadas pelas áreas de negócio e propor alternativas de solução técnica e estratégia de desenvolvimento', 3, 3, 3),
(26, 'b', 'Elicitar requisitos e criar modelos de uso e de testes de sistemas', 4, 4, 4),
(27, 'b', 'Elicitar requisitos e criar modelos de uso e de testes de sistemas', 4, 4, 5),
(28, 'b', 'Elicitar requisitos e criar modelos de uso e de testes de sistemas', 4, 4, 6),
(29, 'b', 'Elicitar requisitos e criar modelos de uso e de testes de sistemas', 4, 5, 4),
(30, 'b', 'Elicitar requisitos e criar modelos de uso e de testes de sistemas', 4, 5, 5),
(31, 'b', 'Elicitar requisitos e criar modelos de uso e de testes de sistemas', 4, 5, 6),
(32, 'b', 'Elicitar requisitos e criar modelos de uso e de testes de sistemas', 4, 6, 4),
(33, 'b', 'Elicitar requisitos e criar modelos de uso e de testes de sistemas', 4, 6, 5),
(34, 'b', 'Elicitar requisitos e criar modelos de uso e de testes de sistemas', 4, 6, 6),
(35, 'b', 'Elicitar requisitos e criar modelos de uso e de testes de sistemas', 5, 4, 4),
(36, 'b', 'Elicitar requisitos e criar modelos de uso e de testes de sistemas', 5, 4, 5),
(37, 'b', 'Elicitar requisitos e criar modelos de uso e de testes de sistemas', 5, 4, 6),
(38, 'b', 'Elicitar requisitos e criar modelos de uso e de testes de sistemas', 5, 5, 4),
(39, 'b', 'Elicitar requisitos e criar modelos de uso e de testes de sistemas', 5, 5, 5),
(40, 'b', 'Elicitar requisitos e criar modelos de uso e de testes de sistemas', 5, 5, 6),
(41, 'b', 'Elicitar requisitos e criar modelos de uso e de testes de sistemas', 5, 6, 4),
(42, 'b', 'Elicitar requisitos e criar modelos de uso e de testes de sistemas', 5, 6, 5),
(43, 'b', 'Elicitar requisitos e criar modelos de uso e de testes de sistemas', 5, 6, 6),
(44, 'b', 'Elicitar requisitos e criar modelos de uso e de testes de sistemas', 6, 4, 4),
(45, 'b', 'Elicitar requisitos e criar modelos de uso e de testes de sistemas', 6, 4, 5),
(46, 'b', 'Elicitar requisitos e criar modelos de uso e de testes de sistemas', 6, 4, 6),
(47, 'b', 'Elicitar requisitos e criar modelos de uso e de testes de sistemas', 6, 5, 4),
(48, 'b', 'Elicitar requisitos e criar modelos de uso e de testes de sistemas', 6, 5, 5),
(49, 'b', 'Elicitar requisitos e criar modelos de uso e de testes de sistemas', 6, 5, 6),
(50, 'b', 'Elicitar requisitos e criar modelos de uso e de testes de sistemas', 6, 6, 4),
(51, 'b', 'Elicitar requisitos e criar modelos de uso e de testes de sistemas', 6, 6, 5),
(52, 'b', 'Elicitar requisitos e criar modelos de uso e de testes de sistemas', 6, 6, 6),
(53, 'a', 'Analisar as demandas apresentadas pelas áreas de negócio e propor alternativas de solução técnica e estratégia de desenvolvimento', 3, 3, 1),
(54, 'a', 'Analisar as demandas apresentadas pelas áreas de negócio e propor alternativas de solução técnica e estratégia de desenvolvimento', 3, 3, 2),
(55, 'c', 'Elaborar projeto lógico e físico de dados e de sistemas', 52, 34, 37),
(56, 'c', 'Elaborar projeto lógico e físico de dados e de sistemas', 52, 34, 38),
(57, 'c', 'Elaborar projeto lógico e físico de dados e de sistemas', 52, 34, 39),
(58, 'c', 'Elaborar projeto lógico e físico de dados e de sistemas', 52, 35, 37),
(59, 'c', 'Elaborar projeto lógico e físico de dados e de sistemas', 52, 35, 38),
(60, 'c', 'Elaborar projeto lógico e físico de dados e de sistemas', 52, 35, 39),
(61, 'c', 'Elaborar projeto lógico e físico de dados e de sistemas', 52, 36, 37),
(62, 'c', 'Elaborar projeto lógico e físico de dados e de sistemas', 52, 36, 38),
(63, 'c', 'Elaborar projeto lógico e físico de dados e de sistemas', 52, 36, 39),
(64, 'c', 'Elaborar projeto lógico e físico de dados e de sistemas', 53, 34, 37),
(65, 'c', 'Elaborar projeto lógico e físico de dados e de sistemas', 53, 34, 38),
(66, 'c', 'Elaborar projeto lógico e físico de dados e de sistemas', 53, 34, 39),
(67, 'c', 'Elaborar projeto lógico e físico de dados e de sistemas', 53, 35, 37),
(68, 'c', 'Elaborar projeto lógico e físico de dados e de sistemas', 53, 35, 38),
(69, 'c', 'Elaborar projeto lógico e físico de dados e de sistemas', 53, 35, 39),
(70, 'c', 'Elaborar projeto lógico e físico de dados e de sistemas', 53, 36, 37),
(71, 'c', 'Elaborar projeto lógico e físico de dados e de sistemas', 53, 36, 38),
(72, 'c', 'Elaborar projeto lógico e físico de dados e de sistemas', 53, 36, 39),
(73, 'c', 'Elaborar projeto lógico e físico de dados e de sistemas', 54, 34, 37),
(74, 'c', 'Elaborar projeto lógico e físico de dados e de sistemas', 54, 34, 38),
(75, 'c', 'Elaborar projeto lógico e físico de dados e de sistemas', 54, 34, 39),
(76, 'c', 'Elaborar projeto lógico e físico de dados e de sistemas', 54, 35, 37),
(77, 'c', 'Elaborar projeto lógico e físico de dados e de sistemas', 54, 35, 38),
(78, 'c', 'Elaborar projeto lógico e físico de dados e de sistemas', 54, 35, 39),
(79, 'c', 'Elaborar projeto lógico e físico de dados e de sistemas', 54, 36, 37),
(80, 'c', 'Elaborar projeto lógico e físico de dados e de sistemas', 54, 36, 38),
(81, 'c', 'Elaborar projeto lógico e físico de dados e de sistemas', 54, 36, 39),
(82, 'd', 'Definir a arquitetura de softwares e de sistemas', 55, 37, 40),
(83, 'd', 'Definir a arquitetura de softwares e de sistemas', 55, 37, 41),
(84, 'd', 'Definir a arquitetura de softwares e de sistemas', 55, 37, 42),
(85, 'd', 'Definir a arquitetura de softwares e de sistemas', 55, 38, 40),
(86, 'd', 'Definir a arquitetura de softwares e de sistemas', 55, 38, 41),
(87, 'd', 'Definir a arquitetura de softwares e de sistemas', 55, 38, 42),
(88, 'd', 'Definir a arquitetura de softwares e de sistemas', 55, 39, 40),
(89, 'd', 'Definir a arquitetura de softwares e de sistemas', 55, 39, 41),
(90, 'd', 'Definir a arquitetura de softwares e de sistemas', 55, 39, 42),
(91, 'd', 'Definir a arquitetura de softwares e de sistemas', 56, 37, 40),
(92, 'd', 'Definir a arquitetura de softwares e de sistemas', 56, 37, 41),
(93, 'd', 'Definir a arquitetura de softwares e de sistemas', 56, 37, 42),
(94, 'd', 'Definir a arquitetura de softwares e de sistemas', 56, 38, 40),
(95, 'd', 'Definir a arquitetura de softwares e de sistemas', 56, 38, 41),
(96, 'd', 'Definir a arquitetura de softwares e de sistemas', 56, 38, 42),
(97, 'd', 'Definir a arquitetura de softwares e de sistemas', 56, 39, 40),
(98, 'd', 'Definir a arquitetura de softwares e de sistemas', 56, 39, 41),
(99, 'd', 'Definir a arquitetura de softwares e de sistemas', 56, 39, 42),
(100, 'd', 'Definir a arquitetura de softwares e de sistemas', 57, 37, 40),
(101, 'd', 'Definir a arquitetura de softwares e de sistemas', 57, 37, 41),
(102, 'd', 'Definir a arquitetura de softwares e de sistemas', 57, 37, 42),
(103, 'd', 'Definir a arquitetura de softwares e de sistemas', 57, 38, 40),
(104, 'd', 'Definir a arquitetura de softwares e de sistemas', 57, 38, 41),
(105, 'd', 'Definir a arquitetura de softwares e de sistemas', 57, 38, 42),
(106, 'd', 'Definir a arquitetura de softwares e de sistemas', 57, 39, 40),
(107, 'd', 'Definir a arquitetura de softwares e de sistemas', 57, 39, 41),
(108, 'd', 'Definir a arquitetura de softwares e de sistemas', 57, 39, 42),
(109, 'e', 'Especificar unidades de implementação de software', 7, 7, 7),
(110, 'e', 'Especificar unidades de implementação de software', 7, 7, 8),
(111, 'e', 'Especificar unidades de implementação de software', 7, 7, 9),
(112, 'e', 'Especificar unidades de implementação de software', 7, 8, 7),
(113, 'e', 'Especificar unidades de implementação de software', 7, 8, 8),
(114, 'e', 'Especificar unidades de implementação de software', 7, 8, 9),
(115, 'e', 'Especificar unidades de implementação de software', 7, 9, 7),
(116, 'e', 'Especificar unidades de implementação de software', 7, 9, 8),
(117, 'e', 'Especificar unidades de implementação de software', 7, 9, 9),
(118, 'e', 'Especificar unidades de implementação de software', 8, 7, 7),
(119, 'e', 'Especificar unidades de implementação de software', 8, 7, 8),
(120, 'e', 'Especificar unidades de implementação de software', 8, 7, 9),
(121, 'e', 'Especificar unidades de implementação de software', 8, 8, 7),
(122, 'e', 'Especificar unidades de implementação de software', 8, 8, 8),
(123, 'e', 'Especificar unidades de implementação de software', 8, 8, 9),
(124, 'e', 'Especificar unidades de implementação de software', 8, 9, 7),
(125, 'e', 'Especificar unidades de implementação de software', 8, 9, 8),
(126, 'e', 'Especificar unidades de implementação de software', 8, 9, 9),
(127, 'e', 'Especificar unidades de implementação de software', 9, 7, 7),
(128, 'e', 'Especificar unidades de implementação de software', 9, 7, 8),
(129, 'e', 'Especificar unidades de implementação de software', 9, 7, 9),
(130, 'e', 'Especificar unidades de implementação de software', 9, 8, 7),
(131, 'e', 'Especificar unidades de implementação de software', 9, 8, 8),
(132, 'e', 'Especificar unidades de implementação de software', 9, 8, 9),
(133, 'e', 'Especificar unidades de implementação de software', 9, 9, 7),
(134, 'e', 'Especificar unidades de implementação de software', 9, 9, 8),
(135, 'e', 'Especificar unidades de implementação de software', 9, 9, 9),
(136, 'f', 'Elaborar documentação relativa às etapas de desenvolvimento de sistemas', 10, 10, 10),
(137, 'f', 'Elaborar documentação relativa às etapas de desenvolvimento de sistemas', 10, 10, 11),
(138, 'f', 'Elaborar documentação relativa às etapas de desenvolvimento de sistemas', 10, 10, 12),
(139, 'f', 'Elaborar documentação relativa às etapas de desenvolvimento de sistemas', 10, 11, 10),
(140, 'f', 'Elaborar documentação relativa às etapas de desenvolvimento de sistemas', 10, 11, 11),
(141, 'f', 'Elaborar documentação relativa às etapas de desenvolvimento de sistemas', 10, 11, 12),
(142, 'f', 'Elaborar documentação relativa às etapas de desenvolvimento de sistemas', 10, 12, 10),
(143, 'f', 'Elaborar documentação relativa às etapas de desenvolvimento de sistemas', 10, 12, 11),
(144, 'f', 'Elaborar documentação relativa às etapas de desenvolvimento de sistemas', 10, 12, 12),
(145, 'f', 'Elaborar documentação relativa às etapas de desenvolvimento de sistemas', 11, 10, 10),
(146, 'f', 'Elaborar documentação relativa às etapas de desenvolvimento de sistemas', 11, 10, 11),
(147, 'f', 'Elaborar documentação relativa às etapas de desenvolvimento de sistemas', 11, 10, 12),
(148, 'f', 'Elaborar documentação relativa às etapas de desenvolvimento de sistemas', 11, 11, 10),
(149, 'f', 'Elaborar documentação relativa às etapas de desenvolvimento de sistemas', 11, 11, 11),
(150, 'f', 'Elaborar documentação relativa às etapas de desenvolvimento de sistemas', 11, 11, 12),
(151, 'f', 'Elaborar documentação relativa às etapas de desenvolvimento de sistemas', 11, 12, 10),
(152, 'f', 'Elaborar documentação relativa às etapas de desenvolvimento de sistemas', 11, 12, 11),
(153, 'f', 'Elaborar documentação relativa às etapas de desenvolvimento de sistemas', 11, 12, 12),
(154, 'f', 'Elaborar documentação relativa às etapas de desenvolvimento de sistemas', 12, 10, 10),
(155, 'f', 'Elaborar documentação relativa às etapas de desenvolvimento de sistemas', 12, 10, 11),
(156, 'f', 'Elaborar documentação relativa às etapas de desenvolvimento de sistemas', 12, 10, 12),
(157, 'f', 'Elaborar documentação relativa às etapas de desenvolvimento de sistemas', 12, 11, 10),
(158, 'f', 'Elaborar documentação relativa às etapas de desenvolvimento de sistemas', 12, 11, 11),
(159, 'f', 'Elaborar documentação relativa às etapas de desenvolvimento de sistemas', 12, 11, 12),
(160, 'f', 'Elaborar documentação relativa às etapas de desenvolvimento de sistemas', 12, 12, 10),
(161, 'f', 'Elaborar documentação relativa às etapas de desenvolvimento de sistemas', 12, 12, 11),
(162, 'f', 'Elaborar documentação relativa às etapas de desenvolvimento de sistemas', 12, 12, 12),
(163, 'g', 'Planejar, elaborar e ministrar treinamentos relativos a sistemas de informação, ferramentas de acesso e manipulação de dados', 13, 13, 13),
(164, 'g', 'Planejar, elaborar e ministrar treinamentos relativos a sistemas de informação, ferramentas de acesso e manipulação de dados', 13, 13, 14),
(165, 'g', 'Planejar, elaborar e ministrar treinamentos relativos a sistemas de informação, ferramentas de acesso e manipulação de dados', 13, 13, 15),
(166, 'g', 'Planejar, elaborar e ministrar treinamentos relativos a sistemas de informação, ferramentas de acesso e manipulação de dados', 13, 14, 13),
(167, 'g', 'Planejar, elaborar e ministrar treinamentos relativos a sistemas de informação, ferramentas de acesso e manipulação de dados', 13, 14, 14),
(168, 'g', 'Planejar, elaborar e ministrar treinamentos relativos a sistemas de informação, ferramentas de acesso e manipulação de dados', 13, 14, 15),
(169, 'g', 'Planejar, elaborar e ministrar treinamentos relativos a sistemas de informação, ferramentas de acesso e manipulação de dados', 13, 15, 13),
(170, 'g', 'Planejar, elaborar e ministrar treinamentos relativos a sistemas de informação, ferramentas de acesso e manipulação de dados', 13, 15, 14),
(171, 'g', 'Planejar, elaborar e ministrar treinamentos relativos a sistemas de informação, ferramentas de acesso e manipulação de dados', 13, 15, 15),
(172, 'g', 'Planejar, elaborar e ministrar treinamentos relativos a sistemas de informação, ferramentas de acesso e manipulação de dados', 14, 13, 13),
(173, 'g', 'Planejar, elaborar e ministrar treinamentos relativos a sistemas de informação, ferramentas de acesso e manipulação de dados', 14, 13, 14),
(174, 'g', 'Planejar, elaborar e ministrar treinamentos relativos a sistemas de informação, ferramentas de acesso e manipulação de dados', 14, 13, 15),
(175, 'g', 'Planejar, elaborar e ministrar treinamentos relativos a sistemas de informação, ferramentas de acesso e manipulação de dados', 14, 14, 13),
(176, 'g', 'Planejar, elaborar e ministrar treinamentos relativos a sistemas de informação, ferramentas de acesso e manipulação de dados', 14, 14, 14),
(177, 'g', 'Planejar, elaborar e ministrar treinamentos relativos a sistemas de informação, ferramentas de acesso e manipulação de dados', 14, 14, 15),
(178, 'g', 'Planejar, elaborar e ministrar treinamentos relativos a sistemas de informação, ferramentas de acesso e manipulação de dados', 14, 15, 13),
(179, 'g', 'Planejar, elaborar e ministrar treinamentos relativos a sistemas de informação, ferramentas de acesso e manipulação de dados', 14, 15, 14),
(180, 'g', 'Planejar, elaborar e ministrar treinamentos relativos a sistemas de informação, ferramentas de acesso e manipulação de dados', 14, 15, 15),
(181, 'g', 'Planejar, elaborar e ministrar treinamentos relativos a sistemas de informação, ferramentas de acesso e manipulação de dados', 15, 13, 13),
(182, 'g', 'Planejar, elaborar e ministrar treinamentos relativos a sistemas de informação, ferramentas de acesso e manipulação de dados', 15, 13, 14),
(183, 'g', 'Planejar, elaborar e ministrar treinamentos relativos a sistemas de informação, ferramentas de acesso e manipulação de dados', 15, 13, 15),
(184, 'g', 'Planejar, elaborar e ministrar treinamentos relativos a sistemas de informação, ferramentas de acesso e manipulação de dados', 15, 14, 13),
(185, 'g', 'Planejar, elaborar e ministrar treinamentos relativos a sistemas de informação, ferramentas de acesso e manipulação de dados', 15, 14, 14),
(186, 'g', 'Planejar, elaborar e ministrar treinamentos relativos a sistemas de informação, ferramentas de acesso e manipulação de dados', 15, 14, 15),
(187, 'g', 'Planejar, elaborar e ministrar treinamentos relativos a sistemas de informação, ferramentas de acesso e manipulação de dados', 15, 15, 13),
(188, 'g', 'Planejar, elaborar e ministrar treinamentos relativos a sistemas de informação, ferramentas de acesso e manipulação de dados', 15, 15, 14),
(189, 'g', 'Planejar, elaborar e ministrar treinamentos relativos a sistemas de informação, ferramentas de acesso e manipulação de dados', 15, 15, 15),
(190, 'h', 'Selecionar, implementar e internalizar novas tecnologias de desenvolvimento', 16, 16, 16),
(191, 'h', 'Selecionar, implementar e internalizar novas tecnologias de desenvolvimento', 16, 16, 17),
(192, 'h', 'Selecionar, implementar e internalizar novas tecnologias de desenvolvimento', 16, 16, 18),
(193, 'h', 'Selecionar, implementar e internalizar novas tecnologias de desenvolvimento', 16, 17, 16),
(194, 'h', 'Selecionar, implementar e internalizar novas tecnologias de desenvolvimento', 16, 17, 17),
(195, 'h', 'Selecionar, implementar e internalizar novas tecnologias de desenvolvimento', 16, 17, 18),
(196, 'h', 'Selecionar, implementar e internalizar novas tecnologias de desenvolvimento', 16, 18, 16),
(197, 'h', 'Selecionar, implementar e internalizar novas tecnologias de desenvolvimento', 16, 18, 17),
(198, 'h', 'Selecionar, implementar e internalizar novas tecnologias de desenvolvimento', 16, 18, 18),
(199, 'h', 'Selecionar, implementar e internalizar novas tecnologias de desenvolvimento', 17, 16, 16),
(200, 'h', 'Selecionar, implementar e internalizar novas tecnologias de desenvolvimento', 17, 16, 17),
(201, 'h', 'Selecionar, implementar e internalizar novas tecnologias de desenvolvimento', 17, 16, 18),
(202, 'h', 'Selecionar, implementar e internalizar novas tecnologias de desenvolvimento', 17, 17, 16),
(203, 'h', 'Selecionar, implementar e internalizar novas tecnologias de desenvolvimento', 17, 17, 17),
(204, 'h', 'Selecionar, implementar e internalizar novas tecnologias de desenvolvimento', 17, 17, 18),
(205, 'h', 'Selecionar, implementar e internalizar novas tecnologias de desenvolvimento', 17, 18, 16),
(206, 'h', 'Selecionar, implementar e internalizar novas tecnologias de desenvolvimento', 17, 18, 17),
(207, 'h', 'Selecionar, implementar e internalizar novas tecnologias de desenvolvimento', 17, 18, 18),
(208, 'h', 'Selecionar, implementar e internalizar novas tecnologias de desenvolvimento', 18, 16, 16),
(209, 'h', 'Selecionar, implementar e internalizar novas tecnologias de desenvolvimento', 18, 16, 17),
(210, 'h', 'Selecionar, implementar e internalizar novas tecnologias de desenvolvimento', 18, 16, 18),
(211, 'h', 'Selecionar, implementar e internalizar novas tecnologias de desenvolvimento', 18, 17, 16),
(212, 'h', 'Selecionar, implementar e internalizar novas tecnologias de desenvolvimento', 18, 17, 17),
(213, 'h', 'Selecionar, implementar e internalizar novas tecnologias de desenvolvimento', 18, 17, 18),
(214, 'h', 'Selecionar, implementar e internalizar novas tecnologias de desenvolvimento', 18, 18, 16),
(215, 'h', 'Selecionar, implementar e internalizar novas tecnologias de desenvolvimento', 18, 18, 17),
(216, 'h', 'Selecionar, implementar e internalizar novas tecnologias de desenvolvimento', 18, 18, 18),
(217, 'i', 'Prestar assessoramento técnico no que se refere a prazos, recursos e alternativas de desenvolvimento de sistemas', 19, 19, 19),
(218, 'i', 'Prestar assessoramento técnico no que se refere a prazos, recursos e alternativas de desenvolvimento de sistemas', 19, 19, 20),
(219, 'i', 'Prestar assessoramento técnico no que se refere a prazos, recursos e alternativas de desenvolvimento de sistemas', 19, 19, 21),
(220, 'i', 'Prestar assessoramento técnico no que se refere a prazos, recursos e alternativas de desenvolvimento de sistemas', 19, 20, 19),
(221, 'i', 'Prestar assessoramento técnico no que se refere a prazos, recursos e alternativas de desenvolvimento de sistemas', 19, 20, 20),
(222, 'i', 'Prestar assessoramento técnico no que se refere a prazos, recursos e alternativas de desenvolvimento de sistemas', 19, 20, 21),
(223, 'i', 'Prestar assessoramento técnico no que se refere a prazos, recursos e alternativas de desenvolvimento de sistemas', 19, 21, 19),
(224, 'i', 'Prestar assessoramento técnico no que se refere a prazos, recursos e alternativas de desenvolvimento de sistemas', 19, 21, 20),
(225, 'i', 'Prestar assessoramento técnico no que se refere a prazos, recursos e alternativas de desenvolvimento de sistemas', 19, 21, 21),
(226, 'i', 'Prestar assessoramento técnico no que se refere a prazos, recursos e alternativas de desenvolvimento de sistemas', 20, 19, 19),
(227, 'i', 'Prestar assessoramento técnico no que se refere a prazos, recursos e alternativas de desenvolvimento de sistemas', 20, 19, 20),
(228, 'i', 'Prestar assessoramento técnico no que se refere a prazos, recursos e alternativas de desenvolvimento de sistemas', 20, 19, 21),
(229, 'i', 'Prestar assessoramento técnico no que se refere a prazos, recursos e alternativas de desenvolvimento de sistemas', 20, 20, 19),
(230, 'i', 'Prestar assessoramento técnico no que se refere a prazos, recursos e alternativas de desenvolvimento de sistemas', 20, 20, 20),
(231, 'i', 'Prestar assessoramento técnico no que se refere a prazos, recursos e alternativas de desenvolvimento de sistemas', 20, 20, 21),
(232, 'i', 'Prestar assessoramento técnico no que se refere a prazos, recursos e alternativas de desenvolvimento de sistemas', 20, 21, 19),
(233, 'i', 'Prestar assessoramento técnico no que se refere a prazos, recursos e alternativas de desenvolvimento de sistemas', 20, 21, 20),
(234, 'i', 'Prestar assessoramento técnico no que se refere a prazos, recursos e alternativas de desenvolvimento de sistemas', 20, 21, 21),
(235, 'i', 'Prestar assessoramento técnico no que se refere a prazos, recursos e alternativas de desenvolvimento de sistemas', 21, 19, 19),
(236, 'i', 'Prestar assessoramento técnico no que se refere a prazos, recursos e alternativas de desenvolvimento de sistemas', 21, 19, 20),
(237, 'i', 'Prestar assessoramento técnico no que se refere a prazos, recursos e alternativas de desenvolvimento de sistemas', 21, 19, 21),
(238, 'i', 'Prestar assessoramento técnico no que se refere a prazos, recursos e alternativas de desenvolvimento de sistemas', 21, 20, 19),
(239, 'i', 'Prestar assessoramento técnico no que se refere a prazos, recursos e alternativas de desenvolvimento de sistemas', 21, 20, 20),
(240, 'i', 'Prestar assessoramento técnico no que se refere a prazos, recursos e alternativas de desenvolvimento de sistemas', 21, 20, 21),
(241, 'i', 'Prestar assessoramento técnico no que se refere a prazos, recursos e alternativas de desenvolvimento de sistemas', 21, 21, 19),
(242, 'i', 'Prestar assessoramento técnico no que se refere a prazos, recursos e alternativas de desenvolvimento de sistemas', 21, 21, 20),
(243, 'i', 'Prestar assessoramento técnico no que se refere a prazos, recursos e alternativas de desenvolvimento de sistemas', 21, 21, 21),
(244, 'j', 'Especificar a manutenção de softwares e de sistemas', 22, 22, 22),
(245, 'j', 'Especificar a manutenção de softwares e de sistemas', 22, 22, 23),
(246, 'j', 'Especificar a manutenção de softwares e de sistemas', 22, 22, 24),
(247, 'j', 'Especificar a manutenção de softwares e de sistemas', 22, 23, 22),
(248, 'j', 'Especificar a manutenção de softwares e de sistemas', 22, 23, 23),
(249, 'j', 'Especificar a manutenção de softwares e de sistemas', 22, 23, 24),
(250, 'j', 'Especificar a manutenção de softwares e de sistemas', 22, 24, 22),
(251, 'j', 'Especificar a manutenção de softwares e de sistemas', 22, 24, 23),
(252, 'j', 'Especificar a manutenção de softwares e de sistemas', 22, 24, 24),
(253, 'j', 'Especificar a manutenção de softwares e de sistemas', 23, 22, 22),
(254, 'j', 'Especificar a manutenção de softwares e de sistemas', 23, 22, 23),
(255, 'j', 'Especificar a manutenção de softwares e de sistemas', 23, 22, 24),
(256, 'j', 'Especificar a manutenção de softwares e de sistemas', 23, 23, 22),
(257, 'j', 'Especificar a manutenção de softwares e de sistemas', 23, 23, 23),
(258, 'j', 'Especificar a manutenção de softwares e de sistemas', 23, 23, 24),
(259, 'j', 'Especificar a manutenção de softwares e de sistemas', 23, 24, 22),
(260, 'j', 'Especificar a manutenção de softwares e de sistemas', 23, 24, 23),
(261, 'j', 'Especificar a manutenção de softwares e de sistemas', 23, 24, 24),
(262, 'j', 'Especificar a manutenção de softwares e de sistemas', 24, 22, 22),
(263, 'j', 'Especificar a manutenção de softwares e de sistemas', 24, 22, 23),
(264, 'j', 'Especificar a manutenção de softwares e de sistemas', 24, 22, 24),
(265, 'j', 'Especificar a manutenção de softwares e de sistemas', 24, 23, 22),
(266, 'j', 'Especificar a manutenção de softwares e de sistemas', 24, 23, 23),
(267, 'j', 'Especificar a manutenção de softwares e de sistemas', 24, 23, 24),
(268, 'j', 'Especificar a manutenção de softwares e de sistemas', 24, 24, 22),
(269, 'j', 'Especificar a manutenção de softwares e de sistemas', 24, 24, 23),
(270, 'j', 'Especificar a manutenção de softwares e de sistemas', 24, 24, 24),
(271, 'k', 'Manter os sistemas em produção, avaliando seu desempenho e, quando necessário, propondo medidas de correção dos desvios', 58, 40, 43),
(272, 'k', 'Manter os sistemas em produção, avaliando seu desempenho e, quando necessário, propondo medidas de correção dos desvios', 58, 40, 44),
(273, 'k', 'Manter os sistemas em produção, avaliando seu desempenho e, quando necessário, propondo medidas de correção dos desvios', 58, 40, 45),
(274, 'k', 'Manter os sistemas em produção, avaliando seu desempenho e, quando necessário, propondo medidas de correção dos desvios', 58, 41, 43),
(275, 'k', 'Manter os sistemas em produção, avaliando seu desempenho e, quando necessário, propondo medidas de correção dos desvios', 58, 41, 44),
(276, 'k', 'Manter os sistemas em produção, avaliando seu desempenho e, quando necessário, propondo medidas de correção dos desvios', 58, 41, 45),
(277, 'k', 'Manter os sistemas em produção, avaliando seu desempenho e, quando necessário, propondo medidas de correção dos desvios', 58, 42, 43),
(278, 'k', 'Manter os sistemas em produção, avaliando seu desempenho e, quando necessário, propondo medidas de correção dos desvios', 58, 42, 44),
(279, 'k', 'Manter os sistemas em produção, avaliando seu desempenho e, quando necessário, propondo medidas de correção dos desvios', 58, 42, 45),
(280, 'k', 'Manter os sistemas em produção, avaliando seu desempenho e, quando necessário, propondo medidas de correção dos desvios', 59, 40, 43),
(281, 'k', 'Manter os sistemas em produção, avaliando seu desempenho e, quando necessário, propondo medidas de correção dos desvios', 59, 40, 44),
(282, 'k', 'Manter os sistemas em produção, avaliando seu desempenho e, quando necessário, propondo medidas de correção dos desvios', 59, 40, 45),
(283, 'k', 'Manter os sistemas em produção, avaliando seu desempenho e, quando necessário, propondo medidas de correção dos desvios', 59, 41, 43),
(284, 'k', 'Manter os sistemas em produção, avaliando seu desempenho e, quando necessário, propondo medidas de correção dos desvios', 59, 41, 44),
(285, 'k', 'Manter os sistemas em produção, avaliando seu desempenho e, quando necessário, propondo medidas de correção dos desvios', 59, 41, 45),
(286, 'k', 'Manter os sistemas em produção, avaliando seu desempenho e, quando necessário, propondo medidas de correção dos desvios', 59, 42, 43),
(287, 'k', 'Manter os sistemas em produção, avaliando seu desempenho e, quando necessário, propondo medidas de correção dos desvios', 59, 42, 44),
(288, 'k', 'Manter os sistemas em produção, avaliando seu desempenho e, quando necessário, propondo medidas de correção dos desvios', 59, 42, 45),
(289, 'k', 'Manter os sistemas em produção, avaliando seu desempenho e, quando necessário, propondo medidas de correção dos desvios', 60, 40, 43),
(290, 'k', 'Manter os sistemas em produção, avaliando seu desempenho e, quando necessário, propondo medidas de correção dos desvios', 60, 40, 44),
(291, 'k', 'Manter os sistemas em produção, avaliando seu desempenho e, quando necessário, propondo medidas de correção dos desvios', 60, 40, 45),
(292, 'k', 'Manter os sistemas em produção, avaliando seu desempenho e, quando necessário, propondo medidas de correção dos desvios', 60, 41, 43),
(293, 'k', 'Manter os sistemas em produção, avaliando seu desempenho e, quando necessário, propondo medidas de correção dos desvios', 60, 41, 44),
(294, 'k', 'Manter os sistemas em produção, avaliando seu desempenho e, quando necessário, propondo medidas de correção dos desvios', 60, 41, 45),
(295, 'k', 'Manter os sistemas em produção, avaliando seu desempenho e, quando necessário, propondo medidas de correção dos desvios', 60, 42, 43),
(296, 'k', 'Manter os sistemas em produção, avaliando seu desempenho e, quando necessário, propondo medidas de correção dos desvios', 60, 42, 44),
(297, 'k', 'Manter os sistemas em produção, avaliando seu desempenho e, quando necessário, propondo medidas de correção dos desvios', 60, 42, 45),
(298, 'l', 'Planejar e administrar componentes reusáveis e repositórios', 25, 25, 25),
(299, 'l', 'Planejar e administrar componentes reusáveis e repositórios', 25, 25, 26),
(300, 'l', 'Planejar e administrar componentes reusáveis e repositórios', 25, 25, 27),
(301, 'l', 'Planejar e administrar componentes reusáveis e repositórios', 25, 26, 25),
(302, 'l', 'Planejar e administrar componentes reusáveis e repositórios', 25, 26, 26),
(303, 'l', 'Planejar e administrar componentes reusáveis e repositórios', 25, 26, 27),
(304, 'l', 'Planejar e administrar componentes reusáveis e repositórios', 25, 27, 25),
(305, 'l', 'Planejar e administrar componentes reusáveis e repositórios', 25, 27, 26),
(306, 'l', 'Planejar e administrar componentes reusáveis e repositórios', 25, 27, 27),
(307, 'l', 'Planejar e administrar componentes reusáveis e repositórios', 26, 25, 25),
(308, 'l', 'Planejar e administrar componentes reusáveis e repositórios', 26, 25, 26),
(309, 'l', 'Planejar e administrar componentes reusáveis e repositórios', 26, 25, 27),
(310, 'l', 'Planejar e administrar componentes reusáveis e repositórios', 26, 26, 25),
(311, 'l', 'Planejar e administrar componentes reusáveis e repositórios', 26, 26, 26),
(312, 'l', 'Planejar e administrar componentes reusáveis e repositórios', 26, 26, 27),
(313, 'l', 'Planejar e administrar componentes reusáveis e repositórios', 26, 27, 25),
(314, 'l', 'Planejar e administrar componentes reusáveis e repositórios', 26, 27, 26),
(315, 'l', 'Planejar e administrar componentes reusáveis e repositórios', 26, 27, 27),
(316, 'l', 'Planejar e administrar componentes reusáveis e repositórios', 27, 25, 25),
(317, 'l', 'Planejar e administrar componentes reusáveis e repositórios', 27, 25, 26),
(318, 'l', 'Planejar e administrar componentes reusáveis e repositórios', 27, 25, 27),
(319, 'l', 'Planejar e administrar componentes reusáveis e repositórios', 27, 26, 25),
(320, 'l', 'Planejar e administrar componentes reusáveis e repositórios', 27, 26, 26),
(321, 'l', 'Planejar e administrar componentes reusáveis e repositórios', 27, 26, 27),
(322, 'l', 'Planejar e administrar componentes reusáveis e repositórios', 27, 27, 25),
(323, 'l', 'Planejar e administrar componentes reusáveis e repositórios', 27, 27, 26),
(324, 'l', 'Planejar e administrar componentes reusáveis e repositórios', 27, 27, 27),
(325, 'm', 'Certificar e inspecionar modelos e códigos de sistemas', 28, 28, 28),
(326, 'm', 'Certificar e inspecionar modelos e códigos de sistemas', 28, 28, 29),
(327, 'm', 'Certificar e inspecionar modelos e códigos de sistemas', 28, 28, 30),
(328, 'm', 'Certificar e inspecionar modelos e códigos de sistemas', 28, 29, 28),
(329, 'm', 'Certificar e inspecionar modelos e códigos de sistemas', 28, 29, 29),
(330, 'm', 'Certificar e inspecionar modelos e códigos de sistemas', 28, 29, 30),
(331, 'm', 'Certificar e inspecionar modelos e códigos de sistemas', 28, 30, 28),
(332, 'm', 'Certificar e inspecionar modelos e códigos de sistemas', 28, 30, 29),
(333, 'm', 'Certificar e inspecionar modelos e códigos de sistemas', 28, 30, 30),
(334, 'm', 'Certificar e inspecionar modelos e códigos de sistemas', 29, 28, 28),
(335, 'm', 'Certificar e inspecionar modelos e códigos de sistemas', 29, 28, 29),
(336, 'm', 'Certificar e inspecionar modelos e códigos de sistemas', 29, 28, 30),
(337, 'm', 'Certificar e inspecionar modelos e códigos de sistemas', 29, 29, 28),
(338, 'm', 'Certificar e inspecionar modelos e códigos de sistemas', 29, 29, 29),
(339, 'm', 'Certificar e inspecionar modelos e códigos de sistemas', 29, 29, 30),
(340, 'm', 'Certificar e inspecionar modelos e códigos de sistemas', 29, 30, 28),
(341, 'm', 'Certificar e inspecionar modelos e códigos de sistemas', 29, 30, 29),
(342, 'm', 'Certificar e inspecionar modelos e códigos de sistemas', 29, 30, 30),
(343, 'm', 'Certificar e inspecionar modelos e códigos de sistemas', 30, 28, 28),
(344, 'm', 'Certificar e inspecionar modelos e códigos de sistemas', 30, 28, 29),
(345, 'm', 'Certificar e inspecionar modelos e códigos de sistemas', 30, 28, 30),
(346, 'm', 'Certificar e inspecionar modelos e códigos de sistemas', 30, 29, 28),
(347, 'm', 'Certificar e inspecionar modelos e códigos de sistemas', 30, 29, 29),
(348, 'm', 'Certificar e inspecionar modelos e códigos de sistemas', 30, 29, 30),
(349, 'm', 'Certificar e inspecionar modelos e códigos de sistemas', 30, 30, 28),
(350, 'm', 'Certificar e inspecionar modelos e códigos de sistemas', 30, 30, 29),
(351, 'm', 'Certificar e inspecionar modelos e códigos de sistemas', 30, 30, 30),
(352, 'n', 'Elaborar e gerenciar projetos de sistemas e software', 31, 31, 31),
(353, 'n', 'Elaborar e gerenciar projetos de sistemas e software', 31, 31, 32),
(354, 'n', 'Elaborar e gerenciar projetos de sistemas e software', 31, 31, 33),
(355, 'n', 'Elaborar e gerenciar projetos de sistemas e software', 31, 32, 31),
(356, 'n', 'Elaborar e gerenciar projetos de sistemas e software', 31, 32, 32),
(357, 'n', 'Elaborar e gerenciar projetos de sistemas e software', 31, 32, 33),
(358, 'n', 'Elaborar e gerenciar projetos de sistemas e software', 31, 33, 31),
(359, 'n', 'Elaborar e gerenciar projetos de sistemas e software', 31, 33, 32),
(360, 'n', 'Elaborar e gerenciar projetos de sistemas e software', 31, 33, 33),
(361, 'n', 'Elaborar e gerenciar projetos de sistemas e software', 32, 31, 31),
(362, 'n', 'Elaborar e gerenciar projetos de sistemas e software', 32, 31, 32),
(363, 'n', 'Elaborar e gerenciar projetos de sistemas e software', 32, 31, 33),
(364, 'n', 'Elaborar e gerenciar projetos de sistemas e software', 32, 32, 31),
(365, 'n', 'Elaborar e gerenciar projetos de sistemas e software', 32, 32, 32),
(366, 'n', 'Elaborar e gerenciar projetos de sistemas e software', 32, 32, 33),
(367, 'n', 'Elaborar e gerenciar projetos de sistemas e software', 32, 33, 31),
(368, 'n', 'Elaborar e gerenciar projetos de sistemas e software', 32, 33, 32),
(369, 'n', 'Elaborar e gerenciar projetos de sistemas e software', 32, 33, 33),
(370, 'n', 'Elaborar e gerenciar projetos de sistemas e software', 33, 31, 31),
(371, 'n', 'Elaborar e gerenciar projetos de sistemas e software', 33, 31, 32),
(372, 'n', 'Elaborar e gerenciar projetos de sistemas e software', 33, 31, 33),
(373, 'n', 'Elaborar e gerenciar projetos de sistemas e software', 33, 32, 31),
(374, 'n', 'Elaborar e gerenciar projetos de sistemas e software', 33, 32, 32),
(375, 'n', 'Elaborar e gerenciar projetos de sistemas e software', 33, 32, 33),
(376, 'n', 'Elaborar e gerenciar projetos de sistemas e software', 33, 33, 31),
(377, 'n', 'Elaborar e gerenciar projetos de sistemas e software', 33, 33, 32),
(378, 'n', 'Elaborar e gerenciar projetos de sistemas e software', 33, 33, 33),
(379, 'p', 'Atributo de projeto.', 1, 1, 1),
(380, 'p', 'Atributo de projeto.', 1, 1, 2),
(381, 'p', 'Atributo de projeto.', 1, 1, 3),
(382, 'p', 'Atributo de projeto.', 1, 2, 1),
(383, 'p', 'Atributo de projeto.', 1, 2, 2),
(384, 'p', 'Atributo de projeto.', 1, 2, 3),
(385, 'p', 'Atributo de projeto.', 1, 3, 1),
(386, 'p', 'Atributo de projeto.', 1, 3, 2),
(387, 'p', 'Atributo de projeto.', 1, 3, 3),
(388, 'p', 'Atributo de projeto.', 2, 1, 1),
(389, 'p', 'Atributo de projeto.', 2, 1, 2),
(390, 'p', 'Atributo de projeto.', 2, 1, 3),
(391, 'p', 'Atributo de projeto.', 2, 2, 1),
(392, 'p', 'Atributo de projeto.', 2, 2, 2),
(393, 'p', 'Atributo de projeto.', 2, 2, 3),
(394, 'p', 'Atributo de projeto.', 2, 3, 3),
(395, 'p', 'Atributo de projeto.', 3, 1, 1),
(396, 'p', 'Atributo de projeto.', 3, 1, 2),
(397, 'p', 'Atributo de projeto.', 3, 1, 3),
(398, 'p', 'Atributo de projeto.', 3, 2, 1),
(399, 'p', 'Atributo de projeto.', 3, 2, 2),
(400, 'p', 'Atributo de projeto.', 3, 2, 3),
(401, 'p', 'Atributo de projeto.', 3, 3, 1),
(402, 'p', 'Atributo de projeto.', 3, 3, 2),
(403, 'p', 'Atributo de projeto.', 3, 3, 3),
(404, 'p', 'Atributo de projeto.', 2, 3, 1),
(405, 'p', 'Atributo de projeto.', 2, 3, 2);

-- --------------------------------------------------------

--
-- Estrutura para tabela `TB_ATRIBUTO_has_TB_PAPEL`
--

CREATE TABLE `TB_ATRIBUTO_has_TB_PAPEL` (
  `TB_ATRIBUTO_id_atributo` int(9) NOT NULL,
  `TB_PAPEL_id_papel` int(9) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Fazendo dump de dados para tabela `TB_ATRIBUTO_has_TB_PAPEL`
--

INSERT INTO `TB_ATRIBUTO_has_TB_PAPEL` (`TB_ATRIBUTO_id_atributo`, `TB_PAPEL_id_papel`) VALUES
(1, 2),
(1, 4),
(2, 2),
(2, 4),
(3, 2),
(3, 4),
(4, 2),
(4, 4),
(5, 2),
(5, 4),
(6, 2),
(6, 4),
(7, 2),
(7, 4),
(8, 2),
(8, 4),
(9, 2),
(9, 4),
(10, 2),
(10, 4),
(11, 2),
(11, 4),
(12, 2),
(12, 4),
(13, 2),
(13, 4),
(14, 2),
(14, 4),
(15, 2),
(15, 4),
(16, 2),
(16, 4),
(17, 2),
(17, 4),
(18, 2),
(18, 4),
(19, 2),
(19, 4),
(20, 2),
(20, 4),
(21, 2),
(21, 4),
(22, 2),
(22, 4),
(23, 2),
(23, 4),
(24, 2),
(24, 4),
(25, 2),
(25, 4),
(26, 3),
(26, 4),
(27, 3),
(27, 4),
(28, 3),
(28, 4),
(29, 3),
(29, 4),
(30, 3),
(30, 4),
(31, 3),
(31, 4),
(32, 3),
(32, 4),
(33, 3),
(33, 4),
(34, 3),
(34, 4),
(35, 3),
(35, 4),
(36, 3),
(36, 4),
(37, 3),
(37, 4),
(38, 3),
(38, 4),
(39, 3),
(39, 4),
(40, 3),
(40, 4),
(41, 3),
(41, 4),
(42, 3),
(42, 4),
(43, 3),
(43, 4),
(44, 3),
(44, 4),
(45, 3),
(45, 4),
(46, 3),
(46, 4),
(47, 3),
(47, 4),
(48, 3),
(48, 4),
(49, 3),
(49, 4),
(50, 3),
(50, 4),
(51, 3),
(51, 4),
(52, 3),
(52, 4),
(53, 2),
(53, 4),
(54, 2),
(54, 4),
(55, 2),
(55, 6),
(56, 2),
(56, 6),
(57, 2),
(57, 6),
(58, 2),
(58, 6),
(59, 2),
(59, 6),
(60, 2),
(60, 6),
(61, 2),
(61, 6),
(62, 2),
(62, 6),
(63, 2),
(63, 6),
(64, 2),
(64, 6),
(65, 2),
(65, 6),
(66, 2),
(66, 6),
(67, 2),
(67, 6),
(68, 2),
(68, 6),
(69, 2),
(69, 6),
(70, 2),
(70, 6),
(71, 2),
(71, 6),
(72, 2),
(72, 6),
(73, 2),
(73, 6),
(74, 2),
(74, 6),
(75, 2),
(75, 6),
(76, 2),
(76, 6),
(77, 2),
(77, 6),
(78, 2),
(78, 6),
(79, 2),
(79, 6),
(80, 2),
(80, 6),
(81, 2),
(81, 6),
(82, 2),
(83, 2),
(84, 2),
(85, 2),
(86, 2),
(87, 2),
(88, 2),
(89, 2),
(90, 2),
(109, 1),
(109, 3),
(109, 5),
(110, 1),
(110, 3),
(110, 5),
(111, 1),
(111, 3),
(111, 5),
(112, 1),
(112, 3),
(112, 5),
(113, 1),
(113, 3),
(113, 5),
(114, 1),
(114, 3),
(114, 5),
(115, 1),
(115, 3),
(115, 5),
(116, 1),
(116, 3),
(116, 5),
(117, 1),
(117, 3),
(117, 5),
(118, 1),
(118, 3),
(118, 5),
(119, 1),
(119, 3),
(119, 5),
(120, 1),
(120, 3),
(120, 5),
(121, 1),
(121, 3),
(121, 5),
(122, 1),
(122, 3),
(122, 5),
(123, 1),
(123, 3),
(123, 5),
(124, 1),
(124, 3),
(124, 5),
(125, 1),
(125, 3),
(125, 5),
(126, 1),
(126, 3),
(126, 5),
(127, 1),
(127, 3),
(127, 5),
(128, 1),
(128, 3),
(128, 5),
(129, 1),
(129, 3),
(129, 5),
(130, 1),
(130, 3),
(130, 5),
(131, 1),
(131, 3),
(131, 5),
(132, 1),
(132, 3),
(132, 5),
(133, 1),
(133, 3),
(133, 5),
(134, 1),
(134, 3),
(134, 5),
(135, 1),
(135, 3),
(135, 5),
(136, 1),
(136, 2),
(136, 4),
(136, 5),
(137, 1),
(137, 2),
(137, 4),
(137, 5),
(138, 1),
(138, 2),
(138, 4),
(138, 5),
(139, 1),
(139, 2),
(139, 4),
(139, 5),
(140, 1),
(140, 2),
(140, 4),
(140, 5),
(141, 1),
(141, 2),
(141, 4),
(141, 5),
(142, 1),
(142, 2),
(142, 4),
(142, 5),
(143, 1),
(143, 2),
(143, 4),
(143, 5),
(144, 1),
(144, 2),
(144, 4),
(144, 5),
(145, 1),
(145, 2),
(145, 4),
(145, 5),
(146, 1),
(146, 2),
(146, 4),
(146, 5),
(147, 1),
(147, 2),
(147, 4),
(147, 5),
(148, 1),
(148, 2),
(148, 4),
(148, 5),
(149, 1),
(149, 2),
(149, 4),
(149, 5),
(150, 1),
(150, 2),
(150, 4),
(150, 5),
(151, 1),
(151, 2),
(151, 4),
(151, 5),
(152, 1),
(152, 2),
(152, 4),
(152, 5),
(153, 1),
(153, 2),
(153, 4),
(153, 5),
(154, 1),
(154, 2),
(154, 4),
(154, 5),
(155, 1),
(155, 2),
(155, 4),
(155, 5),
(156, 1),
(156, 2),
(156, 4),
(156, 5),
(157, 1),
(157, 2),
(157, 4),
(157, 5),
(158, 1),
(158, 2),
(158, 4),
(158, 5),
(159, 1),
(159, 2),
(159, 4),
(159, 5),
(160, 1),
(160, 2),
(160, 4),
(160, 5),
(161, 1),
(161, 2),
(161, 4),
(161, 5),
(162, 1),
(162, 2),
(162, 4),
(162, 5),
(163, 1),
(163, 2),
(163, 3),
(163, 4),
(163, 5),
(163, 6),
(164, 1),
(164, 2),
(164, 3),
(164, 4),
(164, 5),
(164, 6),
(165, 1),
(165, 2),
(165, 3),
(165, 4),
(165, 5),
(165, 6),
(166, 1),
(166, 2),
(166, 3),
(166, 4),
(166, 5),
(166, 6),
(167, 1),
(167, 2),
(167, 3),
(167, 4),
(167, 5),
(167, 6),
(168, 1),
(168, 2),
(168, 3),
(168, 4),
(168, 5),
(168, 6),
(169, 1),
(169, 2),
(169, 3),
(169, 4),
(169, 5),
(169, 6),
(170, 1),
(170, 2),
(170, 3),
(170, 4),
(170, 5),
(170, 6),
(171, 1),
(171, 2),
(171, 3),
(171, 4),
(171, 5),
(171, 6),
(172, 1),
(172, 2),
(172, 3),
(172, 4),
(172, 5),
(172, 6),
(173, 1),
(173, 2),
(173, 3),
(173, 4),
(173, 5),
(173, 6),
(174, 1),
(174, 2),
(174, 3),
(174, 4),
(174, 5),
(174, 6),
(175, 1),
(175, 2),
(175, 3),
(175, 4),
(175, 5),
(175, 6),
(176, 1),
(176, 2),
(176, 3),
(176, 4),
(176, 5),
(176, 6),
(177, 1),
(177, 2),
(177, 3),
(177, 4),
(177, 5),
(177, 6),
(178, 1),
(178, 2),
(178, 3),
(178, 4),
(178, 5),
(178, 6),
(179, 1),
(179, 2),
(179, 3),
(179, 4),
(179, 5),
(179, 6),
(180, 1),
(180, 2),
(180, 3),
(180, 4),
(180, 5),
(180, 6),
(181, 1),
(181, 2),
(181, 3),
(181, 4),
(181, 5),
(181, 6),
(182, 1),
(182, 2),
(182, 3),
(182, 4),
(182, 5),
(182, 6),
(183, 1),
(183, 2),
(183, 3),
(183, 4),
(183, 5),
(183, 6),
(184, 1),
(184, 2),
(184, 3),
(184, 4),
(184, 5),
(184, 6),
(185, 1),
(185, 2),
(185, 3),
(185, 4),
(185, 5),
(185, 6),
(186, 1),
(186, 2),
(186, 3),
(186, 4),
(186, 5),
(186, 6),
(187, 1),
(187, 2),
(187, 3),
(187, 4),
(187, 5),
(187, 6),
(188, 1),
(188, 2),
(188, 3),
(188, 4),
(188, 5),
(188, 6),
(189, 1),
(189, 2),
(189, 3),
(189, 4),
(189, 5),
(189, 6),
(190, 1),
(190, 2),
(190, 3),
(190, 4),
(190, 5),
(190, 6),
(191, 1),
(191, 2),
(191, 3),
(191, 4),
(191, 5),
(191, 6),
(192, 1),
(192, 2),
(192, 3),
(192, 4),
(192, 5),
(192, 6),
(193, 1),
(193, 2),
(193, 3),
(193, 4),
(193, 5),
(193, 6),
(194, 1),
(194, 2),
(194, 3),
(194, 4),
(194, 5),
(194, 6),
(195, 1),
(195, 2),
(195, 3),
(195, 4),
(195, 5),
(195, 6),
(196, 1),
(196, 2),
(196, 3),
(196, 4),
(196, 5),
(196, 6),
(197, 1),
(197, 2),
(197, 3),
(197, 4),
(197, 5),
(197, 6),
(198, 1),
(198, 2),
(198, 3),
(198, 4),
(198, 5),
(198, 6),
(199, 1),
(199, 2),
(199, 3),
(199, 4),
(199, 5),
(199, 6),
(200, 1),
(200, 2),
(200, 3),
(200, 4),
(200, 5),
(200, 6),
(201, 1),
(201, 2),
(201, 3),
(201, 4),
(201, 5),
(201, 6),
(202, 1),
(202, 2),
(202, 3),
(202, 4),
(202, 5),
(202, 6),
(203, 1),
(203, 2),
(203, 3),
(203, 4),
(203, 5),
(203, 6),
(204, 1),
(204, 2),
(204, 3),
(204, 4),
(204, 5),
(204, 6),
(205, 1),
(205, 2),
(205, 3),
(205, 4),
(205, 5),
(205, 6),
(206, 1),
(206, 2),
(206, 3),
(206, 4),
(206, 5),
(206, 6),
(207, 1),
(207, 2),
(207, 3),
(207, 4),
(207, 5),
(207, 6),
(208, 1),
(208, 2),
(208, 3),
(208, 4),
(208, 5),
(208, 6),
(209, 1),
(209, 2),
(209, 3),
(209, 4),
(209, 5),
(209, 6),
(210, 1),
(210, 2),
(210, 3),
(210, 4),
(210, 5),
(210, 6),
(211, 1),
(211, 2),
(211, 3),
(211, 4),
(211, 5),
(211, 6),
(212, 1),
(212, 2),
(212, 3),
(212, 4),
(212, 5),
(212, 6),
(213, 1),
(213, 2),
(213, 3),
(213, 4),
(213, 5),
(213, 6),
(214, 1),
(214, 2),
(214, 3),
(214, 4),
(214, 5),
(214, 6),
(215, 1),
(215, 2),
(215, 3),
(215, 4),
(215, 5),
(215, 6),
(216, 1),
(216, 2),
(216, 3),
(216, 4),
(216, 5),
(216, 6),
(217, 1),
(217, 2),
(217, 5),
(218, 1),
(218, 2),
(218, 5),
(219, 1),
(219, 2),
(219, 5),
(220, 1),
(220, 2),
(220, 5),
(221, 1),
(221, 2),
(221, 5),
(222, 1),
(222, 2),
(222, 5),
(223, 1),
(223, 2),
(223, 5),
(224, 1),
(224, 2),
(224, 5),
(225, 1),
(225, 2),
(225, 5),
(226, 1),
(226, 2),
(226, 5),
(227, 1),
(227, 2),
(227, 5),
(228, 1),
(228, 2),
(228, 5),
(229, 1),
(229, 2),
(229, 5),
(230, 1),
(230, 2),
(230, 5),
(231, 1),
(231, 2),
(231, 5),
(232, 1),
(232, 2),
(232, 5),
(233, 1),
(233, 2),
(233, 5),
(234, 1),
(234, 2),
(234, 5),
(235, 1),
(235, 2),
(235, 5),
(236, 1),
(236, 2),
(236, 5),
(237, 1),
(237, 2),
(237, 5),
(238, 1),
(238, 2),
(238, 5),
(239, 1),
(239, 2),
(239, 5),
(240, 1),
(240, 2),
(240, 5),
(241, 1),
(241, 2),
(241, 5),
(242, 1),
(242, 2),
(242, 5),
(243, 1),
(243, 2),
(243, 5),
(244, 1),
(244, 3),
(244, 5),
(245, 1),
(245, 3),
(245, 5),
(246, 1),
(246, 3),
(246, 5),
(247, 1),
(247, 3),
(247, 5),
(248, 1),
(248, 3),
(248, 5),
(249, 1),
(249, 3),
(249, 5),
(250, 1),
(250, 3),
(250, 5),
(251, 1),
(251, 3),
(251, 5),
(252, 1),
(252, 3),
(252, 5),
(253, 1),
(253, 3),
(253, 5),
(254, 1),
(254, 3),
(254, 5),
(255, 1),
(255, 3),
(255, 5),
(256, 1),
(256, 3),
(256, 5),
(257, 1),
(257, 3),
(257, 5),
(258, 1),
(258, 3),
(258, 5),
(259, 1),
(259, 3),
(259, 5),
(260, 1),
(260, 3),
(260, 5),
(261, 1),
(261, 3),
(261, 5),
(262, 1),
(262, 3),
(262, 5),
(263, 1),
(263, 3),
(263, 5),
(264, 1),
(264, 3),
(264, 5),
(265, 1),
(265, 3),
(265, 5),
(266, 1),
(266, 3),
(266, 5),
(267, 1),
(267, 3),
(267, 5),
(268, 1),
(268, 3),
(268, 5),
(269, 1),
(269, 3),
(269, 5),
(270, 1),
(270, 3),
(270, 5),
(271, 1),
(271, 5),
(272, 1),
(272, 5),
(273, 1),
(273, 5),
(274, 1),
(274, 5),
(275, 1),
(275, 5),
(276, 1),
(276, 5),
(277, 1),
(277, 5),
(278, 1),
(278, 5),
(279, 1),
(279, 5),
(280, 1),
(280, 5),
(281, 1),
(281, 5),
(282, 1),
(282, 5),
(283, 1),
(283, 5),
(284, 1),
(284, 5),
(285, 1),
(285, 5),
(286, 1),
(286, 5),
(287, 1),
(287, 5),
(288, 1),
(288, 5),
(289, 1),
(289, 5),
(290, 1),
(290, 5),
(291, 1),
(291, 5),
(292, 1),
(292, 5),
(293, 1),
(293, 5),
(294, 1),
(294, 5),
(295, 1),
(295, 5),
(296, 1),
(296, 5),
(297, 1),
(297, 5),
(298, 1),
(298, 5),
(299, 1),
(299, 5),
(300, 1),
(300, 5),
(301, 1),
(301, 5),
(302, 1),
(302, 5),
(303, 1),
(303, 5),
(304, 1),
(304, 5),
(305, 1),
(305, 5),
(306, 1),
(306, 5),
(307, 1),
(307, 5),
(308, 1),
(308, 5),
(309, 1),
(309, 5),
(310, 1),
(310, 5),
(311, 1),
(311, 5),
(312, 1),
(312, 5),
(313, 1),
(313, 5),
(314, 1),
(314, 5),
(315, 1),
(315, 5),
(316, 1),
(316, 5),
(317, 1),
(317, 5),
(318, 1),
(318, 5),
(319, 1),
(319, 5),
(320, 1),
(320, 5),
(321, 1),
(321, 5),
(322, 1),
(322, 5),
(323, 1),
(323, 5),
(324, 1),
(324, 5),
(325, 1),
(325, 2),
(325, 5),
(326, 1),
(326, 2),
(326, 5),
(327, 1),
(327, 2),
(327, 5),
(328, 1),
(328, 2),
(328, 5),
(329, 1),
(329, 2),
(329, 5),
(330, 1),
(330, 2),
(330, 5),
(331, 1),
(331, 2),
(331, 5),
(332, 1),
(332, 2),
(332, 5),
(333, 1),
(333, 2),
(333, 5),
(334, 1),
(334, 2),
(334, 5),
(335, 1),
(335, 2),
(335, 5),
(336, 1),
(336, 2),
(336, 5),
(337, 1),
(337, 2),
(337, 5),
(338, 1),
(338, 2),
(338, 5),
(339, 1),
(339, 2),
(339, 5),
(340, 1),
(340, 2),
(340, 5),
(341, 1),
(341, 2),
(341, 5),
(342, 1),
(342, 2),
(342, 5),
(343, 1),
(343, 2),
(343, 5),
(344, 1),
(344, 2),
(344, 5),
(345, 1),
(345, 2),
(345, 5),
(346, 1),
(346, 2),
(346, 5),
(347, 1),
(347, 2),
(347, 5),
(348, 1),
(348, 2),
(348, 5),
(349, 1),
(349, 2),
(349, 5),
(350, 1),
(350, 2),
(350, 5),
(351, 1),
(351, 2),
(351, 5),
(352, 1),
(352, 2),
(352, 3),
(352, 4),
(352, 5),
(352, 6),
(353, 1),
(353, 2),
(353, 3),
(353, 4),
(353, 5),
(353, 6),
(354, 1),
(354, 2),
(354, 3),
(354, 4),
(354, 5),
(354, 6),
(355, 1),
(355, 2),
(355, 3),
(355, 4),
(355, 5),
(355, 6),
(356, 1),
(356, 2),
(356, 3),
(356, 4),
(356, 5),
(356, 6),
(357, 1),
(357, 2),
(357, 3),
(357, 4),
(357, 5),
(357, 6),
(358, 1),
(358, 2),
(358, 3),
(358, 4),
(358, 5),
(358, 6),
(359, 1),
(359, 2),
(359, 3),
(359, 4),
(359, 5),
(359, 6),
(360, 1),
(360, 2),
(360, 3),
(360, 4),
(360, 5),
(360, 6),
(361, 1),
(361, 2),
(361, 3),
(361, 4),
(361, 5),
(361, 6),
(362, 1),
(362, 2),
(362, 3),
(362, 4),
(362, 5),
(362, 6),
(363, 1),
(363, 2),
(363, 3),
(363, 4),
(363, 5),
(363, 6),
(364, 1),
(364, 2),
(364, 3),
(364, 4),
(364, 5),
(364, 6),
(365, 1),
(365, 2),
(365, 3),
(365, 4),
(365, 5),
(365, 6),
(366, 1),
(366, 2),
(366, 3),
(366, 4),
(366, 5),
(366, 6),
(367, 1),
(367, 2),
(367, 3),
(367, 4),
(367, 5),
(367, 6),
(368, 1),
(368, 2),
(368, 3),
(368, 4),
(368, 5),
(368, 6),
(369, 1),
(369, 2),
(369, 3),
(369, 4),
(369, 5),
(369, 6),
(370, 1),
(370, 2),
(370, 3),
(370, 4),
(370, 5),
(370, 6),
(371, 1),
(371, 2),
(371, 3),
(371, 4),
(371, 5),
(371, 6),
(372, 1),
(372, 2),
(372, 3),
(372, 4),
(372, 5),
(372, 6),
(373, 1),
(373, 2),
(373, 3),
(373, 4),
(373, 5),
(373, 6),
(374, 1),
(374, 2),
(374, 3),
(374, 4),
(374, 5),
(374, 6),
(375, 1),
(375, 2),
(375, 3),
(375, 4),
(375, 5),
(375, 6),
(376, 1),
(376, 2),
(376, 3),
(376, 4),
(376, 5),
(376, 6),
(377, 1),
(377, 2),
(377, 3),
(377, 4),
(377, 5),
(377, 6),
(378, 1),
(378, 2),
(378, 3),
(378, 4),
(378, 5),
(378, 6);

-- --------------------------------------------------------

--
-- Estrutura para tabela `TB_ATRIBUTO_has_TB_PROJETO`
--

CREATE TABLE `TB_ATRIBUTO_has_TB_PROJETO` (
  `TB_ATRIBUTO_id_atributo` int(9) NOT NULL,
  `TB_PROJETO_id_projeto` int(9) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Fazendo dump de dados para tabela `TB_ATRIBUTO_has_TB_PROJETO`
--

INSERT INTO `TB_ATRIBUTO_has_TB_PROJETO` (`TB_ATRIBUTO_id_atributo`, `TB_PROJETO_id_projeto`) VALUES
(379, 1),
(379, 2),
(379, 3),
(379, 4),
(379, 5),
(379, 6),
(379, 7),
(379, 8),
(379, 9),
(379, 10),
(379, 11),
(379, 12),
(379, 13),
(379, 14),
(379, 15),
(379, 16),
(379, 17),
(379, 18),
(379, 19),
(379, 20),
(379, 21),
(379, 22),
(379, 23),
(380, 1),
(380, 2),
(380, 3),
(380, 4),
(380, 5),
(380, 6),
(380, 7),
(380, 8),
(380, 9),
(380, 10),
(380, 11),
(380, 12),
(380, 13),
(380, 14),
(380, 15),
(380, 16),
(380, 17),
(380, 18),
(380, 19),
(380, 20),
(380, 21),
(380, 22),
(380, 23),
(381, 1),
(381, 2),
(381, 3),
(381, 4),
(381, 5),
(381, 6),
(381, 7),
(381, 8),
(381, 9),
(381, 10),
(381, 11),
(381, 12),
(381, 13),
(381, 14),
(381, 15),
(381, 16),
(381, 17),
(381, 18),
(381, 19),
(381, 20),
(381, 21),
(381, 22),
(381, 23),
(382, 1),
(382, 2),
(382, 3),
(382, 4),
(382, 5),
(382, 6),
(382, 7),
(382, 8),
(382, 9),
(382, 10),
(382, 11),
(382, 12),
(382, 13),
(382, 14),
(382, 15),
(382, 16),
(382, 17),
(382, 18),
(382, 19),
(382, 20),
(382, 21),
(382, 22),
(382, 23),
(383, 1),
(383, 2),
(383, 3),
(383, 4),
(383, 5),
(383, 6),
(383, 7),
(383, 8),
(383, 9),
(383, 10),
(383, 11),
(383, 12),
(383, 13),
(383, 14),
(383, 15),
(383, 16),
(383, 17),
(383, 18),
(383, 19),
(383, 20),
(383, 21),
(383, 22),
(383, 23),
(384, 1),
(384, 2),
(384, 3),
(384, 4),
(384, 5),
(384, 6),
(384, 7),
(384, 8),
(384, 9),
(384, 10),
(384, 11),
(384, 12),
(384, 13),
(384, 14),
(384, 15),
(384, 16),
(384, 17),
(384, 18),
(384, 19),
(384, 20),
(384, 21),
(384, 22),
(384, 23),
(385, 1),
(385, 2),
(385, 3),
(385, 4),
(385, 5),
(385, 6),
(385, 7),
(385, 8),
(385, 9),
(385, 10),
(385, 11),
(385, 12),
(385, 13),
(385, 14),
(385, 15),
(385, 16),
(385, 17),
(385, 18),
(385, 19),
(385, 20),
(385, 21),
(385, 22),
(385, 23),
(386, 1),
(386, 2),
(386, 3),
(386, 4),
(386, 5),
(386, 6),
(386, 7),
(386, 8),
(386, 9),
(386, 10),
(386, 11),
(386, 12),
(386, 13),
(386, 14),
(386, 15),
(386, 16),
(386, 17),
(386, 18),
(386, 19),
(386, 20),
(386, 21),
(386, 22),
(386, 23),
(387, 1),
(387, 2),
(387, 3),
(387, 4),
(387, 5),
(387, 6),
(387, 7),
(387, 8),
(387, 9),
(387, 10),
(387, 11),
(387, 12),
(387, 13),
(387, 14),
(387, 15),
(387, 16),
(387, 17),
(387, 18),
(387, 19),
(387, 20),
(387, 21),
(387, 22),
(387, 23),
(388, 1),
(388, 2),
(388, 3),
(388, 4),
(388, 5),
(388, 6),
(388, 7),
(388, 8),
(388, 9),
(388, 10),
(388, 11),
(388, 12),
(388, 13),
(388, 14),
(388, 15),
(388, 16),
(388, 17),
(388, 18),
(388, 19),
(388, 20),
(388, 21),
(388, 22),
(388, 23),
(389, 1),
(389, 2),
(389, 3),
(389, 4),
(389, 5),
(389, 6),
(389, 7),
(389, 8),
(389, 9),
(389, 10),
(389, 11),
(389, 12),
(389, 13),
(389, 14),
(389, 15),
(389, 16),
(389, 17),
(389, 18),
(389, 19),
(389, 20),
(389, 21),
(389, 22),
(389, 23),
(390, 1),
(390, 2),
(390, 3),
(390, 4),
(390, 5),
(390, 6),
(390, 7),
(390, 8),
(390, 9),
(390, 10),
(390, 11),
(390, 12),
(390, 13),
(390, 14),
(390, 15),
(390, 16),
(390, 17),
(390, 18),
(390, 19),
(390, 20),
(390, 21),
(390, 22),
(390, 23),
(391, 1),
(391, 2),
(391, 3),
(391, 4),
(391, 5),
(391, 6),
(391, 7),
(391, 8),
(391, 9),
(391, 10),
(391, 11),
(391, 12),
(391, 13),
(391, 14),
(391, 15),
(391, 16),
(391, 17),
(391, 18),
(391, 19),
(391, 20),
(391, 21),
(391, 22),
(391, 23),
(392, 1),
(392, 2),
(392, 3),
(392, 4),
(392, 5),
(392, 6),
(392, 7),
(392, 8),
(392, 9),
(392, 10),
(392, 11),
(392, 12),
(392, 13),
(392, 14),
(392, 15),
(392, 16),
(392, 17),
(392, 18),
(392, 19),
(392, 20),
(392, 21),
(392, 22),
(392, 23),
(393, 1),
(393, 2),
(393, 3),
(393, 4),
(393, 5),
(393, 6),
(393, 7),
(393, 8),
(393, 9),
(393, 10),
(393, 11),
(393, 12),
(393, 13),
(393, 14),
(393, 15),
(393, 16),
(393, 17),
(393, 18),
(393, 19),
(393, 20),
(393, 21),
(393, 22),
(393, 23),
(394, 1),
(394, 2),
(394, 3),
(394, 4),
(394, 5),
(394, 6),
(394, 7),
(394, 8),
(394, 9),
(394, 10),
(394, 11),
(394, 12),
(394, 13),
(394, 14),
(394, 15),
(394, 16),
(394, 17),
(394, 18),
(394, 19),
(394, 20),
(394, 21),
(394, 22),
(394, 23),
(395, 1),
(395, 2),
(395, 3),
(395, 4),
(395, 5),
(395, 6),
(395, 7),
(395, 8),
(395, 9),
(395, 10),
(395, 11),
(395, 12),
(395, 13),
(395, 14),
(395, 15),
(395, 16),
(395, 17),
(395, 18),
(395, 19),
(395, 20),
(395, 21),
(395, 22),
(395, 23),
(396, 1),
(396, 2),
(396, 3),
(396, 4),
(396, 5),
(396, 6),
(396, 7),
(396, 8),
(396, 9),
(396, 10),
(396, 11),
(396, 12),
(396, 13),
(396, 14),
(396, 15),
(396, 16),
(396, 17),
(396, 18),
(396, 19),
(396, 20),
(396, 21),
(396, 22),
(396, 23),
(397, 1),
(397, 2),
(397, 3),
(397, 4),
(397, 5),
(397, 6),
(397, 7),
(397, 8),
(397, 9),
(397, 10),
(397, 11),
(397, 12),
(397, 13),
(397, 14),
(397, 15),
(397, 16),
(397, 17),
(397, 18),
(397, 19),
(397, 20),
(397, 21),
(397, 22),
(397, 23),
(398, 1),
(398, 2),
(398, 3),
(398, 4),
(398, 5),
(398, 6),
(398, 7),
(398, 8),
(398, 9),
(398, 10),
(398, 11),
(398, 12),
(398, 13),
(398, 14),
(398, 15),
(398, 16),
(398, 17),
(398, 18),
(398, 19),
(398, 20),
(398, 21),
(398, 22),
(398, 23),
(399, 1),
(399, 2),
(399, 3),
(399, 4),
(399, 5),
(399, 6),
(399, 7),
(399, 8),
(399, 9),
(399, 10),
(399, 11),
(399, 12),
(399, 13),
(399, 14),
(399, 15),
(399, 16),
(399, 17),
(399, 18),
(399, 19),
(399, 20),
(399, 21),
(399, 22),
(399, 23),
(400, 1),
(400, 2),
(400, 3),
(400, 4),
(400, 5),
(400, 6),
(400, 7),
(400, 8),
(400, 9),
(400, 10),
(400, 11),
(400, 12),
(400, 13),
(400, 14),
(400, 15),
(400, 16),
(400, 17),
(400, 18),
(400, 19),
(400, 20),
(400, 21),
(400, 22),
(400, 23),
(401, 1),
(401, 2),
(401, 3),
(401, 4),
(401, 5),
(401, 6),
(401, 7),
(401, 8),
(401, 9),
(401, 10),
(401, 11),
(401, 12),
(401, 13),
(401, 14),
(401, 15),
(401, 16),
(401, 17),
(401, 18),
(401, 19),
(401, 20),
(401, 21),
(401, 22),
(401, 23),
(402, 1),
(402, 2),
(402, 3),
(402, 4),
(402, 5),
(402, 6),
(402, 7),
(402, 8),
(402, 9),
(402, 10),
(402, 11),
(402, 12),
(402, 13),
(402, 14),
(402, 15),
(402, 16),
(402, 17),
(402, 18),
(402, 19),
(402, 20),
(402, 21),
(402, 22),
(402, 23),
(403, 1),
(403, 2),
(403, 3),
(403, 4),
(403, 5),
(403, 6),
(403, 7),
(403, 8),
(403, 9),
(403, 10),
(403, 11),
(403, 12),
(403, 13),
(403, 14),
(403, 15),
(403, 16),
(403, 17),
(403, 18),
(403, 19),
(403, 20),
(403, 21),
(403, 22),
(403, 23),
(404, 1),
(404, 2),
(404, 3),
(404, 4),
(404, 5),
(404, 6),
(404, 7),
(404, 8),
(404, 9),
(404, 10),
(404, 11),
(404, 12),
(404, 13),
(404, 14),
(404, 15),
(404, 16),
(404, 17),
(404, 18),
(404, 19),
(404, 20),
(404, 21),
(404, 22),
(404, 23),
(405, 1),
(405, 2),
(405, 3),
(405, 4),
(405, 5),
(405, 6),
(405, 7),
(405, 8),
(405, 9),
(405, 10),
(405, 11),
(405, 12),
(405, 13),
(405, 14),
(405, 15),
(405, 16),
(405, 17),
(405, 18),
(405, 19),
(405, 20),
(405, 21),
(405, 22),
(405, 23);

-- --------------------------------------------------------

--
-- Estrutura para tabela `TB_COLABORADOR`
--

CREATE TABLE `TB_COLABORADOR` (
  `id_colaborador` int(9) NOT NULL,
  `nome` varchar(50) NOT NULL COMMENT 'Nome completo do colaborador.',
  `matricula` bigint(10) NOT NULL COMMENT 'Matrícula do colaborador.',
  `telefone` bigint(11) NOT NULL COMMENT 'Telefone do colaboraor com o DDD de 2 digitos.',
  `especialidade` varchar(40) NOT NULL COMMENT 'Especialidade do Colaborador. Ex: Desenvolvimento de Sistemas, Programador Visual, etc...',
  `salario` decimal(10,2) NOT NULL,
  `percentual_salario` decimal(10,2) NOT NULL COMMENT 'Percentual de 8,5% do Salário.',
  `dt_registro` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `TB_REFERENCIA_FCT_GFE_id_referencia_fct_gfe` int(9) NOT NULL,
  `TB_DIVISAO_id_divisao` int(9) NOT NULL,
  `TB_ACESSO_id_acesso` int(9) NOT NULL,
  `TB_PERFIL_id_perfil` int(9) NOT NULL,
  `TB_FAIXA_id_faixa` int(9) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Fazendo dump de dados para tabela `TB_COLABORADOR`
--

INSERT INTO `TB_COLABORADOR` (`id_colaborador`, `nome`, `matricula`, `telefone`, `especialidade`, `salario`, `percentual_salario`, `dt_registro`, `TB_REFERENCIA_FCT_GFE_id_referencia_fct_gfe`, `TB_DIVISAO_id_divisao`, `TB_ACESSO_id_acesso`, `TB_PERFIL_id_perfil`, `TB_FAIXA_id_faixa`) VALUES
(2, 'Francisco Jose Joaquim de Souza', 12345678, 6120219999, 'Programação de Computador', '7500.00', '8.50', '2017-11-09 12:28:52', 59, 3, 5, 1, 3),
(3, 'Roberto da Silveira Souza Paranhos', 22225454, 6154545454, 'Comunicação Social', '9859.67', '659.65', '2017-11-09 12:26:46', 45, 16, 4, 2, 1),
(4, 'Natanael de Souza Leite', 12345677, 6120218888, 'Desenvolvimento de Sistemas', '5333.45', '233.13', '2017-11-09 12:26:23', 51, 1, 3, 1, 2),
(7, 'Valfrido Verdana Joaquim', 99999999, 6120210000, 'Comunicação Social', '4566.66', '325.44', '2018-01-25 18:12:19', 70, 16, 2, 3, 1),
(8, 'Antonio Francisco Joaquim Neto Sobrinho', 44444444, 6546546546, 'Atendimento', '11111.11', '111.11', '2017-11-07 17:41:57', 58, 1, 1, 2, 4);

-- --------------------------------------------------------

--
-- Estrutura para tabela `TB_COLABORADOR_has_TB_ATRIBUTO`
--

CREATE TABLE `TB_COLABORADOR_has_TB_ATRIBUTO` (
  `TB_COLABORADOR_id_colaborador` int(9) NOT NULL,
  `TB_COLABORADOR_TB_REFERENCIA_FCT_GFE_id_referencia_fct_gfe` int(9) NOT NULL,
  `TB_COLABORADOR_TB_DIVISAO_id_divisao` int(9) NOT NULL,
  `TB_ATRIBUTO_id_atributo` int(9) NOT NULL,
  `TB_ATRIBUTO_TB_ABRANGENCIA_id_abrangencia` int(9) NOT NULL,
  `TB_ATRIBUTO_TB_COMPLEXIDADE_id_complexidade` int(9) NOT NULL,
  `TB_ATRIBUTO_TB_IMPACTO_id_impacto` int(9) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura para tabela `TB_COMPLEXIDADE`
--

CREATE TABLE `TB_COMPLEXIDADE` (
  `id_complexidade` int(9) NOT NULL,
  `atributo` varchar(1) NOT NULL,
  `classificacao` int(2) NOT NULL,
  `tipo` varchar(20) NOT NULL,
  `nome` varchar(50) NOT NULL,
  `descricao` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Fazendo dump de dados para tabela `TB_COMPLEXIDADE`
--

INSERT INTO `TB_COMPLEXIDADE` (`id_complexidade`, `atributo`, `classificacao`, `tipo`, `nome`, `descricao`) VALUES
(1, 'a', 1, 'Desenvolvimento', 'Moderada', 'Depende de auxílio para tomada de decisão;\nAtua em 1 projeto/perfis diferentes;'),
(2, 'a', 2, 'Desenvolvimento', 'Alta', 'Atua em 2 projetos em paralelo/perfis diferentes;\nComplexidade dos projetos pode influenciar;\nPrever problemas;\nProjetos grandes;'),
(3, 'a', 3, 'Desenvolvimento', 'Altíssima', 'Prever problemas;\nVisão sistêmica;\nAtuar em paralelo em diferentes linguagens/assuntos/projetos;\nProjetos grandes x prazos curtos;\nAtuar sob pressão;\nAutonomia (independência na tomada de decisão);\nAtua em 3 ou mais projetos/perfis diferentes;'),
(4, 'b', 1, 'Desenvolvimento', 'Moderada', 'Pleno em um dos perfis;'),
(5, 'b', 2, 'Desenvolvimento', 'Alta', 'Consegue integrar de forma objetiva aspectos tanto de testes quanto de negócio;\nPleno em um perfil e mediano em outro(teste/requisitos)(Pleno = não precisa de ajuda para atuar, Mediano necessita de algum apoio);'),
(6, 'b', 3, 'Desenvolvimento', 'Altíssima', 'Consegue integrar de forma objetiva aspectos tanto de testes quanto de negócio, passando por experiência de usuário;\nVisão Plena;\nAntecipar necessidades;\nPropor alternativas que aumente a satisfação do cliente, na visão de negócio;'),
(7, 'e', 1, 'Desenvolvimento', 'Moderada', 'Atua no projeto com um perfil de forma plena;'),
(8, 'e', 2, 'Desenvolvimento', 'Alta', 'Sistemas com regras de negocio complexas;\nAtua no projeto com mais de um perfil de forma plena;'),
(9, 'e', 3, 'Desenvolvimento', 'Altíssima', 'Sistemas com necessidades de integrações;\nNovas tecnologias;'),
(10, 'f', 1, 'Desenvolvimento', 'Moderada', 'Documentação Padrão(Manual de utilização);'),
(11, 'f', 2, 'Desenvolvimento', 'Alta', 'Documentação Técnica (Readme, Manual para desenvolvedor);\nDiagrama UML;'),
(12, 'f', 3, 'Desenvolvimento', 'Altíssima', 'Documentação de componente;\nDocumentação de API;'),
(13, 'g', 1, 'Desenvolvimento', 'Moderada', 'Treinamento sobre o uso de um sistema;'),
(14, 'g', 2, 'Desenvolvimento', 'Alta', 'Repasse de conhecimento(Tecnologia);'),
(15, 'g', 3, 'Desenvolvimento', 'Altíssima', 'Ministrar treinamento sobre um assunto Novo no departamento(rápida absorção de novos conhecimentos demonstra rápida absorção;\nHistórico de boa avaliação dos treinamentos;'),
(16, 'h', 1, 'Desenvolvimento', 'Moderada', 'Tecnologias de apoio que não afetam infra;'),
(17, 'h', 2, 'Desenvolvimento', 'Alta', 'Marco de versão(semantic version);'),
(18, 'h', 3, 'Desenvolvimento', 'Altíssima', 'Quando demanda exige muito da infra;\nNão existe tecnologia similar;'),
(19, 'i', 1, 'Desenvolvimento', 'Moderada', ''),
(20, 'i', 2, 'Desenvolvimento', 'Alta', 'Integração(já foi feito);'),
(21, 'i', 3, 'Desenvolvimento', 'Altíssima', 'Ineditismo;\nNova Integração entre sistemas;\nManipulação de dados;\nLegado(Não existe suporte, ausência de documentação, não há desenvolvimento sendo feito para a plataforma);'),
(22, 'j', 1, 'Desenvolvimento', 'Moderada', 'Atua no projeto com um perfil de forma plena;'),
(23, 'j', 2, 'Desenvolvimento', 'Alta', 'Manutenção em sistemas com regras de negocio complexas;\nAtua no projeto com mais de um perfil de forma plena;'),
(24, 'j', 3, 'Desenvolvimento', 'Altíssima', 'Sistemas com necessidades de integrações;\nNovas tecnologias;'),
(25, 'l', 1, 'Desenvolvimento', 'Moderada', 'Trabalha somente com um tipo de controle de versão;'),
(26, 'l', 2, 'Desenvolvimento', 'Alta', 'Trabalho com equipes paralelas equipes internas do SERPRO(padrões, regras de código,etc);'),
(27, 'l', 3, 'Desenvolvimento', 'Altíssima', 'Trabalho com múltiplos controles de versão;\nGovernança do componente(Quando será atualizado, teste de segurança,etc);\nTrabalho com equipes paralelas equipes internas e externas do SERPRO(padrões, regras de código,etc);'),
(28, 'm', 1, 'Desenvolvimento', 'Moderada', 'Apenas uma linguagem'),
(29, 'm', 2, 'Desenvolvimento', 'Alta', 'Envolve até 2 linguagens  atrelado a integração continua;\nTime de desenvolvimento experiente;'),
(30, 'm', 3, 'Desenvolvimento', 'Altíssima', 'Envolve mais de 2 Linguagens atrelado à Integração contínua;\nTime inexperiente;\nExige tratamento da complexidade ciclomática;'),
(31, 'n', 1, 'Desenvolvimento', 'Moderada', 'Gerencia de 1 a 2 projetos;'),
(32, 'n', 2, 'Desenvolvimento', 'Alta', 'Gerencia mais de 2 projetos;'),
(33, 'n', 3, 'Desenvolvimento', 'Altíssima', 'Gerencia Equipes Remotas;\nExige interdependência entre equipes de diferentes áreas;\nSistemas com necessidades de integrações;'),
(34, 'c', 1, 'Desenvolvimento', 'Moderada', 'Sem informação Cadastrada'),
(35, 'c', 2, 'Desenvolvimento', 'Alta', 'Sem informação Cadastrada'),
(36, 'c', 3, 'Desenvolvimento', 'Altíssima', 'Sem informação Cadastrada'),
(37, 'd', 1, 'Desenvolvimento', 'Moderada', 'Sem informação Cadastrada'),
(38, 'd', 2, 'Desenvolvimento', 'Alta', 'Sem informação Cadastrada'),
(39, 'd', 3, 'Desenvolvimento', 'Altíssima', 'Sem informação Cadastrada'),
(40, 'k', 1, 'Desenvolvimento', 'Moderada', 'Sem informação Cadastrada'),
(41, 'k', 2, 'Desenvolvimento', 'Alta', 'Sem informação Cadastrada'),
(42, 'k', 3, 'Desenvolvimento', 'Altíssima', 'Sem informação Cadastrada');

-- --------------------------------------------------------

--
-- Estrutura para tabela `TB_DISTRIBUICAO`
--

CREATE TABLE `TB_DISTRIBUICAO` (
  `id_distribuicao` int(9) NOT NULL,
  `valor` decimal(10,2) NOT NULL COMMENT 'Valor total a ser distribído de FCT entre os colaboradores.',
  `qtde_faixas` int(2) NOT NULL,
  `dt_registro` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'Formato AAAA-MM-DD.'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Fazendo dump de dados para tabela `TB_DISTRIBUICAO`
--

INSERT INTO `TB_DISTRIBUICAO` (`id_distribuicao`, `valor`, `qtde_faixas`, `dt_registro`) VALUES
(1, '25000.00', 4, '2018-02-08 19:40:26');

-- --------------------------------------------------------

--
-- Estrutura para tabela `TB_DIVISAO`
--

CREATE TABLE `TB_DIVISAO` (
  `id_divisao` int(9) NOT NULL,
  `sigla` varchar(5) NOT NULL,
  `nome` varchar(100) NOT NULL,
  `descricao` text NOT NULL,
  `uf` varchar(2) NOT NULL COMMENT 'Local da Divisão.',
  `especialidade` varchar(40) NOT NULL COMMENT 'Desenvolvimento de Sistemas ou Design Gráfico.'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Fazendo dump de dados para tabela `TB_DIVISAO`
--

INSERT INTO `TB_DIVISAO` (`id_divisao`, `sigla`, `nome`, `descricao`, `uf`, `especialidade`) VALUES
(1, 'SDDEP', 'Experiência de Usuário e Portais', 'Divisão de Gestão de Demandas - Experiência de Usuário e Portais', 'DF', 'Desenvolvimento/Design'),
(3, 'SDDEF', 'Soluções de Front-end e Portais', 'Divisão de Desenvolvimento - Soluções de Front-end e Portais', 'DF', 'Desenvolvimento'),
(16, 'SDCSD', 'Soluções de Gerenciamento de Conteúdo - Salvador', 'Divisão de Desenvolvimento - Soluções de Gerenciamento de Conteúdo - Salvador', 'SD', 'Desenvolvimento'),
(17, 'SDCBH', 'Soluções de Gerenciamento de Conteúdo - Belo Horizonte', 'Divisão de Desenvolvimento - Soluções de Gerenciamento de Conteúdo - Belo Horizonte', 'BH', 'Desenvolvimento'),
(18, 'SDEXP', 'Soluções de Experiência do Usuário', 'Divisão de Design - Soluções de Experiência do Usuário', 'BH', 'Design');

-- --------------------------------------------------------

--
-- Estrutura para tabela `TB_FAIXA`
--

CREATE TABLE `TB_FAIXA` (
  `id_faixa` int(9) NOT NULL,
  `limite_inferior` decimal(10,2) NOT NULL,
  `limite_superior` decimal(10,2) NOT NULL,
  `pontuacao_referencia` decimal(5,2) NOT NULL,
  `qtde_pessoas` int(3) NOT NULL,
  `valor_rateio_pessoa` decimal(10,2) NOT NULL,
  `percentual` decimal(5,2) NOT NULL,
  `TB_REFERENCIA_FCT_GFE_id_referencia_fct_gfe` int(9) NOT NULL,
  `TB_DISTRIBUICAO_id_distribuicao` int(9) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Fazendo dump de dados para tabela `TB_FAIXA`
--

INSERT INTO `TB_FAIXA` (`id_faixa`, `limite_inferior`, `limite_superior`, `pontuacao_referencia`, `qtde_pessoas`, `valor_rateio_pessoa`, `percentual`, `TB_REFERENCIA_FCT_GFE_id_referencia_fct_gfe`, `TB_DISTRIBUICAO_id_distribuicao`) VALUES
(1, '49.58', '74.79', '74.79', 2, '253.83', '30.00', 54, 1),
(2, '74.79', '100.00', '87.40', 1, '377.12', '40.00', 59, 1),
(3, '100.00', '103.50', '101.75', 1, '365.85', '25.00', 62, 1),
(4, '103.50', '115.68', '109.59', 1, '458.69', '5.00', 63, 1);

-- --------------------------------------------------------

--
-- Estrutura para tabela `TB_IMPACTO`
--

CREATE TABLE `TB_IMPACTO` (
  `id_impacto` int(9) NOT NULL,
  `atributo` varchar(1) NOT NULL,
  `classificacao` int(1) NOT NULL,
  `tipo` varchar(50) NOT NULL,
  `nome` varchar(50) NOT NULL,
  `descricao` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Fazendo dump de dados para tabela `TB_IMPACTO`
--

INSERT INTO `TB_IMPACTO` (`id_impacto`, `atributo`, `classificacao`, `tipo`, `nome`, `descricao`) VALUES
(1, 'a', 1, 'Desenvolvimento', 'Relevante', 'A ausência gera pouco impacto (Não impacta a entrega);\nAtente somente a um tipo de contexto(tecnologia/versão);'),
(2, 'a', 2, 'Desenvolvimento', 'Muito', 'Gera impacto no projeto quando houver sua ausência(Qualidade);\nAtende alguns tipos de projetos (não domina todos assuntos);'),
(3, 'a', 3, 'Desenvolvimento', 'Altamente', 'Insubstituível (impacto muito alto, risco);\nBus factor (risco da substituição);\nSe não houver essa atribuição no projeto: risco de falhas, atrasos, qualidade...;\nPode atender qualquer tipo de projeto (assunto, complexidade...);\nVelocidade (entrega antes do prazo previsto);'),
(4, 'b', 3, 'Desenvolvimento', 'Altamente', 'Na Ausência do profissional perdemos nos quesitos;\nDomínio pleno do negócio e da tecnologia empregada;\nEstrategias antecipadas para eliminação de problemas;'),
(5, 'b', 1, 'Desenvolvimento', 'Relevante', 'Sem informação Cadastrada'),
(6, 'b', 2, 'Desenvolvimento', 'Muito', ' Sem informação Cadastrada'),
(7, 'e', 1, 'Desenvolvimento', 'Relevante', 'Entrega no prazo e com qualidade (conforme especificado);'),
(8, 'e', 2, 'Desenvolvimento', 'Muito', 'Entrega no prazo com qualidade acima da expectativa (propõe soluções);'),
(9, 'e', 3, 'Desenvolvimento', 'Altamente', 'Entrega antes do prazo com qualidade superior;\nAtinge os objetivos sem retrabalho;'),
(10, 'f', 1, 'Desenvolvimento', 'Relevante', 'Documentação é importante porém não é essencial para o andamento do projeto (pode ser feita em um segundo momento);'),
(11, 'f', 2, 'Desenvolvimento', 'Muito', 'Documentação é importante e essencial para o andamento do projeto;'),
(12, 'f', 3, 'Desenvolvimento', 'Altamente', 'Documentação extremamente necessária (Documentação incompleta do componente pode causar atraso na entrega e dificuldades de uso);\nErro na integração do componente com o projeto;\nGrau de reuso;'),
(13, 'g', 1, 'Desenvolvimento', 'Relevante', 'Treinamento de Uso de algum sistema desenvolvido;'),
(14, 'g', 2, 'Desenvolvimento', 'Muito', 'Repasse de conhecimentos;'),
(15, 'g', 3, 'Desenvolvimento', 'Altamente', 'Quando o treinamento de conhecimentos é uma pré condição para o projeto;\nQuando a equipe tem a percepção de necessidade de nivelar os conhecimentos(Implica no aumento de produtividade da equipe);'),
(16, 'h', 1, 'Desenvolvimento', 'Relevante', 'Internalização com restrições de uso;\nInternalização de ferramentas de apoio(aumenta produtividade/melhoria comunicação);'),
(17, 'h', 2, 'Desenvolvimento', 'Muito', 'Internalização de uma tecnologia sem restrições de uso e sem a necessidade de treinamento/repasse(infra/segurança);'),
(18, 'h', 3, 'Desenvolvimento', 'Altamente', 'Exige internalização por razão de negócio(prazo curto para internalizar uma tecnologia que será utilizada nos sistemas produtivos);\nQuando houver necessidade de treinamentos para infra/segurança/contratação;'),
(19, 'i', 1, 'Desenvolvimento', 'Relevante', 'Boa assertividade porém não se preocupa muito com os riscos.'),
(20, 'i', 2, 'Desenvolvimento', 'Muito', 'Boa assertividade com alguma lacuna na análise de riscos(sem impactos significativos);'),
(21, 'i', 3, 'Desenvolvimento', 'Altamente', 'Assertividade nas estimativas;\nConfiança do cliente(cumprimento dos prazos);\nMelhores resultados;\nQualidade incluída(Testes automatizados, testes unitários);\nDiscrepância entre o valor orçado vs implementado;\nAnálise de riscos Plena;'),
(22, 'j', 1, 'Desenvolvimento', 'Relevante', 'Entrega no prazo e com qualidade (conforme especificado);'),
(23, 'j', 2, 'Desenvolvimento', 'Muito', 'Entrega no prazo com qualidade acima da expectativa (propõe soluções);'),
(24, 'j', 3, 'Desenvolvimento', 'Altamente', 'Entrega antes do prazo com qualidade superior;\nAtinge os objetivos sem retrabalho;'),
(25, 'l', 1, 'Desenvolvimento', 'Relevante', 'Documentação eficaz(Principais cenários de uso, quando não é incompatível);'),
(26, 'l', 2, 'Desenvolvimento', 'Muito', 'Exige o trabalha em algum canal de comunicação(lançamentos, novas versões, etc);'),
(27, 'l', 3, 'Desenvolvimento', 'Altamente', 'Release quebrada;\nAdministração de componente reusável(quando ocorre problema impacto é maior);\nFaz análise de risco;'),
(28, 'm', 1, 'Desenvolvimento', 'Relevante', 'Manutenibilidade;'),
(29, 'm', 2, 'Desenvolvimento', 'Muito', 'Qualidade;'),
(30, 'm', 3, 'Desenvolvimento', 'Altamente', 'RNF(complexidade ciclomatica);\nIdentifica aspectos relacionados a segurança e performance;'),
(31, 'n', 1, 'Desenvolvimento', 'Relevante', 'Riscos Identificados;\nPrazos curtos;'),
(32, 'n', 2, 'Desenvolvimento', 'Muito', 'Onde a entrega impacta somente o projeto;\nProjeto estratégico;'),
(33, 'n', 3, 'Desenvolvimento', 'Altamente', 'Onde a entrega impacta outros projetos;\nAlto Risco;'),
(37, 'c', 3, 'Desenvolvimento', 'Altamente', 'Sem informação Cadastrada'),
(38, 'c', 1, 'Desenvolvimento', 'Relevante', 'Sem informação Cadastrada'),
(39, 'c', 2, 'Desenvolvimento', 'Muito', 'Sem informação Cadastrada'),
(40, 'd', 1, 'Desenvolvimento', 'Relevante', 'Sem informação Cadastrada'),
(41, 'd', 2, 'Desenvolvimento', 'Muito', 'Sem informação Cadastrada'),
(42, 'd', 3, 'Desenvolvimento', 'Altamente', 'Sem informação Cadastrada'),
(43, 'k', 1, 'Desenvolvimento', 'Relevante', 'Sem informação Cadastrada'),
(44, 'k', 2, 'Desenvolvimento', 'Muito', 'Sem informação Cadastrada'),
(45, 'k', 3, 'Desenvolvimento', 'Altamente', 'Sem informação Cadastrada');

-- --------------------------------------------------------

--
-- Estrutura para tabela `TB_PAPEL`
--

CREATE TABLE `TB_PAPEL` (
  `id_papel` int(9) NOT NULL,
  `tipo` varchar(50) NOT NULL COMMENT 'Papel de Dsenvolvimento ou de Design.',
  `nome` varchar(50) NOT NULL,
  `descricao` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='Tabela de papeis dos colaboradores.';

--
-- Fazendo dump de dados para tabela `TB_PAPEL`
--

INSERT INTO `TB_PAPEL` (`id_papel`, `tipo`, `nome`, `descricao`) VALUES
(1, 'Desenvolvimento', 'Front-end (Desenvolvimento) ', 'Desenvolvimento front-end.'),
(2, 'Desenvolvimento', 'Arquiteto', 'Arquiteto de software.'),
(3, 'Desenvolvimento', 'Testes', 'Colaboradores que possuem conhecimento aprofundado em testes.'),
(4, 'Desenvolvimento', 'Requisitos', 'Colaboradores que possuem conhecimento aprofundado em requisitos.'),
(5, 'Desenvolvimento', 'Back-end', 'Colaboradores que possuem conhecimento aprofundado em Back-end.'),
(6, 'Desenvolvimento', 'Banco', 'Colaboradores que possuem conhecimento aprofundado em Banco de Dados.'),
(7, 'Design', 'Front-end (Design)', 'Colaboradores que possuem conhecimento aprofundado em Front-end e são das equipes de Design.'),
(8, 'Design', 'UI', 'Colaboradores que possuem conhecimento aprofundado em UI - User Interface.'),
(9, 'Design', 'UX', 'Colaboradores que possuem conhecimento aprofundado em UX - User Experience.');

-- --------------------------------------------------------

--
-- Estrutura para tabela `TB_PAPEL_has_TB_COLABORADOR`
--

CREATE TABLE `TB_PAPEL_has_TB_COLABORADOR` (
  `TB_PAPEL_id_papel` int(9) NOT NULL,
  `TB_COLABORADOR_id_colaborador` int(9) NOT NULL,
  `TB_COLABORADOR_TB_REFERENCIA_FCT_GFE_id_referencia_fct_gfe` int(9) NOT NULL,
  `TB_COLABORADOR_TB_DIVISAO_id_divisao` int(9) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura para tabela `TB_PERFIL`
--

CREATE TABLE `TB_PERFIL` (
  `id_perfil` int(11) NOT NULL,
  `ds_perfil` varchar(20) NOT NULL COMMENT '1 - ADMINISTRADOR 2 - LIDER 3 - COLABORADOR '
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Fazendo dump de dados para tabela `TB_PERFIL`
--

INSERT INTO `TB_PERFIL` (`id_perfil`, `ds_perfil`) VALUES
(1, 'ADMINISTRADOR'),
(2, 'LIDER'),
(3, 'COLABORADOR');

-- --------------------------------------------------------

--
-- Estrutura para tabela `TB_PESOS`
--

CREATE TABLE `TB_PESOS` (
  `id_pesos` int(9) NOT NULL,
  `quantidade` int(2) NOT NULL COMMENT 'Quantidade de papeis ou projetos.',
  `tipo` varchar(20) NOT NULL COMMENT 'Nomes Definidos: Quantidade de papeis, Quantidade de projetos.',
  `descricao` text NOT NULL,
  `valor` decimal(5,3) NOT NULL,
  `dt_registro` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Fazendo dump de dados para tabela `TB_PESOS`
--

INSERT INTO `TB_PESOS` (`id_pesos`, `quantidade`, `tipo`, `descricao`, `valor`, `dt_registro`) VALUES
(4, 2, 'Papel', 'Peso para o calculo quando o colaborador estiver executando em 2 papeis.', '1.300', '2017-06-06 03:00:00'),
(5, 3, 'Papel', 'Peso para o calculo quando o colaborador estiver envolvido em 2 papeis.', '1.500', '2017-06-06 03:00:00'),
(6, 2, 'Projeto', 'Peso para o calculo quando o colaborador estiver envolvido em 2 projetos.', '1.125', '2017-11-09 16:27:04'),
(7, 3, 'Projeto', 'Peso para o calculo quando o colaborador estiver envolvido em 3 projetos.', '1.250', '2017-06-06 03:00:00'),
(8, 4, 'Projeto', 'Peso para o calculo quando o colaborador estiver envolvido em 4 projetos.', '1.375', '2017-10-04 15:28:28'),
(9, 5, 'Projeto', 'Peso para o calculo quando o colaborador estiver envolvido em 5 projetos.', '1.500', '2017-11-09 16:28:03'),
(10, 6, 'Projeto', 'Peso para o calculo quando o colaborador estiver envolvido em 6 projetos.', '1.625', '2017-11-09 16:28:32'),
(11, 2, 'Tecnologia', 'Peso para calculo de conhecimento em 2 tecnologias.', '1.100', '2017-11-24 18:53:49'),
(12, 3, 'Tecnologia', 'Peso para calculo de conhecimento em 3 tecnologias.', '1.125', '2017-11-24 18:53:59'),
(13, 4, 'Tecnologia', 'Peso para calculo de conhecimento em 4 tecnologias.', '1.150', '2017-11-24 18:54:23'),
(14, 5, 'Tecnologia', 'Peso para calculo de conhecimento em 5 tecnologias.', '1.175', '2017-11-24 18:54:42'),
(15, 6, 'Tecnologia', 'Peso para calculo de conhecimento em 6 tecnologias.', '1.200', '2017-12-12 11:09:16');

-- --------------------------------------------------------

--
-- Estrutura para tabela `TB_PROJETO`
--

CREATE TABLE `TB_PROJETO` (
  `id_projeto` int(9) NOT NULL,
  `titulo` varchar(30) NOT NULL COMMENT 'Titulo do Projeto.',
  `cod_servico` int(5) NOT NULL COMMENT 'Código de Serviço do Projeto.',
  `descricao` text NOT NULL COMMENT 'Descrição do Projeto.',
  `dt_inicio` date NOT NULL COMMENT 'Data de início de atendimento do Projeto.',
  `dt_fim` date NOT NULL COMMENT 'Data fim prevista de atendimento do Projeto.',
  `abrangencia` varchar(50) NOT NULL COMMENT 'Projeto de software, liderança de projeto ou especialista.'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Fazendo dump de dados para tabela `TB_PROJETO`
--

INSERT INTO `TB_PROJETO` (`id_projeto`, `titulo`, `cod_servico`, `descricao`, `dt_inicio`, `dt_fim`, `abrangencia`) VALUES
(1, 'Intercâmbio de Informações', 10115, 'Intercâmbio de informações União Europeia.', '2017-08-02', '2017-11-21', 'Desenvolvimento'),
(2, 'ECAT', 10445, 'ECAT - COMPARTILHAMENTO DE INFORMAÇÕES ENTRE ADMINISTRAÇÕES TRIBUTÁRIAS', '2017-10-03', '2017-10-27', 'Desenvolvimento'),
(3, 'Portal Tesouro Direto', 10166, 'Tesouro Direto Web - Desenvolvimento', '2017-01-01', '2017-07-31', 'Desenvolvimento'),
(4, 'ENAT', 37185, 'SITIO DO ENAT', '2017-01-01', '2017-07-31', 'Desenvolvimento'),
(5, 'Novo Portal SERPRO', 10261, 'Novo Portal Serpro.', '2017-01-01', '2017-07-31', 'Desenvolvimento'),
(6, 'PUCOMEX', 8275, 'PORTAL ÚNICO SISCOMEX ANUENTES INTERNET (PUCOMEX)', '2017-01-01', '2017-07-31', 'Desenvolvimento'),
(7, 'VICOMEX', 7302, 'VICOMEX - VISÃO INTEGRADA DO COMÉRCIO EXTERIOR', '2017-01-01', '2017-07-31', 'Desenvolvimento'),
(8, 'Anexação', 7353, 'ANEXAÇÃO ELETRÔNICA DE DOCUMENTOS', '2017-07-11', '2017-07-31', 'Desenvolvimento'),
(9, 'Workflow', 7881, 'SISCOMEX - WORKFLOW DO DESPACHO ADUANEIRO', '2017-01-01', '2017-07-31', 'Desenvolvimento'),
(10, 'SISCOP', 80458, 'OCORRENCIAS DO SISCOP', '2017-01-01', '2017-07-31', 'Desenvolvimento'),
(11, 'SERPRO Design', 80612, 'Serpro Design', '2017-01-01', '2017-07-31', 'Desenvolvimento'),
(12, 'Especialista', 0, 'Especialista em alguma tecnologia, metodologia ou linguagem.', '2017-01-01', '2017-07-31', 'Desenvolvimento'),
(13, 'Portal STN', 4030, 'PORTAL STN – APLICAÇÕES', '2017-01-01', '2017-07-31', 'Desenvolvimento'),
(14, 'Portal Tesouro Transparente', 8164, 'PORTAL TESOURO TRANSPARENTE', '2017-01-01', '2017-07-31', 'Desenvolvimento'),
(15, 'Líder de projeto', 0, 'Liderança de projetos de software e de Atividades não software.', '2017-01-01', '2017-07-31', 'Desenvolvimento'),
(16, 'CNIR', 7578, 'CNIR - PORTAL DO CADASTRO RURAL', '2017-01-01', '2017-07-31', 'Desenvolvimento'),
(17, 'SERPRO Design v3', 80612, 'Serpro Design.', '2017-01-01', '2017-07-31', 'Desenvolvimento'),
(18, 'Portal GTIC', 13129, 'HOSPEDAGEM DE PORTAL GTIC', '2017-01-01', '2017-07-31', 'Desenvolvimento'),
(19, 'Blog RFB', 5901, 'BLOG DA RFB', '2017-01-01', '2017-07-31', 'Desenvolvimento'),
(20, 'Portal DW RFB', 8302, 'RFB - PORTAL CENTRAL DE GESTÃO', '2017-01-01', '2017-07-31', 'Desenvolvimento'),
(21, 'Portal da Presidência', 78489, 'PORTAL DA PRESIDÊNCIA', '2017-01-01', '2017-07-31', 'Desenvolvimento'),
(22, 'Sítio AGU', 37819, 'AGU - PORTAL AGU', '2017-01-01', '2017-07-31', 'Desenvolvimento'),
(23, 'Moodle ESAF', 10614, 'ESAF - EAD ESCOLA VIRTUAL ESAF - PLATAFORMA MOODLE', '2017-01-01', '2017-07-31', 'Desenvolvimento');

-- --------------------------------------------------------

--
-- Estrutura para tabela `TB_PROJETO_has_TB_COLABORADOR`
--

CREATE TABLE `TB_PROJETO_has_TB_COLABORADOR` (
  `TB_PROJETO_id_projeto` int(9) NOT NULL,
  `TB_COLABORADOR_id_colaborador` int(9) NOT NULL,
  `TB_COLABORADOR_TB_REFERENCIA_FCT_GFE_id_referencia_fct_gfe` int(9) NOT NULL,
  `TB_COLABORADOR_TB_DIVISAO_id_divisao` int(9) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura para tabela `TB_REFERENCIA_FCT_GFE`
--

CREATE TABLE `TB_REFERENCIA_FCT_GFE` (
  `id_referencia_fct_gfe` int(9) NOT NULL,
  `cargo` varchar(8) NOT NULL COMMENT 'Analista, técnico ou auxiliar.',
  `num_referencia` int(2) NOT NULL COMMENT 'Número de referência na tabela de FCT/GFE.',
  `valor_referencia` decimal(10,2) NOT NULL COMMENT 'Valor de referencia de acordo com a tabela FCT/GFE.',
  `dt_atualizacao` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Fazendo dump de dados para tabela `TB_REFERENCIA_FCT_GFE`
--

INSERT INTO `TB_REFERENCIA_FCT_GFE` (`id_referencia_fct_gfe`, `cargo`, `num_referencia`, `valor_referencia`, `dt_atualizacao`) VALUES
(1, 'Analista', 12, '800.99', '2017-11-01 11:56:16'),
(2, 'Técnico', 1, '176.34', '2016-05-01 03:00:00'),
(3, 'Técnico', 2, '191.16', '2016-05-01 03:00:00'),
(4, 'Técnico', 3, '207.21', '2016-05-01 03:00:00'),
(6, 'Técnico', 5, '243.48', '2016-05-01 03:00:00'),
(7, 'Técnico', 6, '263.92', '2016-05-01 03:00:00'),
(8, 'Técnico', 7, '286.10', '2016-05-01 03:00:00'),
(9, 'Técnico', 8, '310.13', '2016-05-01 03:00:00'),
(10, 'Técnico', 9, '336.18', '2016-05-01 03:00:00'),
(11, 'Técnico', 10, '364.43', '2016-05-01 03:00:00'),
(12, 'Técnico', 11, '395.77', '2017-10-26 11:36:30'),
(13, 'Técnico', 12, '428.21', '2016-05-01 03:00:00'),
(14, 'Técnico', 13, '464.19', '2016-05-01 03:00:00'),
(15, 'Técnico', 14, '503.17', '2016-05-01 03:00:00'),
(16, 'Técnico', 15, '545.44', '2016-05-01 03:00:00'),
(17, 'Técnico', 16, '591.27', '2016-05-01 03:00:00'),
(18, 'Técnico', 17, '640.93', '2016-05-01 03:00:00'),
(19, 'Técnico', 18, '694.76', '2016-05-01 03:00:00'),
(20, 'Técnico', 19, '753.13', '2016-05-01 03:00:00'),
(21, 'Técnico', 20, '816.39', '2016-05-01 03:00:00'),
(22, 'Técnico', 21, '884.96', '2016-05-01 03:00:00'),
(23, 'Técnico', 22, '959.30', '2016-05-01 03:00:00'),
(24, 'Técnico', 23, '1039.89', '2016-05-01 03:00:00'),
(25, 'Técnico', 24, '1127.21', '2016-05-01 03:00:00'),
(26, 'Técnico', 25, '1221.90', '2016-05-01 03:00:00'),
(27, 'Técnico', 26, '1324.56', '2016-05-01 03:00:00'),
(28, 'Técnico', 27, '1435.84', '2016-05-01 03:00:00'),
(29, 'Técnico', 28, '1556.43', '2016-05-01 03:00:00'),
(30, 'Técnico', 29, '1687.17', '2016-05-01 03:00:00'),
(31, 'Técnico', 30, '1828.90', '2016-05-01 03:00:00'),
(32, 'Técnico', 31, '1982.52', '2016-05-01 03:00:00'),
(33, 'Técnico', 32, '2149.04', '2016-05-01 03:00:00'),
(34, 'Técnico', 33, '2329.58', '2016-05-01 03:00:00'),
(35, 'Técnico', 34, '2525.26', '2016-05-01 03:00:00'),
(36, 'Técnico', 35, '2737.36', '2016-05-01 03:00:00'),
(37, 'Técnico', 36, '2967.32', '2016-05-01 03:00:00'),
(38, 'Técnico', 37, '3216.57', '2016-05-01 03:00:00'),
(39, 'Técnico', 38, '3486.76', '2016-05-01 03:00:00'),
(40, 'Técnico', 39, '3779.64', '2016-05-01 03:00:00'),
(41, 'Técnico', 40, '4097.13', '2016-05-01 03:00:00'),
(42, 'Analista', 1, '329.84', '2016-05-01 03:00:00'),
(43, 'Analista', 2, '357.55', '2016-05-01 03:00:00'),
(44, 'Analista', 3, '387.57', '2016-05-01 03:00:00'),
(45, 'Analista', 4, '420.13', '2016-05-01 03:00:00'),
(46, 'Analista', 5, '455.42', '2016-05-01 03:00:00'),
(47, 'Analista', 6, '493.69', '2016-05-01 03:00:00'),
(48, 'Analista', 7, '535.14', '2016-05-01 03:00:00'),
(49, 'Analista', 8, '580.09', '2016-05-01 03:00:00'),
(50, 'Analista', 9, '628.82', '2016-05-01 03:00:00'),
(51, 'Analista', 10, '681.63', '2016-05-01 03:00:00'),
(52, 'Analista', 11, '738.91', '2016-05-01 03:00:00'),
(53, 'Analista', 13, '868.26', '2016-05-01 03:00:00'),
(54, 'Analista', 14, '941.18', '2016-05-01 03:00:00'),
(55, 'Analista', 15, '1020.22', '2016-05-01 03:00:00'),
(56, 'Analista', 16, '1105.93', '2016-05-01 03:00:00'),
(57, 'Analista', 17, '1198.83', '2016-05-01 03:00:00'),
(58, 'Analista', 18, '1299.54', '2016-05-01 03:00:00'),
(59, 'Analista', 19, '1408.71', '2016-05-01 03:00:00'),
(60, 'Analista', 20, '1527.04', '2016-05-01 03:00:00'),
(61, 'Analista', 21, '1655.30', '2016-05-01 03:00:00'),
(62, 'Analista', 22, '1794.35', '2016-05-01 03:00:00'),
(63, 'Analista', 23, '1945.08', '2016-05-01 03:00:00'),
(64, 'Analista', 24, '2108.45', '2016-05-01 03:00:00'),
(65, 'Analista', 25, '2285.58', '2016-05-01 03:00:00'),
(66, 'Analista', 26, '2477.55', '2016-05-01 03:00:00'),
(67, 'Analista', 27, '2685.67', '2016-05-01 03:00:00'),
(68, 'Analista', 28, '2911.28', '2016-05-01 03:00:00'),
(69, 'Analista', 29, '3155.82', '2016-05-01 03:00:00'),
(70, 'Analista', 30, '3420.90', '2016-05-01 03:00:00'),
(71, 'Analista', 31, '3708.27', '2016-05-01 03:00:00'),
(72, 'Analista', 32, '4019.76', '2016-05-01 03:00:00'),
(73, 'Analista', 33, '4357.43', '2016-05-01 03:00:00'),
(74, 'Analista', 34, '4723.44', '2016-05-01 03:00:00'),
(75, 'Analista', 35, '5120.23', '2016-05-01 03:00:00'),
(76, 'Analista', 36, '5550.30', '2016-05-01 03:00:00'),
(77, 'Analista', 37, '6016.54', '2016-05-01 03:00:00'),
(78, 'Analista', 38, '6521.94', '2016-05-01 03:00:00'),
(79, 'Analista', 39, '7069.76', '2016-05-01 03:00:00'),
(80, 'Analista', 40, '7663.62', '2016-05-01 03:00:00');

-- --------------------------------------------------------

--
-- Estrutura para tabela `TB_RESULTADO`
--

CREATE TABLE `TB_RESULTADO` (
  `id_resultado` int(9) NOT NULL,
  `pontuacao` decimal(6,2) NOT NULL COMMENT 'Pontuação do Resultado da Avaliação.',
  `dt_resultado` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `ajuste` decimal(5,2) NOT NULL,
  `ociosidade` decimal(9,2) NOT NULL,
  `referencia_fct_gfe_pontuacao` int(9) NOT NULL,
  `TB_COLABORADOR_id_colaborador` int(9) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Fazendo dump de dados para tabela `TB_RESULTADO`
--

INSERT INTO `TB_RESULTADO` (`id_resultado`, `pontuacao`, `dt_resultado`, `ajuste`, `ociosidade`, `referencia_fct_gfe_pontuacao`, `TB_COLABORADOR_id_colaborador`) VALUES
(25, '47.70', '2018-01-30 16:28:46', '-33.53', '0.00', 4, 3),
(27, '101.19', '2018-01-30 16:49:56', '5.05', '0.00', 30, 7),
(28, '55.50', '2018-02-05 19:08:12', '11.79', '12.12', 19, 2),
(29, '65.90', '2018-02-06 11:11:25', '-51.73', '20.00', 4, 3);

-- --------------------------------------------------------

--
-- Estrutura para tabela `TB_TECNOLOGIA`
--

CREATE TABLE `TB_TECNOLOGIA` (
  `id_tecnologia` int(9) NOT NULL,
  `tipo` varchar(50) NOT NULL,
  `nome` varchar(20) NOT NULL,
  `descricao` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Fazendo dump de dados para tabela `TB_TECNOLOGIA`
--

INSERT INTO `TB_TECNOLOGIA` (`id_tecnologia`, `tipo`, `nome`, `descricao`) VALUES
(3, 'Desenvolvimento', 'Liferay', 'Linguagem de programação Liferay.'),
(4, 'Desenvolvimento', 'Angular', 'Linguagem de programação angular.'),
(5, 'Desenvolvimento', 'Html/css (Desenv)', 'Linguagem de marcação de texto Html e css.'),
(6, 'Design', 'Html/css (Design)', 'Linguagem de marcação de texto Html e css.'),
(7, 'Desenvolvimento', 'Plone', 'Linguagem CMS Zope Plone.'),
(8, 'Desenvolvimento', 'JavaScript', 'Linguagem de programação para browsers.'),
(9, 'Desenvolvimento', 'Ckan', 'Linguagem Ckan.');

-- --------------------------------------------------------

--
-- Estrutura para tabela `TB_TECNOLOGIA_has_TB_COLABORADOR`
--

CREATE TABLE `TB_TECNOLOGIA_has_TB_COLABORADOR` (
  `TB_TECNOLOGIA_id_tecnologia` int(9) NOT NULL,
  `TB_COLABORADOR_id_colaborador` int(9) NOT NULL,
  `TB_COLABORADOR_TB_REFERENCIA_FCT_GFE_id_referencia_fct_gfe` int(9) NOT NULL,
  `TB_COLABORADOR_TB_DIVISAO_id_divisao` int(9) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura para tabela `TB_TECNOLOGIA_has_TB_PROJETO`
--

CREATE TABLE `TB_TECNOLOGIA_has_TB_PROJETO` (
  `TB_TECNOLOGIA_id_tecnologia` int(9) NOT NULL,
  `TB_PROJETO_id_projeto` int(9) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura stand-in para view `VW_ATRIBUTO`
-- (Veja abaixo para a visão atual)
--
CREATE TABLE `VW_ATRIBUTO` (
`idAtributo` int(9)
,`letra` varchar(1)
,`descricao` text
,`tipo` varchar(50)
,`abrangenciaNome` varchar(62)
,`complexidadeNome` varchar(62)
,`impactoNome` varchar(62)
);

-- --------------------------------------------------------

--
-- Estrutura stand-in para view `VW_ATRIBUTO_COLABORADOR`
-- (Veja abaixo para a visão atual)
--
CREATE TABLE `VW_ATRIBUTO_COLABORADOR` (
`letra` varchar(1)
,`descricao` text
,`id_colaborador` int(9)
);

-- --------------------------------------------------------

--
-- Estrutura stand-in para view `VW_AVALIACAO`
-- (Veja abaixo para a visão atual)
--
CREATE TABLE `VW_AVALIACAO` (
`id_resultado` int(9)
,`pontuacao` decimal(6,2)
,`dt_resultado` varchar(10)
,`ajuste` decimal(5,2)
,`ociosidade` decimal(9,2)
,`referencia_fct_gfe_pontuacao` int(9)
,`TB_COLABORADOR_id_colaborador` int(9)
,`no_colaborador` varchar(50)
,`faixa` int(9)
,`sigla_divisao` varchar(5)
,`valor_rateio` decimal(32,2)
);

-- --------------------------------------------------------

--
-- Estrutura stand-in para view `VW_COLABORADOR`
-- (Veja abaixo para a visão atual)
--
CREATE TABLE `VW_COLABORADOR` (
`idColaborador` int(9)
,`nome` varchar(50)
,`matricula` bigint(10)
,`telefone` bigint(11)
,`especialidade` varchar(40)
,`salario` varchar(15)
,`percentual_salario` varchar(15)
,`referenciaFct` varchar(40)
,`sigla` varchar(5)
,`ref_fct_atual` bigint(11)
,`pontuacao_inicial` decimal(10,2)
,`ref_pontuacao_fct` bigint(11)
);

-- --------------------------------------------------------

--
-- Estrutura stand-in para view `VW_DETALHE_ATRIBUTO`
-- (Veja abaixo para a visão atual)
--
CREATE TABLE `VW_DETALHE_ATRIBUTO` (
`idAtributo` int(9)
,`Atributo` varchar(1)
,`AbrangenciaClassificacao` int(2)
,`AbrangenciaNome` varchar(50)
,`AbrangenciaDescricao` text
,`ComplexidadeClassificacao` int(2)
,`ComplexidadeNome` varchar(50)
,`ComplexidadeDescricao` text
,`ImpactoClassificacao` int(1)
,`ImpactoNome` varchar(50)
,`ImpactoDescricao` text
);

-- --------------------------------------------------------

--
-- Estrutura stand-in para view `VW_DISTRIBUICAO`
-- (Veja abaixo para a visão atual)
--
CREATE TABLE `VW_DISTRIBUICAO` (
`id_distribuicao` int(9)
,`valor` varchar(15)
,`pontuacao_minima` decimal(6,2)
,`pontuacao_maxima` decimal(6,2)
,`qtde_faixas` int(2)
,`dt_registro` varchar(10)
);

-- --------------------------------------------------------

--
-- Estrutura stand-in para view `VW_DISTRIBUICAO_FAIXA`
-- (Veja abaixo para a visão atual)
--
CREATE TABLE `VW_DISTRIBUICAO_FAIXA` (
`id_faixa` int(9)
,`limite_inferior` decimal(10,2)
,`limite_superior` decimal(10,2)
,`pontuacao_referencia` decimal(5,2)
,`qtde_pessoas` int(3)
,`valor_rateio_pessoa` decimal(10,2)
,`percentual` decimal(5,2)
,`TB_REFERENCIA_FCT_GFE_id_referencia_fct_gfe` int(9)
);

-- --------------------------------------------------------

--
-- Estrutura stand-in para view `VW_PAPEL_ATRIBUTO`
-- (Veja abaixo para a visão atual)
--
CREATE TABLE `VW_PAPEL_ATRIBUTO` (
`TB_PAPEL_id_papel` int(9)
,`letra` varchar(1)
,`descricao` text
,`descricaoAbrangencia1` text
,`descricaoAbrangencia2` text
,`descricaoAbrangencia3` text
,`descricaoComplexidade1` text
,`descricaoComplexidade2` text
,`descricaoComplexidade3` text
,`descricaoImpacto1` text
,`descricaoImpacto2` text
,`descricaoImpacto3` text
);

-- --------------------------------------------------------

--
-- Estrutura stand-in para view `VW_PAPEL_COLABORADOR`
-- (Veja abaixo para a visão atual)
--
CREATE TABLE `VW_PAPEL_COLABORADOR` (
`id_colaborador` int(9)
,`ID_PAPEL` int(9)
,`NOME` varchar(50)
);

-- --------------------------------------------------------

--
-- Estrutura para view `VW_ATRIBUTO`
--
DROP TABLE IF EXISTS `VW_ATRIBUTO`;

CREATE ALGORITHM=UNDEFINED DEFINER=`tiagooliveira`@`localhost` SQL SECURITY DEFINER VIEW `VW_ATRIBUTO`  AS  select `tb0`.`id_atributo` AS `idAtributo`,`tb0`.`letra` AS `letra`,`tb0`.`descricao` AS `descricao`,`tb1`.`tipo` AS `tipo`,concat(`tb1`.`classificacao`,'-',`tb1`.`nome`) AS `abrangenciaNome`,concat(`tb2`.`classificacao`,'-',`tb2`.`nome`) AS `complexidadeNome`,concat(`tb3`.`classificacao`,'-',`tb3`.`nome`) AS `impactoNome` from (((`TB_ATRIBUTO` `tb0` join `TB_ABRANGENCIA` `tb1`) join `TB_COMPLEXIDADE` `tb2`) join `TB_IMPACTO` `tb3`) where ((`tb0`.`TB_ABRANGENCIA_id_abrangencia` = `tb1`.`id_abrangencia`) and (`tb0`.`TB_COMPLEXIDADE_id_complexidade` = `tb2`.`id_complexidade`) and (`tb0`.`TB_IMPACTO_id_impacto` = `tb3`.`id_impacto`)) order by `tb0`.`id_atributo` ;

-- --------------------------------------------------------

--
-- Estrutura para view `VW_ATRIBUTO_COLABORADOR`
--
DROP TABLE IF EXISTS `VW_ATRIBUTO_COLABORADOR`;

CREATE ALGORITHM=UNDEFINED DEFINER=`tiagooliveira`@`localhost` SQL SECURITY DEFINER VIEW `VW_ATRIBUTO_COLABORADOR`  AS  select `tb3`.`letra` AS `letra`,`tb3`.`descricao` AS `descricao`,`tb2`.`id_colaborador` AS `id_colaborador` from ((`TB_COLABORADOR_has_TB_ATRIBUTO` `tb1` join `TB_COLABORADOR` `tb2`) join `TB_ATRIBUTO` `tb3`) where ((`tb1`.`TB_COLABORADOR_id_colaborador` = `tb2`.`id_colaborador`) and (`tb1`.`TB_ATRIBUTO_id_atributo` = `tb3`.`id_atributo`) and (`tb1`.`TB_COLABORADOR_id_colaborador` = `tb2`.`id_colaborador`)) ;

-- --------------------------------------------------------

--
-- Estrutura para view `VW_AVALIACAO`
--
DROP TABLE IF EXISTS `VW_AVALIACAO`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `VW_AVALIACAO`  AS  select `tba`.`id_resultado` AS `id_resultado`,`tba`.`pontuacao` AS `pontuacao`,date_format(`tba`.`dt_resultado`,'%d/%m/%Y') AS `dt_resultado`,`tba`.`ajuste` AS `ajuste`,`tba`.`ociosidade` AS `ociosidade`,`tba`.`referencia_fct_gfe_pontuacao` AS `referencia_fct_gfe_pontuacao`,`tba`.`TB_COLABORADOR_id_colaborador` AS `TB_COLABORADOR_id_colaborador`,`clb`.`nome` AS `no_colaborador`,`clb`.`TB_FAIXA_id_faixa` AS `faixa`,(select `dv`.`sigla` from `TB_DIVISAO` `dv` where (`dv`.`id_divisao` = `clb`.`TB_DIVISAO_id_divisao`)) AS `sigla_divisao`,(select sum(`t1`.`valor_rateio_pessoa`) from `TB_FAIXA` `t1` where (`t1`.`limite_superior` <= (select `TB_FAIXA`.`limite_superior` from `TB_FAIXA` where (`TB_FAIXA`.`id_faixa` = `clb`.`TB_FAIXA_id_faixa`)))) AS `valor_rateio` from ((`TB_RESULTADO` `tba` join `TB_COLABORADOR` `clb`) join `TB_FAIXA` `tbf`) where ((`clb`.`id_colaborador` = `tba`.`TB_COLABORADOR_id_colaborador`) and (`tbf`.`id_faixa` = `clb`.`TB_FAIXA_id_faixa`)) order by `clb`.`nome`,`tba`.`dt_resultado` ;

-- --------------------------------------------------------

--
-- Estrutura para view `VW_COLABORADOR`
--
DROP TABLE IF EXISTS `VW_COLABORADOR`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `VW_COLABORADOR`  AS  select `tb0`.`id_colaborador` AS `idColaborador`,`tb0`.`nome` AS `nome`,`tb0`.`matricula` AS `matricula`,`tb0`.`telefone` AS `telefone`,`tb0`.`especialidade` AS `especialidade`,concat('R$ ',`tb0`.`salario`) AS `salario`,concat('R$ ',`tb0`.`percentual_salario`) AS `percentual_salario`,concat(`tb1`.`num_referencia`,' - ',`tb1`.`cargo`,' (R$ ',`tb1`.`valor_referencia`,')') AS `referenciaFct`,`tb2`.`sigla` AS `sigla`,(select `tb1`.`num_referencia` from (`TB_REFERENCIA_FCT_GFE` `tb1` join `TB_COLABORADOR` `tb2`) where ((`tb1`.`id_referencia_fct_gfe` = `tb2`.`TB_REFERENCIA_FCT_GFE_id_referencia_fct_gfe`) and (`tb2`.`id_colaborador` = `tb0`.`id_colaborador`))) AS `ref_fct_atual`,(select min(`TB_FAIXA`.`limite_inferior`) from `TB_FAIXA`) AS `pontuacao_inicial`,(select `tb1`.`num_referencia` from (`TB_REFERENCIA_FCT_GFE` `tb1` join `TB_FAIXA` `tb2`) where ((`tb1`.`id_referencia_fct_gfe` = `tb2`.`TB_REFERENCIA_FCT_GFE_id_referencia_fct_gfe`) and (`tb2`.`limite_inferior` = (select min(`TB_FAIXA`.`limite_inferior`) from `TB_FAIXA`)))) AS `ref_pontuacao_fct` from ((`TB_COLABORADOR` `tb0` join `TB_REFERENCIA_FCT_GFE` `tb1`) join `TB_DIVISAO` `tb2`) where ((`tb0`.`TB_REFERENCIA_FCT_GFE_id_referencia_fct_gfe` = `tb1`.`id_referencia_fct_gfe`) and (`tb0`.`TB_DIVISAO_id_divisao` = `tb2`.`id_divisao`)) order by `tb0`.`id_colaborador` ;

-- --------------------------------------------------------

--
-- Estrutura para view `VW_DETALHE_ATRIBUTO`
--
DROP TABLE IF EXISTS `VW_DETALHE_ATRIBUTO`;

CREATE ALGORITHM=UNDEFINED DEFINER=`tiagooliveira`@`localhost` SQL SECURITY DEFINER VIEW `VW_DETALHE_ATRIBUTO`  AS  select `tb0`.`TB_ATRIBUTO_id_atributo` AS `idAtributo`,`tb4`.`letra` AS `Atributo`,`tb1`.`classificacao` AS `AbrangenciaClassificacao`,`tb1`.`nome` AS `AbrangenciaNome`,`tb1`.`descricao` AS `AbrangenciaDescricao`,`tb2`.`classificacao` AS `ComplexidadeClassificacao`,`tb2`.`nome` AS `ComplexidadeNome`,`tb2`.`descricao` AS `ComplexidadeDescricao`,`tb3`.`classificacao` AS `ImpactoClassificacao`,`tb3`.`nome` AS `ImpactoNome`,`tb3`.`descricao` AS `ImpactoDescricao` from ((((`TB_COLABORADOR_has_TB_ATRIBUTO` `tb0` join `TB_ABRANGENCIA` `tb1`) join `TB_COMPLEXIDADE` `tb2`) join `TB_IMPACTO` `tb3`) join `TB_ATRIBUTO` `tb4`) where ((`tb0`.`TB_COLABORADOR_id_colaborador` = 1) and (`tb0`.`TB_ATRIBUTO_TB_ABRANGENCIA_id_abrangencia` = `tb1`.`id_abrangencia`) and (`tb0`.`TB_ATRIBUTO_TB_COMPLEXIDADE_id_complexidade` = `tb2`.`id_complexidade`) and (`tb0`.`TB_ATRIBUTO_TB_IMPACTO_id_impacto` = `tb3`.`id_impacto`) and (`tb0`.`TB_ATRIBUTO_id_atributo` = `tb4`.`id_atributo`)) ;

-- --------------------------------------------------------

--
-- Estrutura para view `VW_DISTRIBUICAO`
--
DROP TABLE IF EXISTS `VW_DISTRIBUICAO`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `VW_DISTRIBUICAO`  AS  select `TB_DISTRIBUICAO`.`id_distribuicao` AS `id_distribuicao`,concat('R$ ',`TB_DISTRIBUICAO`.`valor`) AS `valor`,(select distinct min(`TB_RESULTADO`.`pontuacao`) from `TB_RESULTADO`) AS `pontuacao_minima`,(select distinct max(`TB_RESULTADO`.`pontuacao`) from `TB_RESULTADO`) AS `pontuacao_maxima`,`TB_DISTRIBUICAO`.`qtde_faixas` AS `qtde_faixas`,date_format(`TB_DISTRIBUICAO`.`dt_registro`,'%d/%m/%Y') AS `dt_registro` from `TB_DISTRIBUICAO` ;

-- --------------------------------------------------------

--
-- Estrutura para view `VW_DISTRIBUICAO_FAIXA`
--
DROP TABLE IF EXISTS `VW_DISTRIBUICAO_FAIXA`;

CREATE ALGORITHM=UNDEFINED DEFINER=`tiagooliveira`@`localhost` SQL SECURITY DEFINER VIEW `VW_DISTRIBUICAO_FAIXA`  AS  select `TB_FAIXA`.`id_faixa` AS `id_faixa`,`TB_FAIXA`.`limite_inferior` AS `limite_inferior`,`TB_FAIXA`.`limite_superior` AS `limite_superior`,`TB_FAIXA`.`pontuacao_referencia` AS `pontuacao_referencia`,`TB_FAIXA`.`qtde_pessoas` AS `qtde_pessoas`,`TB_FAIXA`.`valor_rateio_pessoa` AS `valor_rateio_pessoa`,`TB_FAIXA`.`percentual` AS `percentual`,`TB_FAIXA`.`TB_REFERENCIA_FCT_GFE_id_referencia_fct_gfe` AS `TB_REFERENCIA_FCT_GFE_id_referencia_fct_gfe` from `TB_FAIXA` group by `TB_FAIXA`.`limite_inferior`,`TB_FAIXA`.`limite_superior` order by `TB_FAIXA`.`limite_inferior` ;

-- --------------------------------------------------------

--
-- Estrutura para view `VW_PAPEL_ATRIBUTO`
--
DROP TABLE IF EXISTS `VW_PAPEL_ATRIBUTO`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `VW_PAPEL_ATRIBUTO`  AS  select `TBA`.`TB_PAPEL_id_papel` AS `TB_PAPEL_id_papel`,`TA`.`letra` AS `letra`,`TA`.`descricao` AS `descricao`,`TB`.`descricao` AS `descricaoAbrangencia1`,(select `TB_ABRANGENCIA`.`descricao` from `TB_ABRANGENCIA` where ((`TB_ABRANGENCIA`.`atributo` = `TA`.`letra`) and (`TB_ABRANGENCIA`.`classificacao` = 2))) AS `descricaoAbrangencia2`,(select `TB_ABRANGENCIA`.`descricao` from `TB_ABRANGENCIA` where ((`TB_ABRANGENCIA`.`atributo` = `TA`.`letra`) and (`TB_ABRANGENCIA`.`classificacao` = 3))) AS `descricaoAbrangencia3`,`TC`.`descricao` AS `descricaoComplexidade1`,(select `TB_COMPLEXIDADE`.`descricao` from `TB_COMPLEXIDADE` where ((`TB_COMPLEXIDADE`.`atributo` = `TA`.`letra`) and (`TB_COMPLEXIDADE`.`classificacao` = 2))) AS `descricaoComplexidade2`,(select `TB_COMPLEXIDADE`.`descricao` from `TB_COMPLEXIDADE` where ((`TB_COMPLEXIDADE`.`atributo` = `TA`.`letra`) and (`TB_COMPLEXIDADE`.`classificacao` = 3))) AS `descricaoComplexidade3`,`TI`.`descricao` AS `descricaoImpacto1`,(select `TB_IMPACTO`.`descricao` from `TB_IMPACTO` where ((`TB_IMPACTO`.`atributo` = `TA`.`letra`) and (`TB_IMPACTO`.`classificacao` = 2))) AS `descricaoImpacto2`,(select `TB_IMPACTO`.`descricao` from `TB_IMPACTO` where ((`TB_IMPACTO`.`atributo` = `TA`.`letra`) and (`TB_IMPACTO`.`classificacao` = 3))) AS `descricaoImpacto3` from (((((`TB_ATRIBUTO_has_TB_PAPEL` `TBA` join `TB_ATRIBUTO` `TA`) join `TB_ABRANGENCIA` `TB`) join `TB_COMPLEXIDADE` `TC`) join `TB_IMPACTO` `TI`) join `TB_PAPEL` `TP`) where ((`TA`.`id_atributo` = `TBA`.`TB_ATRIBUTO_id_atributo`) and (`TA`.`TB_ABRANGENCIA_id_abrangencia` = `TB`.`id_abrangencia`) and (`TA`.`TB_COMPLEXIDADE_id_complexidade` = `TC`.`id_complexidade`) and (`TA`.`TB_IMPACTO_id_impacto` = `TI`.`id_impacto`) and (`TP`.`id_papel` = `TBA`.`TB_PAPEL_id_papel`)) group by `TP`.`nome`,`TA`.`letra` ;

-- --------------------------------------------------------

--
-- Estrutura para view `VW_PAPEL_COLABORADOR`
--
DROP TABLE IF EXISTS `VW_PAPEL_COLABORADOR`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `VW_PAPEL_COLABORADOR`  AS  select `colab`.`id_colaborador` AS `id_colaborador`,`PL`.`id_papel` AS `ID_PAPEL`,`PL`.`nome` AS `NOME` from ((`TB_COLABORADOR` `colab` join `TB_PAPEL_has_TB_COLABORADOR` `cobA`) join `TB_PAPEL` `PL`) where ((`colab`.`id_colaborador` = `cobA`.`TB_COLABORADOR_id_colaborador`) and (`PL`.`id_papel` = `cobA`.`TB_PAPEL_id_papel`)) ;

--
-- Índices de tabelas apagadas
--

--
-- Índices de tabela `TB_ABRANGENCIA`
--
ALTER TABLE `TB_ABRANGENCIA`
  ADD PRIMARY KEY (`id_abrangencia`);

--
-- Índices de tabela `TB_ACESSO`
--
ALTER TABLE `TB_ACESSO`
  ADD PRIMARY KEY (`id_acesso`),
  ADD UNIQUE KEY `unico_cpf` (`login`);

--
-- Índices de tabela `TB_ATRIBUTO`
--
ALTER TABLE `TB_ATRIBUTO`
  ADD PRIMARY KEY (`id_atributo`,`TB_ABRANGENCIA_id_abrangencia`,`TB_COMPLEXIDADE_id_complexidade`,`TB_IMPACTO_id_impacto`),
  ADD KEY `fk_TB_ATRIBUTO_TB_ABRANGENCIA1` (`TB_ABRANGENCIA_id_abrangencia`),
  ADD KEY `fk_TB_ATRIBUTO_TB_COMPLEXIDADE1` (`TB_COMPLEXIDADE_id_complexidade`),
  ADD KEY `fk_TB_ATRIBUTO_TB_IMPACTO1` (`TB_IMPACTO_id_impacto`);

--
-- Índices de tabela `TB_ATRIBUTO_has_TB_PAPEL`
--
ALTER TABLE `TB_ATRIBUTO_has_TB_PAPEL`
  ADD PRIMARY KEY (`TB_ATRIBUTO_id_atributo`,`TB_PAPEL_id_papel`),
  ADD KEY `fk_TB_ATRIBUTO_has_TB_PAPEL_TB_PAPEL1` (`TB_PAPEL_id_papel`),
  ADD KEY `fk_TB_ATRIBUTO_has_TB_PAPEL_TB_ATRIBUTO1` (`TB_ATRIBUTO_id_atributo`);

--
-- Índices de tabela `TB_ATRIBUTO_has_TB_PROJETO`
--
ALTER TABLE `TB_ATRIBUTO_has_TB_PROJETO`
  ADD PRIMARY KEY (`TB_ATRIBUTO_id_atributo`,`TB_PROJETO_id_projeto`),
  ADD KEY `fk_TB_ATRIBUTO_has_TB_PROJETO_TB_PROJETO1` (`TB_PROJETO_id_projeto`),
  ADD KEY `fk_TB_ATRIBUTO_has_TB_PROJETO_TB_ATRIBUTO1` (`TB_ATRIBUTO_id_atributo`);

--
-- Índices de tabela `TB_COLABORADOR`
--
ALTER TABLE `TB_COLABORADOR`
  ADD PRIMARY KEY (`id_colaborador`,`TB_REFERENCIA_FCT_GFE_id_referencia_fct_gfe`,`TB_DIVISAO_id_divisao`,`TB_ACESSO_id_acesso`),
  ADD KEY `fk_TB_COLABORADOR_TB_REFERENCIA_FCT_GFE1` (`TB_REFERENCIA_FCT_GFE_id_referencia_fct_gfe`),
  ADD KEY `fk_TB_COLABORADOR_TB_DIVISAO1` (`TB_DIVISAO_id_divisao`),
  ADD KEY `fk_TB_COLABORADOR_TB_PERFIL1` (`TB_PERFIL_id_perfil`),
  ADD KEY `fk_TB_COLABORADOR_TB_ACESSO1` (`TB_ACESSO_id_acesso`);

--
-- Índices de tabela `TB_COLABORADOR_has_TB_ATRIBUTO`
--
ALTER TABLE `TB_COLABORADOR_has_TB_ATRIBUTO`
  ADD PRIMARY KEY (`TB_COLABORADOR_id_colaborador`,`TB_COLABORADOR_TB_REFERENCIA_FCT_GFE_id_referencia_fct_gfe`,`TB_COLABORADOR_TB_DIVISAO_id_divisao`,`TB_ATRIBUTO_id_atributo`,`TB_ATRIBUTO_TB_ABRANGENCIA_id_abrangencia`,`TB_ATRIBUTO_TB_COMPLEXIDADE_id_complexidade`,`TB_ATRIBUTO_TB_IMPACTO_id_impacto`),
  ADD KEY `fk_TB_COLABORADOR_has_TB_ATRIBUTO_TB_ATRIBUTO1` (`TB_ATRIBUTO_id_atributo`,`TB_ATRIBUTO_TB_ABRANGENCIA_id_abrangencia`,`TB_ATRIBUTO_TB_COMPLEXIDADE_id_complexidade`,`TB_ATRIBUTO_TB_IMPACTO_id_impacto`),
  ADD KEY `fk_TB_COLABORADOR_has_TB_ATRIBUTO_TB_COLABORADOR1` (`TB_COLABORADOR_id_colaborador`,`TB_COLABORADOR_TB_REFERENCIA_FCT_GFE_id_referencia_fct_gfe`,`TB_COLABORADOR_TB_DIVISAO_id_divisao`);

--
-- Índices de tabela `TB_COMPLEXIDADE`
--
ALTER TABLE `TB_COMPLEXIDADE`
  ADD PRIMARY KEY (`id_complexidade`);

--
-- Índices de tabela `TB_DISTRIBUICAO`
--
ALTER TABLE `TB_DISTRIBUICAO`
  ADD PRIMARY KEY (`id_distribuicao`);

--
-- Índices de tabela `TB_DIVISAO`
--
ALTER TABLE `TB_DIVISAO`
  ADD PRIMARY KEY (`id_divisao`);

--
-- Índices de tabela `TB_FAIXA`
--
ALTER TABLE `TB_FAIXA`
  ADD PRIMARY KEY (`id_faixa`,`TB_DISTRIBUICAO_id_distribuicao`),
  ADD KEY `fk_TB_FAIXA_TB_DISTRIBUICAO1` (`TB_DISTRIBUICAO_id_distribuicao`);

--
-- Índices de tabela `TB_IMPACTO`
--
ALTER TABLE `TB_IMPACTO`
  ADD PRIMARY KEY (`id_impacto`);

--
-- Índices de tabela `TB_PAPEL`
--
ALTER TABLE `TB_PAPEL`
  ADD PRIMARY KEY (`id_papel`);

--
-- Índices de tabela `TB_PAPEL_has_TB_COLABORADOR`
--
ALTER TABLE `TB_PAPEL_has_TB_COLABORADOR`
  ADD PRIMARY KEY (`TB_PAPEL_id_papel`,`TB_COLABORADOR_id_colaborador`,`TB_COLABORADOR_TB_REFERENCIA_FCT_GFE_id_referencia_fct_gfe`,`TB_COLABORADOR_TB_DIVISAO_id_divisao`),
  ADD KEY `fk_TB_PAPEL_has_TB_COLABORADOR_TB_COLABORADOR1` (`TB_COLABORADOR_id_colaborador`,`TB_COLABORADOR_TB_REFERENCIA_FCT_GFE_id_referencia_fct_gfe`,`TB_COLABORADOR_TB_DIVISAO_id_divisao`),
  ADD KEY `fk_TB_PAPEL_has_TB_COLABORADOR_TB_PAPEL1` (`TB_PAPEL_id_papel`);

--
-- Índices de tabela `TB_PERFIL`
--
ALTER TABLE `TB_PERFIL`
  ADD PRIMARY KEY (`id_perfil`);

--
-- Índices de tabela `TB_PESOS`
--
ALTER TABLE `TB_PESOS`
  ADD PRIMARY KEY (`id_pesos`);

--
-- Índices de tabela `TB_PROJETO`
--
ALTER TABLE `TB_PROJETO`
  ADD PRIMARY KEY (`id_projeto`);

--
-- Índices de tabela `TB_PROJETO_has_TB_COLABORADOR`
--
ALTER TABLE `TB_PROJETO_has_TB_COLABORADOR`
  ADD PRIMARY KEY (`TB_PROJETO_id_projeto`,`TB_COLABORADOR_id_colaborador`,`TB_COLABORADOR_TB_REFERENCIA_FCT_GFE_id_referencia_fct_gfe`,`TB_COLABORADOR_TB_DIVISAO_id_divisao`),
  ADD KEY `fk_TB_PROJETO_has_TB_COLABORADOR_TB_COLABORADOR1` (`TB_COLABORADOR_id_colaborador`,`TB_COLABORADOR_TB_REFERENCIA_FCT_GFE_id_referencia_fct_gfe`,`TB_COLABORADOR_TB_DIVISAO_id_divisao`),
  ADD KEY `fk_TB_PROJETO_has_TB_COLABORADOR_TB_PROJETO1` (`TB_PROJETO_id_projeto`);

--
-- Índices de tabela `TB_REFERENCIA_FCT_GFE`
--
ALTER TABLE `TB_REFERENCIA_FCT_GFE`
  ADD PRIMARY KEY (`id_referencia_fct_gfe`);

--
-- Índices de tabela `TB_RESULTADO`
--
ALTER TABLE `TB_RESULTADO`
  ADD PRIMARY KEY (`id_resultado`);

--
-- Índices de tabela `TB_TECNOLOGIA`
--
ALTER TABLE `TB_TECNOLOGIA`
  ADD PRIMARY KEY (`id_tecnologia`);

--
-- Índices de tabela `TB_TECNOLOGIA_has_TB_COLABORADOR`
--
ALTER TABLE `TB_TECNOLOGIA_has_TB_COLABORADOR`
  ADD PRIMARY KEY (`TB_TECNOLOGIA_id_tecnologia`,`TB_COLABORADOR_id_colaborador`,`TB_COLABORADOR_TB_REFERENCIA_FCT_GFE_id_referencia_fct_gfe`,`TB_COLABORADOR_TB_DIVISAO_id_divisao`),
  ADD KEY `fk_TB_TECNOLOGIA_has_TB_COLABORADOR_TB_COLABORADOR1` (`TB_COLABORADOR_id_colaborador`,`TB_COLABORADOR_TB_REFERENCIA_FCT_GFE_id_referencia_fct_gfe`,`TB_COLABORADOR_TB_DIVISAO_id_divisao`),
  ADD KEY `fk_TB_TECNOLOGIA_has_TB_COLABORADOR_TB_TECNOLOGIA1` (`TB_TECNOLOGIA_id_tecnologia`);

--
-- Índices de tabela `TB_TECNOLOGIA_has_TB_PROJETO`
--
ALTER TABLE `TB_TECNOLOGIA_has_TB_PROJETO`
  ADD PRIMARY KEY (`TB_TECNOLOGIA_id_tecnologia`,`TB_PROJETO_id_projeto`),
  ADD KEY `fk_TB_TECNOLOGIA_has_TB_PROJETO_TB_PROJETO1` (`TB_PROJETO_id_projeto`),
  ADD KEY `fk_TB_TECNOLOGIA_has_TB_PROJETO_TB_TECNOLOGIA1` (`TB_TECNOLOGIA_id_tecnologia`);

--
-- AUTO_INCREMENT de tabelas apagadas
--

--
-- AUTO_INCREMENT de tabela `TB_ABRANGENCIA`
--
ALTER TABLE `TB_ABRANGENCIA`
  MODIFY `id_abrangencia` int(9) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=62;

--
-- AUTO_INCREMENT de tabela `TB_ACESSO`
--
ALTER TABLE `TB_ACESSO`
  MODIFY `id_acesso` int(9) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de tabela `TB_ATRIBUTO`
--
ALTER TABLE `TB_ATRIBUTO`
  MODIFY `id_atributo` int(9) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=406;

--
-- AUTO_INCREMENT de tabela `TB_COLABORADOR`
--
ALTER TABLE `TB_COLABORADOR`
  MODIFY `id_colaborador` int(9) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de tabela `TB_COMPLEXIDADE`
--
ALTER TABLE `TB_COMPLEXIDADE`
  MODIFY `id_complexidade` int(9) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;

--
-- AUTO_INCREMENT de tabela `TB_DISTRIBUICAO`
--
ALTER TABLE `TB_DISTRIBUICAO`
  MODIFY `id_distribuicao` int(9) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de tabela `TB_DIVISAO`
--
ALTER TABLE `TB_DIVISAO`
  MODIFY `id_divisao` int(9) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT de tabela `TB_FAIXA`
--
ALTER TABLE `TB_FAIXA`
  MODIFY `id_faixa` int(9) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de tabela `TB_IMPACTO`
--
ALTER TABLE `TB_IMPACTO`
  MODIFY `id_impacto` int(9) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;

--
-- AUTO_INCREMENT de tabela `TB_PAPEL`
--
ALTER TABLE `TB_PAPEL`
  MODIFY `id_papel` int(9) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de tabela `TB_PERFIL`
--
ALTER TABLE `TB_PERFIL`
  MODIFY `id_perfil` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de tabela `TB_PESOS`
--
ALTER TABLE `TB_PESOS`
  MODIFY `id_pesos` int(9) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT de tabela `TB_PROJETO`
--
ALTER TABLE `TB_PROJETO`
  MODIFY `id_projeto` int(9) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT de tabela `TB_REFERENCIA_FCT_GFE`
--
ALTER TABLE `TB_REFERENCIA_FCT_GFE`
  MODIFY `id_referencia_fct_gfe` int(9) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=81;

--
-- AUTO_INCREMENT de tabela `TB_RESULTADO`
--
ALTER TABLE `TB_RESULTADO`
  MODIFY `id_resultado` int(9) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT de tabela `TB_TECNOLOGIA`
--
ALTER TABLE `TB_TECNOLOGIA`
  MODIFY `id_tecnologia` int(9) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Restrições para dumps de tabelas
--

--
-- Restrições para tabelas `TB_ATRIBUTO`
--
ALTER TABLE `TB_ATRIBUTO`
  ADD CONSTRAINT `fk_TB_ATRIBUTO_TB_ABRANGENCIA1` FOREIGN KEY (`TB_ABRANGENCIA_id_abrangencia`) REFERENCES `TB_ABRANGENCIA` (`id_abrangencia`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_TB_ATRIBUTO_TB_COMPLEXIDADE1` FOREIGN KEY (`TB_COMPLEXIDADE_id_complexidade`) REFERENCES `TB_COMPLEXIDADE` (`id_complexidade`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_TB_ATRIBUTO_TB_IMPACTO1` FOREIGN KEY (`TB_IMPACTO_id_impacto`) REFERENCES `TB_IMPACTO` (`id_impacto`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Restrições para tabelas `TB_ATRIBUTO_has_TB_PAPEL`
--
ALTER TABLE `TB_ATRIBUTO_has_TB_PAPEL`
  ADD CONSTRAINT `fk_TB_ATRIBUTO_has_TB_PAPEL_TB_ATRIBUTO1` FOREIGN KEY (`TB_ATRIBUTO_id_atributo`) REFERENCES `TB_ATRIBUTO` (`id_atributo`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_TB_ATRIBUTO_has_TB_PAPEL_TB_PAPEL1` FOREIGN KEY (`TB_PAPEL_id_papel`) REFERENCES `TB_PAPEL` (`id_papel`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Restrições para tabelas `TB_ATRIBUTO_has_TB_PROJETO`
--
ALTER TABLE `TB_ATRIBUTO_has_TB_PROJETO`
  ADD CONSTRAINT `fk_TB_ATRIBUTO_has_TB_PROJETO_TB_ATRIBUTO1` FOREIGN KEY (`TB_ATRIBUTO_id_atributo`) REFERENCES `TB_ATRIBUTO` (`id_atributo`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_TB_ATRIBUTO_has_TB_PROJETO_TB_PROJETO1` FOREIGN KEY (`TB_PROJETO_id_projeto`) REFERENCES `TB_PROJETO` (`id_projeto`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Restrições para tabelas `TB_COLABORADOR`
--
ALTER TABLE `TB_COLABORADOR`
  ADD CONSTRAINT `TB_COLABORADOR_ibfk_1` FOREIGN KEY (`TB_PERFIL_id_perfil`) REFERENCES `TB_PERFIL` (`id_perfil`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_TB_COLABORADOR_TB_ACESSO1` FOREIGN KEY (`TB_ACESSO_id_acesso`) REFERENCES `TB_ACESSO` (`id_acesso`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_TB_COLABORADOR_TB_DIVISAO1` FOREIGN KEY (`TB_DIVISAO_id_divisao`) REFERENCES `TB_DIVISAO` (`id_divisao`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_TB_COLABORADOR_TB_REFERENCIA_FCT_GFE1` FOREIGN KEY (`TB_REFERENCIA_FCT_GFE_id_referencia_fct_gfe`) REFERENCES `TB_REFERENCIA_FCT_GFE` (`id_referencia_fct_gfe`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Restrições para tabelas `TB_COLABORADOR_has_TB_ATRIBUTO`
--
ALTER TABLE `TB_COLABORADOR_has_TB_ATRIBUTO`
  ADD CONSTRAINT `fk_TB_COLABORADOR_has_TB_ATRIBUTO_TB_ATRIBUTO1` FOREIGN KEY (`TB_ATRIBUTO_id_atributo`,`TB_ATRIBUTO_TB_ABRANGENCIA_id_abrangencia`,`TB_ATRIBUTO_TB_COMPLEXIDADE_id_complexidade`,`TB_ATRIBUTO_TB_IMPACTO_id_impacto`) REFERENCES `TB_ATRIBUTO` (`id_atributo`, `TB_ABRANGENCIA_id_abrangencia`, `TB_COMPLEXIDADE_id_complexidade`, `TB_IMPACTO_id_impacto`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_TB_COLABORADOR_has_TB_ATRIBUTO_TB_COLABORADOR1` FOREIGN KEY (`TB_COLABORADOR_id_colaborador`,`TB_COLABORADOR_TB_REFERENCIA_FCT_GFE_id_referencia_fct_gfe`,`TB_COLABORADOR_TB_DIVISAO_id_divisao`) REFERENCES `TB_COLABORADOR` (`id_colaborador`, `TB_REFERENCIA_FCT_GFE_id_referencia_fct_gfe`, `TB_DIVISAO_id_divisao`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Restrições para tabelas `TB_FAIXA`
--
ALTER TABLE `TB_FAIXA`
  ADD CONSTRAINT `fk_TB_FAIXA_TB_DISTRIBUICAO1` FOREIGN KEY (`TB_DISTRIBUICAO_id_distribuicao`) REFERENCES `TB_DISTRIBUICAO` (`id_distribuicao`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Restrições para tabelas `TB_PAPEL_has_TB_COLABORADOR`
--
ALTER TABLE `TB_PAPEL_has_TB_COLABORADOR`
  ADD CONSTRAINT `fk_TB_PAPEL_has_TB_COLABORADOR_TB_COLABORADOR1` FOREIGN KEY (`TB_COLABORADOR_id_colaborador`,`TB_COLABORADOR_TB_REFERENCIA_FCT_GFE_id_referencia_fct_gfe`,`TB_COLABORADOR_TB_DIVISAO_id_divisao`) REFERENCES `TB_COLABORADOR` (`id_colaborador`, `TB_REFERENCIA_FCT_GFE_id_referencia_fct_gfe`, `TB_DIVISAO_id_divisao`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_TB_PAPEL_has_TB_COLABORADOR_TB_PAPEL1` FOREIGN KEY (`TB_PAPEL_id_papel`) REFERENCES `TB_PAPEL` (`id_papel`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Restrições para tabelas `TB_PROJETO_has_TB_COLABORADOR`
--
ALTER TABLE `TB_PROJETO_has_TB_COLABORADOR`
  ADD CONSTRAINT `fk_TB_PROJETO_has_TB_COLABORADOR_TB_COLABORADOR1` FOREIGN KEY (`TB_COLABORADOR_id_colaborador`,`TB_COLABORADOR_TB_REFERENCIA_FCT_GFE_id_referencia_fct_gfe`,`TB_COLABORADOR_TB_DIVISAO_id_divisao`) REFERENCES `TB_COLABORADOR` (`id_colaborador`, `TB_REFERENCIA_FCT_GFE_id_referencia_fct_gfe`, `TB_DIVISAO_id_divisao`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_TB_PROJETO_has_TB_COLABORADOR_TB_PROJETO1` FOREIGN KEY (`TB_PROJETO_id_projeto`) REFERENCES `TB_PROJETO` (`id_projeto`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Restrições para tabelas `TB_TECNOLOGIA_has_TB_COLABORADOR`
--
ALTER TABLE `TB_TECNOLOGIA_has_TB_COLABORADOR`
  ADD CONSTRAINT `fk_TB_TECNOLOGIA_has_TB_COLABORADOR_TB_COLABORADOR1` FOREIGN KEY (`TB_COLABORADOR_id_colaborador`,`TB_COLABORADOR_TB_REFERENCIA_FCT_GFE_id_referencia_fct_gfe`,`TB_COLABORADOR_TB_DIVISAO_id_divisao`) REFERENCES `TB_COLABORADOR` (`id_colaborador`, `TB_REFERENCIA_FCT_GFE_id_referencia_fct_gfe`, `TB_DIVISAO_id_divisao`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_TB_TECNOLOGIA_has_TB_COLABORADOR_TB_TECNOLOGIA1` FOREIGN KEY (`TB_TECNOLOGIA_id_tecnologia`) REFERENCES `TB_TECNOLOGIA` (`id_tecnologia`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Restrições para tabelas `TB_TECNOLOGIA_has_TB_PROJETO`
--
ALTER TABLE `TB_TECNOLOGIA_has_TB_PROJETO`
  ADD CONSTRAINT `fk_TB_TECNOLOGIA_has_TB_PROJETO_TB_PROJETO1` FOREIGN KEY (`TB_PROJETO_id_projeto`) REFERENCES `TB_PROJETO` (`id_projeto`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_TB_TECNOLOGIA_has_TB_PROJETO_TB_TECNOLOGIA1` FOREIGN KEY (`TB_TECNOLOGIA_id_tecnologia`) REFERENCES `TB_TECNOLOGIA` (`id_tecnologia`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;