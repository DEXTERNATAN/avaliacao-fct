-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Tempo de geração: 10/04/2018 às 22:30
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
(3, '3333333000', '00000000', 1),
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
  `TB_PAPEL_id_papel` int(9) NOT NULL,
  `dt_resultado` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Fazendo dump de dados para tabela `TB_ATRIBUTO_has_TB_PAPEL`
--

INSERT INTO `TB_ATRIBUTO_has_TB_PAPEL` (`TB_ATRIBUTO_id_atributo`, `TB_PAPEL_id_papel`, `dt_resultado`) VALUES
(1, 2, '2018-03-28 13:36:21'),
(1, 4, '2018-03-28 13:36:21'),
(1, 14, '2018-03-28 13:36:21'),
(1, 15, '2018-03-28 13:36:21'),
(2, 2, '2018-03-28 13:36:21'),
(2, 4, '2018-03-28 13:36:21'),
(3, 2, '2018-03-28 13:36:21'),
(3, 4, '2018-03-28 13:36:21'),
(4, 2, '2018-03-28 13:36:21'),
(4, 4, '2018-03-28 13:36:21'),
(5, 2, '2018-03-28 13:36:21'),
(5, 4, '2018-03-28 13:36:21'),
(6, 2, '2018-03-28 13:36:21'),
(6, 4, '2018-03-28 13:36:21'),
(7, 2, '2018-03-28 13:36:21'),
(7, 4, '2018-03-28 13:36:21'),
(8, 2, '2018-03-28 13:36:21'),
(8, 4, '2018-03-28 13:36:21'),
(9, 2, '2018-03-28 13:36:21'),
(9, 4, '2018-03-28 13:36:21'),
(10, 2, '2018-03-28 13:36:21'),
(10, 4, '2018-03-28 13:36:21'),
(11, 2, '2018-03-28 13:36:21'),
(11, 4, '2018-03-28 13:36:21'),
(12, 2, '2018-03-28 13:36:21'),
(12, 4, '2018-03-28 13:36:21'),
(13, 2, '2018-03-28 13:36:21'),
(13, 4, '2018-03-28 13:36:21'),
(14, 2, '2018-03-28 13:36:21'),
(14, 4, '2018-03-28 13:36:21'),
(15, 2, '2018-03-28 13:36:21'),
(15, 4, '2018-03-28 13:36:21'),
(16, 2, '2018-03-28 13:36:21'),
(16, 4, '2018-03-28 13:36:21'),
(17, 2, '2018-03-28 13:36:21'),
(17, 4, '2018-03-28 13:36:21'),
(18, 2, '2018-03-28 13:36:21'),
(18, 4, '2018-03-28 13:36:21'),
(19, 2, '2018-03-28 13:36:21'),
(19, 4, '2018-03-28 13:36:21'),
(20, 2, '2018-03-28 13:36:21'),
(20, 4, '2018-03-28 13:36:21'),
(21, 2, '2018-03-28 13:36:21'),
(21, 4, '2018-03-28 13:36:21'),
(22, 2, '2018-03-28 13:36:21'),
(22, 4, '2018-03-28 13:36:21'),
(23, 2, '2018-03-28 13:36:21'),
(23, 4, '2018-03-28 13:36:21'),
(24, 2, '2018-03-28 13:36:21'),
(24, 4, '2018-03-28 13:36:21'),
(25, 2, '2018-03-28 13:36:21'),
(25, 4, '2018-03-28 13:36:21'),
(26, 3, '2018-03-28 13:36:21'),
(26, 4, '2018-03-28 13:36:21'),
(26, 15, '2018-03-28 13:36:21'),
(27, 3, '2018-03-28 13:36:21'),
(27, 4, '2018-03-28 13:36:21'),
(28, 3, '2018-03-28 13:36:21'),
(28, 4, '2018-03-28 13:36:21'),
(29, 3, '2018-03-28 13:36:21'),
(29, 4, '2018-03-28 13:36:21'),
(30, 3, '2018-03-28 13:36:21'),
(30, 4, '2018-03-28 13:36:21'),
(31, 3, '2018-03-28 13:36:21'),
(31, 4, '2018-03-28 13:36:21'),
(32, 3, '2018-03-28 13:36:21'),
(32, 4, '2018-03-28 13:36:21'),
(33, 3, '2018-03-28 13:36:21'),
(33, 4, '2018-03-28 13:36:21'),
(34, 3, '2018-03-28 13:36:21'),
(34, 4, '2018-03-28 13:36:21'),
(35, 3, '2018-03-28 13:36:21'),
(35, 4, '2018-03-28 13:36:21'),
(36, 3, '2018-03-28 13:36:21'),
(36, 4, '2018-03-28 13:36:21'),
(37, 3, '2018-03-28 13:36:21'),
(37, 4, '2018-03-28 13:36:21'),
(38, 3, '2018-03-28 13:36:21'),
(38, 4, '2018-03-28 13:36:21'),
(39, 3, '2018-03-28 13:36:21'),
(39, 4, '2018-03-28 13:36:21'),
(40, 3, '2018-03-28 13:36:21'),
(40, 4, '2018-03-28 13:36:21'),
(41, 3, '2018-03-28 13:36:21'),
(41, 4, '2018-03-28 13:36:21'),
(42, 3, '2018-03-28 13:36:21'),
(42, 4, '2018-03-28 13:36:21'),
(43, 3, '2018-03-28 13:36:21'),
(43, 4, '2018-03-28 13:36:21'),
(44, 3, '2018-03-28 13:36:21'),
(44, 4, '2018-03-28 13:36:21'),
(45, 3, '2018-03-28 13:36:21'),
(45, 4, '2018-03-28 13:36:21'),
(46, 3, '2018-03-28 13:36:21'),
(46, 4, '2018-03-28 13:36:21'),
(47, 3, '2018-03-28 13:36:21'),
(47, 4, '2018-03-28 13:36:21'),
(48, 3, '2018-03-28 13:36:21'),
(48, 4, '2018-03-28 13:36:21'),
(49, 3, '2018-03-28 13:36:21'),
(49, 4, '2018-03-28 13:36:21'),
(50, 3, '2018-03-28 13:36:21'),
(50, 4, '2018-03-28 13:36:21'),
(51, 3, '2018-03-28 13:36:21'),
(51, 4, '2018-03-28 13:36:21'),
(52, 3, '2018-03-28 13:36:21'),
(52, 4, '2018-03-28 13:36:21'),
(53, 2, '2018-03-28 13:36:21'),
(53, 4, '2018-03-28 13:36:21'),
(54, 2, '2018-03-28 13:36:21'),
(54, 4, '2018-03-28 13:36:21'),
(55, 2, '2018-03-28 13:36:21'),
(55, 6, '2018-03-28 13:36:21'),
(55, 15, '2018-03-28 13:36:21'),
(56, 2, '2018-03-28 13:36:21'),
(56, 6, '2018-03-28 13:36:21'),
(57, 2, '2018-03-28 13:36:21'),
(57, 6, '2018-03-28 13:36:21'),
(58, 2, '2018-03-28 13:36:21'),
(58, 6, '2018-03-28 13:36:21'),
(59, 2, '2018-03-28 13:36:21'),
(59, 6, '2018-03-28 13:36:21'),
(60, 2, '2018-03-28 13:36:21'),
(60, 6, '2018-03-28 13:36:21'),
(61, 2, '2018-03-28 13:36:21'),
(61, 6, '2018-03-28 13:36:21'),
(62, 2, '2018-03-28 13:36:21'),
(62, 6, '2018-03-28 13:36:21'),
(63, 2, '2018-03-28 13:36:21'),
(63, 6, '2018-03-28 13:36:21'),
(64, 2, '2018-03-28 13:36:21'),
(64, 6, '2018-03-28 13:36:21'),
(65, 2, '2018-03-28 13:36:21'),
(65, 6, '2018-03-28 13:36:21'),
(66, 2, '2018-03-28 13:36:21'),
(66, 6, '2018-03-28 13:36:21'),
(67, 2, '2018-03-28 13:36:21'),
(67, 6, '2018-03-28 13:36:21'),
(68, 2, '2018-03-28 13:36:21'),
(68, 6, '2018-03-28 13:36:21'),
(69, 2, '2018-03-28 13:36:21'),
(69, 6, '2018-03-28 13:36:21'),
(70, 2, '2018-03-28 13:36:21'),
(70, 6, '2018-03-28 13:36:21'),
(71, 2, '2018-03-28 13:36:21'),
(71, 6, '2018-03-28 13:36:21'),
(72, 2, '2018-03-28 13:36:21'),
(72, 6, '2018-03-28 13:36:21'),
(73, 2, '2018-03-28 13:36:21'),
(73, 6, '2018-03-28 13:36:21'),
(74, 2, '2018-03-28 13:36:21'),
(74, 6, '2018-03-28 13:36:21'),
(75, 2, '2018-03-28 13:36:21'),
(75, 6, '2018-03-28 13:36:21'),
(76, 2, '2018-03-28 13:36:21'),
(76, 6, '2018-03-28 13:36:21'),
(77, 2, '2018-03-28 13:36:21'),
(77, 6, '2018-03-28 13:36:21'),
(78, 2, '2018-03-28 13:36:21'),
(78, 6, '2018-03-28 13:36:21'),
(79, 2, '2018-03-28 13:36:21'),
(79, 6, '2018-03-28 13:36:21'),
(80, 2, '2018-03-28 13:36:21'),
(80, 6, '2018-03-28 13:36:21'),
(81, 2, '2018-03-28 13:36:21'),
(81, 6, '2018-03-28 13:36:21'),
(82, 2, '2018-03-28 13:36:21'),
(83, 2, '2018-03-28 13:36:21'),
(84, 2, '2018-03-28 13:36:21'),
(85, 2, '2018-03-28 13:36:21'),
(86, 2, '2018-03-28 13:36:21'),
(87, 2, '2018-03-28 13:36:21'),
(88, 2, '2018-03-28 13:36:21'),
(89, 2, '2018-03-28 13:36:21'),
(90, 2, '2018-03-28 13:36:21'),
(109, 1, '2018-03-28 13:36:21'),
(109, 3, '2018-03-28 13:36:21'),
(109, 5, '2018-03-28 13:36:21'),
(110, 1, '2018-03-28 13:36:21'),
(110, 3, '2018-03-28 13:36:21'),
(110, 5, '2018-03-28 13:36:21'),
(111, 1, '2018-03-28 13:36:21'),
(111, 3, '2018-03-28 13:36:21'),
(111, 5, '2018-03-28 13:36:21'),
(112, 1, '2018-03-28 13:36:21'),
(112, 3, '2018-03-28 13:36:21'),
(112, 5, '2018-03-28 13:36:21'),
(113, 1, '2018-03-28 13:36:21'),
(113, 3, '2018-03-28 13:36:21'),
(113, 5, '2018-03-28 13:36:21'),
(114, 1, '2018-03-28 13:36:21'),
(114, 3, '2018-03-28 13:36:21'),
(114, 5, '2018-03-28 13:36:21'),
(115, 1, '2018-03-28 13:36:21'),
(115, 3, '2018-03-28 13:36:21'),
(115, 5, '2018-03-28 13:36:21'),
(116, 1, '2018-03-28 13:36:21'),
(116, 3, '2018-03-28 13:36:21'),
(116, 5, '2018-03-28 13:36:21'),
(117, 1, '2018-03-28 13:36:21'),
(117, 3, '2018-03-28 13:36:21'),
(117, 5, '2018-03-28 13:36:21'),
(118, 1, '2018-03-28 13:36:21'),
(118, 3, '2018-03-28 13:36:21'),
(118, 5, '2018-03-28 13:36:21'),
(119, 1, '2018-03-28 13:36:21'),
(119, 3, '2018-03-28 13:36:21'),
(119, 5, '2018-03-28 13:36:21'),
(120, 1, '2018-03-28 13:36:21'),
(120, 3, '2018-03-28 13:36:21'),
(120, 5, '2018-03-28 13:36:21'),
(121, 1, '2018-03-28 13:36:21'),
(121, 3, '2018-03-28 13:36:21'),
(121, 5, '2018-03-28 13:36:21'),
(122, 1, '2018-03-28 13:36:21'),
(122, 3, '2018-03-28 13:36:21'),
(122, 5, '2018-03-28 13:36:21'),
(123, 1, '2018-03-28 13:36:21'),
(123, 3, '2018-03-28 13:36:21'),
(123, 5, '2018-03-28 13:36:21'),
(124, 1, '2018-03-28 13:36:21'),
(124, 3, '2018-03-28 13:36:21'),
(124, 5, '2018-03-28 13:36:21'),
(125, 1, '2018-03-28 13:36:21'),
(125, 3, '2018-03-28 13:36:21'),
(125, 5, '2018-03-28 13:36:21'),
(126, 1, '2018-03-28 13:36:21'),
(126, 3, '2018-03-28 13:36:21'),
(126, 5, '2018-03-28 13:36:21'),
(127, 1, '2018-03-28 13:36:21'),
(127, 3, '2018-03-28 13:36:21'),
(127, 5, '2018-03-28 13:36:21'),
(128, 1, '2018-03-28 13:36:21'),
(128, 3, '2018-03-28 13:36:21'),
(128, 5, '2018-03-28 13:36:21'),
(129, 1, '2018-03-28 13:36:21'),
(129, 3, '2018-03-28 13:36:21'),
(129, 5, '2018-03-28 13:36:21'),
(130, 1, '2018-03-28 13:36:21'),
(130, 3, '2018-03-28 13:36:21'),
(130, 5, '2018-03-28 13:36:21'),
(131, 1, '2018-03-28 13:36:21'),
(131, 3, '2018-03-28 13:36:21'),
(131, 5, '2018-03-28 13:36:21'),
(132, 1, '2018-03-28 13:36:21'),
(132, 3, '2018-03-28 13:36:21'),
(132, 5, '2018-03-28 13:36:21'),
(133, 1, '2018-03-28 13:36:21'),
(133, 3, '2018-03-28 13:36:21'),
(133, 5, '2018-03-28 13:36:21'),
(134, 1, '2018-03-28 13:36:21'),
(134, 3, '2018-03-28 13:36:21'),
(134, 5, '2018-03-28 13:36:21'),
(135, 1, '2018-03-28 13:36:21'),
(135, 3, '2018-03-28 13:36:21'),
(135, 5, '2018-03-28 13:36:21'),
(136, 1, '2018-03-28 13:36:21'),
(136, 2, '2018-03-28 13:36:21'),
(136, 4, '2018-03-28 13:36:21'),
(136, 5, '2018-03-28 13:36:21'),
(137, 1, '2018-03-28 13:36:21'),
(137, 2, '2018-03-28 13:36:21'),
(137, 4, '2018-03-28 13:36:21'),
(137, 5, '2018-03-28 13:36:21'),
(138, 1, '2018-03-28 13:36:21'),
(138, 2, '2018-03-28 13:36:21'),
(138, 4, '2018-03-28 13:36:21'),
(138, 5, '2018-03-28 13:36:21'),
(139, 1, '2018-03-28 13:36:21'),
(139, 2, '2018-03-28 13:36:21'),
(139, 4, '2018-03-28 13:36:21'),
(139, 5, '2018-03-28 13:36:21'),
(140, 1, '2018-03-28 13:36:21'),
(140, 2, '2018-03-28 13:36:21'),
(140, 4, '2018-03-28 13:36:21'),
(140, 5, '2018-03-28 13:36:21'),
(141, 1, '2018-03-28 13:36:21'),
(141, 2, '2018-03-28 13:36:21'),
(141, 4, '2018-03-28 13:36:21'),
(141, 5, '2018-03-28 13:36:21'),
(142, 1, '2018-03-28 13:36:21'),
(142, 2, '2018-03-28 13:36:21'),
(142, 4, '2018-03-28 13:36:21'),
(142, 5, '2018-03-28 13:36:21'),
(143, 1, '2018-03-28 13:36:21'),
(143, 2, '2018-03-28 13:36:21'),
(143, 4, '2018-03-28 13:36:21'),
(143, 5, '2018-03-28 13:36:21'),
(144, 1, '2018-03-28 13:36:21'),
(144, 2, '2018-03-28 13:36:21'),
(144, 4, '2018-03-28 13:36:21'),
(144, 5, '2018-03-28 13:36:21'),
(145, 1, '2018-03-28 13:36:21'),
(145, 2, '2018-03-28 13:36:21'),
(145, 4, '2018-03-28 13:36:21'),
(145, 5, '2018-03-28 13:36:21'),
(146, 1, '2018-03-28 13:36:21'),
(146, 2, '2018-03-28 13:36:21'),
(146, 4, '2018-03-28 13:36:21'),
(146, 5, '2018-03-28 13:36:21'),
(147, 1, '2018-03-28 13:36:21'),
(147, 2, '2018-03-28 13:36:21'),
(147, 4, '2018-03-28 13:36:21'),
(147, 5, '2018-03-28 13:36:21'),
(148, 1, '2018-03-28 13:36:21'),
(148, 2, '2018-03-28 13:36:21'),
(148, 4, '2018-03-28 13:36:21'),
(148, 5, '2018-03-28 13:36:21'),
(149, 1, '2018-03-28 13:36:21'),
(149, 2, '2018-03-28 13:36:21'),
(149, 4, '2018-03-28 13:36:21'),
(149, 5, '2018-03-28 13:36:21'),
(150, 1, '2018-03-28 13:36:21'),
(150, 2, '2018-03-28 13:36:21'),
(150, 4, '2018-03-28 13:36:21'),
(150, 5, '2018-03-28 13:36:21'),
(151, 1, '2018-03-28 13:36:21'),
(151, 2, '2018-03-28 13:36:21'),
(151, 4, '2018-03-28 13:36:21'),
(151, 5, '2018-03-28 13:36:21'),
(152, 1, '2018-03-28 13:36:21'),
(152, 2, '2018-03-28 13:36:21'),
(152, 4, '2018-03-28 13:36:21'),
(152, 5, '2018-03-28 13:36:21'),
(153, 1, '2018-03-28 13:36:21'),
(153, 2, '2018-03-28 13:36:21'),
(153, 4, '2018-03-28 13:36:21'),
(153, 5, '2018-03-28 13:36:21'),
(154, 1, '2018-03-28 13:36:21'),
(154, 2, '2018-03-28 13:36:21'),
(154, 4, '2018-03-28 13:36:21'),
(154, 5, '2018-03-28 13:36:21'),
(155, 1, '2018-03-28 13:36:21'),
(155, 2, '2018-03-28 13:36:21'),
(155, 4, '2018-03-28 13:36:21'),
(155, 5, '2018-03-28 13:36:21'),
(156, 1, '2018-03-28 13:36:21'),
(156, 2, '2018-03-28 13:36:21'),
(156, 4, '2018-03-28 13:36:21'),
(156, 5, '2018-03-28 13:36:21'),
(157, 1, '2018-03-28 13:36:21'),
(157, 2, '2018-03-28 13:36:21'),
(157, 4, '2018-03-28 13:36:21'),
(157, 5, '2018-03-28 13:36:21'),
(158, 1, '2018-03-28 13:36:21'),
(158, 2, '2018-03-28 13:36:21'),
(158, 4, '2018-03-28 13:36:21'),
(158, 5, '2018-03-28 13:36:21'),
(159, 1, '2018-03-28 13:36:21'),
(159, 2, '2018-03-28 13:36:21'),
(159, 4, '2018-03-28 13:36:21'),
(159, 5, '2018-03-28 13:36:21'),
(160, 1, '2018-03-28 13:36:21'),
(160, 2, '2018-03-28 13:36:21'),
(160, 4, '2018-03-28 13:36:21'),
(160, 5, '2018-03-28 13:36:21'),
(161, 1, '2018-03-28 13:36:21'),
(161, 2, '2018-03-28 13:36:21'),
(161, 4, '2018-03-28 13:36:21'),
(161, 5, '2018-03-28 13:36:21'),
(162, 1, '2018-03-28 13:36:21'),
(162, 2, '2018-03-28 13:36:21'),
(162, 4, '2018-03-28 13:36:21'),
(162, 5, '2018-03-28 13:36:21'),
(163, 1, '2018-03-28 13:36:21'),
(163, 2, '2018-03-28 13:36:21'),
(163, 3, '2018-03-28 13:36:21'),
(163, 4, '2018-03-28 13:36:21'),
(163, 5, '2018-03-28 13:36:21'),
(163, 6, '2018-03-28 13:36:21'),
(164, 1, '2018-03-28 13:36:21'),
(164, 2, '2018-03-28 13:36:21'),
(164, 3, '2018-03-28 13:36:21'),
(164, 4, '2018-03-28 13:36:21'),
(164, 5, '2018-03-28 13:36:21'),
(164, 6, '2018-03-28 13:36:21'),
(165, 1, '2018-03-28 13:36:21'),
(165, 2, '2018-03-28 13:36:21'),
(165, 3, '2018-03-28 13:36:21'),
(165, 4, '2018-03-28 13:36:21'),
(165, 5, '2018-03-28 13:36:21'),
(165, 6, '2018-03-28 13:36:21'),
(166, 1, '2018-03-28 13:36:21'),
(166, 2, '2018-03-28 13:36:21'),
(166, 3, '2018-03-28 13:36:21'),
(166, 4, '2018-03-28 13:36:21'),
(166, 5, '2018-03-28 13:36:21'),
(166, 6, '2018-03-28 13:36:21'),
(167, 1, '2018-03-28 13:36:21'),
(167, 2, '2018-03-28 13:36:21'),
(167, 3, '2018-03-28 13:36:21'),
(167, 4, '2018-03-28 13:36:21'),
(167, 5, '2018-03-28 13:36:21'),
(167, 6, '2018-03-28 13:36:21'),
(168, 1, '2018-03-28 13:36:21'),
(168, 2, '2018-03-28 13:36:21'),
(168, 3, '2018-03-28 13:36:21'),
(168, 4, '2018-03-28 13:36:21'),
(168, 5, '2018-03-28 13:36:21'),
(168, 6, '2018-03-28 13:36:21'),
(169, 1, '2018-03-28 13:36:21'),
(169, 2, '2018-03-28 13:36:21'),
(169, 3, '2018-03-28 13:36:21'),
(169, 4, '2018-03-28 13:36:21'),
(169, 5, '2018-03-28 13:36:21'),
(169, 6, '2018-03-28 13:36:21'),
(170, 1, '2018-03-28 13:36:21'),
(170, 2, '2018-03-28 13:36:21'),
(170, 3, '2018-03-28 13:36:21'),
(170, 4, '2018-03-28 13:36:21'),
(170, 5, '2018-03-28 13:36:21'),
(170, 6, '2018-03-28 13:36:21'),
(171, 1, '2018-03-28 13:36:21'),
(171, 2, '2018-03-28 13:36:21'),
(171, 3, '2018-03-28 13:36:21'),
(171, 4, '2018-03-28 13:36:21'),
(171, 5, '2018-03-28 13:36:21'),
(171, 6, '2018-03-28 13:36:21'),
(172, 1, '2018-03-28 13:36:21'),
(172, 2, '2018-03-28 13:36:21'),
(172, 3, '2018-03-28 13:36:21'),
(172, 4, '2018-03-28 13:36:21'),
(172, 5, '2018-03-28 13:36:21'),
(172, 6, '2018-03-28 13:36:21'),
(173, 1, '2018-03-28 13:36:21'),
(173, 2, '2018-03-28 13:36:21'),
(173, 3, '2018-03-28 13:36:21'),
(173, 4, '2018-03-28 13:36:21'),
(173, 5, '2018-03-28 13:36:21'),
(173, 6, '2018-03-28 13:36:21'),
(174, 1, '2018-03-28 13:36:21'),
(174, 2, '2018-03-28 13:36:21'),
(174, 3, '2018-03-28 13:36:21'),
(174, 4, '2018-03-28 13:36:21'),
(174, 5, '2018-03-28 13:36:21'),
(174, 6, '2018-03-28 13:36:21'),
(175, 1, '2018-03-28 13:36:21'),
(175, 2, '2018-03-28 13:36:21'),
(175, 3, '2018-03-28 13:36:21'),
(175, 4, '2018-03-28 13:36:21'),
(175, 5, '2018-03-28 13:36:21'),
(175, 6, '2018-03-28 13:36:21'),
(176, 1, '2018-03-28 13:36:21'),
(176, 2, '2018-03-28 13:36:21'),
(176, 3, '2018-03-28 13:36:21'),
(176, 4, '2018-03-28 13:36:21'),
(176, 5, '2018-03-28 13:36:21'),
(176, 6, '2018-03-28 13:36:21'),
(177, 1, '2018-03-28 13:36:21'),
(177, 2, '2018-03-28 13:36:21'),
(177, 3, '2018-03-28 13:36:21'),
(177, 4, '2018-03-28 13:36:21'),
(177, 5, '2018-03-28 13:36:21'),
(177, 6, '2018-03-28 13:36:21'),
(178, 1, '2018-03-28 13:36:21'),
(178, 2, '2018-03-28 13:36:21'),
(178, 3, '2018-03-28 13:36:21'),
(178, 4, '2018-03-28 13:36:21'),
(178, 5, '2018-03-28 13:36:21'),
(178, 6, '2018-03-28 13:36:21'),
(179, 1, '2018-03-28 13:36:21'),
(179, 2, '2018-03-28 13:36:21'),
(179, 3, '2018-03-28 13:36:21'),
(179, 4, '2018-03-28 13:36:21'),
(179, 5, '2018-03-28 13:36:21'),
(179, 6, '2018-03-28 13:36:21'),
(180, 1, '2018-03-28 13:36:21'),
(180, 2, '2018-03-28 13:36:21'),
(180, 3, '2018-03-28 13:36:21'),
(180, 4, '2018-03-28 13:36:21'),
(180, 5, '2018-03-28 13:36:21'),
(180, 6, '2018-03-28 13:36:21'),
(181, 1, '2018-03-28 13:36:21'),
(181, 2, '2018-03-28 13:36:21'),
(181, 3, '2018-03-28 13:36:21'),
(181, 4, '2018-03-28 13:36:21'),
(181, 5, '2018-03-28 13:36:21'),
(181, 6, '2018-03-28 13:36:21'),
(182, 1, '2018-03-28 13:36:21'),
(182, 2, '2018-03-28 13:36:21'),
(182, 3, '2018-03-28 13:36:21'),
(182, 4, '2018-03-28 13:36:21'),
(182, 5, '2018-03-28 13:36:21'),
(182, 6, '2018-03-28 13:36:21'),
(183, 1, '2018-03-28 13:36:21'),
(183, 2, '2018-03-28 13:36:21'),
(183, 3, '2018-03-28 13:36:21'),
(183, 4, '2018-03-28 13:36:21'),
(183, 5, '2018-03-28 13:36:21'),
(183, 6, '2018-03-28 13:36:21'),
(184, 1, '2018-03-28 13:36:21'),
(184, 2, '2018-03-28 13:36:21'),
(184, 3, '2018-03-28 13:36:21'),
(184, 4, '2018-03-28 13:36:21'),
(184, 5, '2018-03-28 13:36:21'),
(184, 6, '2018-03-28 13:36:21'),
(185, 1, '2018-03-28 13:36:21'),
(185, 2, '2018-03-28 13:36:21'),
(185, 3, '2018-03-28 13:36:21'),
(185, 4, '2018-03-28 13:36:21'),
(185, 5, '2018-03-28 13:36:21'),
(185, 6, '2018-03-28 13:36:21'),
(186, 1, '2018-03-28 13:36:21'),
(186, 2, '2018-03-28 13:36:21'),
(186, 3, '2018-03-28 13:36:21'),
(186, 4, '2018-03-28 13:36:21'),
(186, 5, '2018-03-28 13:36:21'),
(186, 6, '2018-03-28 13:36:21'),
(187, 1, '2018-03-28 13:36:21'),
(187, 2, '2018-03-28 13:36:21'),
(187, 3, '2018-03-28 13:36:21'),
(187, 4, '2018-03-28 13:36:21'),
(187, 5, '2018-03-28 13:36:21'),
(187, 6, '2018-03-28 13:36:21'),
(188, 1, '2018-03-28 13:36:21'),
(188, 2, '2018-03-28 13:36:21'),
(188, 3, '2018-03-28 13:36:21'),
(188, 4, '2018-03-28 13:36:21'),
(188, 5, '2018-03-28 13:36:21'),
(188, 6, '2018-03-28 13:36:21'),
(189, 1, '2018-03-28 13:36:21'),
(189, 2, '2018-03-28 13:36:21'),
(189, 3, '2018-03-28 13:36:21'),
(189, 4, '2018-03-28 13:36:21'),
(189, 5, '2018-03-28 13:36:21'),
(189, 6, '2018-03-28 13:36:21'),
(190, 1, '2018-03-28 13:36:21'),
(190, 2, '2018-03-28 13:36:21'),
(190, 3, '2018-03-28 13:36:21'),
(190, 4, '2018-03-28 13:36:21'),
(190, 5, '2018-03-28 13:36:21'),
(190, 6, '2018-03-28 13:36:21'),
(191, 1, '2018-03-28 13:36:21'),
(191, 2, '2018-03-28 13:36:21'),
(191, 3, '2018-03-28 13:36:21'),
(191, 4, '2018-03-28 13:36:21'),
(191, 5, '2018-03-28 13:36:21'),
(191, 6, '2018-03-28 13:36:21'),
(192, 1, '2018-03-28 13:36:21'),
(192, 2, '2018-03-28 13:36:21'),
(192, 3, '2018-03-28 13:36:21'),
(192, 4, '2018-03-28 13:36:21'),
(192, 5, '2018-03-28 13:36:21'),
(192, 6, '2018-03-28 13:36:21'),
(193, 1, '2018-03-28 13:36:21'),
(193, 2, '2018-03-28 13:36:21'),
(193, 3, '2018-03-28 13:36:21'),
(193, 4, '2018-03-28 13:36:21'),
(193, 5, '2018-03-28 13:36:21'),
(193, 6, '2018-03-28 13:36:21'),
(194, 1, '2018-03-28 13:36:21'),
(194, 2, '2018-03-28 13:36:21'),
(194, 3, '2018-03-28 13:36:21'),
(194, 4, '2018-03-28 13:36:21'),
(194, 5, '2018-03-28 13:36:21'),
(194, 6, '2018-03-28 13:36:21'),
(195, 1, '2018-03-28 13:36:21'),
(195, 2, '2018-03-28 13:36:21'),
(195, 3, '2018-03-28 13:36:21'),
(195, 4, '2018-03-28 13:36:21'),
(195, 5, '2018-03-28 13:36:21'),
(195, 6, '2018-03-28 13:36:21'),
(196, 1, '2018-03-28 13:36:21'),
(196, 2, '2018-03-28 13:36:21'),
(196, 3, '2018-03-28 13:36:21'),
(196, 4, '2018-03-28 13:36:21'),
(196, 5, '2018-03-28 13:36:21'),
(196, 6, '2018-03-28 13:36:21'),
(197, 1, '2018-03-28 13:36:21'),
(197, 2, '2018-03-28 13:36:21'),
(197, 3, '2018-03-28 13:36:21'),
(197, 4, '2018-03-28 13:36:21'),
(197, 5, '2018-03-28 13:36:21'),
(197, 6, '2018-03-28 13:36:21'),
(198, 1, '2018-03-28 13:36:21'),
(198, 2, '2018-03-28 13:36:21'),
(198, 3, '2018-03-28 13:36:21'),
(198, 4, '2018-03-28 13:36:21'),
(198, 5, '2018-03-28 13:36:21'),
(198, 6, '2018-03-28 13:36:21'),
(199, 1, '2018-03-28 13:36:21'),
(199, 2, '2018-03-28 13:36:21'),
(199, 3, '2018-03-28 13:36:21'),
(199, 4, '2018-03-28 13:36:21'),
(199, 5, '2018-03-28 13:36:21'),
(199, 6, '2018-03-28 13:36:21'),
(200, 1, '2018-03-28 13:36:21'),
(200, 2, '2018-03-28 13:36:21'),
(200, 3, '2018-03-28 13:36:21'),
(200, 4, '2018-03-28 13:36:21'),
(200, 5, '2018-03-28 13:36:21'),
(200, 6, '2018-03-28 13:36:21'),
(201, 1, '2018-03-28 13:36:21'),
(201, 2, '2018-03-28 13:36:21'),
(201, 3, '2018-03-28 13:36:21'),
(201, 4, '2018-03-28 13:36:21'),
(201, 5, '2018-03-28 13:36:21'),
(201, 6, '2018-03-28 13:36:21'),
(202, 1, '2018-03-28 13:36:21'),
(202, 2, '2018-03-28 13:36:21'),
(202, 3, '2018-03-28 13:36:21'),
(202, 4, '2018-03-28 13:36:21'),
(202, 5, '2018-03-28 13:36:21'),
(202, 6, '2018-03-28 13:36:21'),
(203, 1, '2018-03-28 13:36:21'),
(203, 2, '2018-03-28 13:36:21'),
(203, 3, '2018-03-28 13:36:21'),
(203, 4, '2018-03-28 13:36:21'),
(203, 5, '2018-03-28 13:36:21'),
(203, 6, '2018-03-28 13:36:21'),
(204, 1, '2018-03-28 13:36:21'),
(204, 2, '2018-03-28 13:36:21'),
(204, 3, '2018-03-28 13:36:21'),
(204, 4, '2018-03-28 13:36:21'),
(204, 5, '2018-03-28 13:36:21'),
(204, 6, '2018-03-28 13:36:21'),
(205, 1, '2018-03-28 13:36:21'),
(205, 2, '2018-03-28 13:36:21'),
(205, 3, '2018-03-28 13:36:21'),
(205, 4, '2018-03-28 13:36:21'),
(205, 5, '2018-03-28 13:36:21'),
(205, 6, '2018-03-28 13:36:21'),
(206, 1, '2018-03-28 13:36:21'),
(206, 2, '2018-03-28 13:36:21'),
(206, 3, '2018-03-28 13:36:21'),
(206, 4, '2018-03-28 13:36:21'),
(206, 5, '2018-03-28 13:36:21'),
(206, 6, '2018-03-28 13:36:21'),
(207, 1, '2018-03-28 13:36:21'),
(207, 2, '2018-03-28 13:36:21'),
(207, 3, '2018-03-28 13:36:21'),
(207, 4, '2018-03-28 13:36:21'),
(207, 5, '2018-03-28 13:36:21'),
(207, 6, '2018-03-28 13:36:21'),
(208, 1, '2018-03-28 13:36:21'),
(208, 2, '2018-03-28 13:36:21'),
(208, 3, '2018-03-28 13:36:21'),
(208, 4, '2018-03-28 13:36:21'),
(208, 5, '2018-03-28 13:36:21'),
(208, 6, '2018-03-28 13:36:21'),
(209, 1, '2018-03-28 13:36:21'),
(209, 2, '2018-03-28 13:36:21'),
(209, 3, '2018-03-28 13:36:21'),
(209, 4, '2018-03-28 13:36:21'),
(209, 5, '2018-03-28 13:36:21'),
(209, 6, '2018-03-28 13:36:21'),
(210, 1, '2018-03-28 13:36:21'),
(210, 2, '2018-03-28 13:36:21'),
(210, 3, '2018-03-28 13:36:21'),
(210, 4, '2018-03-28 13:36:21'),
(210, 5, '2018-03-28 13:36:21'),
(210, 6, '2018-03-28 13:36:21'),
(211, 1, '2018-03-28 13:36:21'),
(211, 2, '2018-03-28 13:36:21'),
(211, 3, '2018-03-28 13:36:21'),
(211, 4, '2018-03-28 13:36:21'),
(211, 5, '2018-03-28 13:36:21'),
(211, 6, '2018-03-28 13:36:21'),
(212, 1, '2018-03-28 13:36:21'),
(212, 2, '2018-03-28 13:36:21'),
(212, 3, '2018-03-28 13:36:21'),
(212, 4, '2018-03-28 13:36:21'),
(212, 5, '2018-03-28 13:36:21'),
(212, 6, '2018-03-28 13:36:21'),
(213, 1, '2018-03-28 13:36:21'),
(213, 2, '2018-03-28 13:36:21'),
(213, 3, '2018-03-28 13:36:21'),
(213, 4, '2018-03-28 13:36:21'),
(213, 5, '2018-03-28 13:36:21'),
(213, 6, '2018-03-28 13:36:21'),
(214, 1, '2018-03-28 13:36:21'),
(214, 2, '2018-03-28 13:36:21'),
(214, 3, '2018-03-28 13:36:21'),
(214, 4, '2018-03-28 13:36:21'),
(214, 5, '2018-03-28 13:36:21'),
(214, 6, '2018-03-28 13:36:21'),
(215, 1, '2018-03-28 13:36:21'),
(215, 2, '2018-03-28 13:36:21'),
(215, 3, '2018-03-28 13:36:21'),
(215, 4, '2018-03-28 13:36:21'),
(215, 5, '2018-03-28 13:36:21'),
(215, 6, '2018-03-28 13:36:21'),
(216, 1, '2018-03-28 13:36:21'),
(216, 2, '2018-03-28 13:36:21'),
(216, 3, '2018-03-28 13:36:21'),
(216, 4, '2018-03-28 13:36:21'),
(216, 5, '2018-03-28 13:36:21'),
(216, 6, '2018-03-28 13:36:21'),
(217, 1, '2018-03-28 13:36:21'),
(217, 2, '2018-03-28 13:36:21'),
(217, 5, '2018-03-28 13:36:21'),
(218, 1, '2018-03-28 13:36:21'),
(218, 2, '2018-03-28 13:36:21'),
(218, 5, '2018-03-28 13:36:21'),
(219, 1, '2018-03-28 13:36:21'),
(219, 2, '2018-03-28 13:36:21'),
(219, 5, '2018-03-28 13:36:21'),
(220, 1, '2018-03-28 13:36:21'),
(220, 2, '2018-03-28 13:36:21'),
(220, 5, '2018-03-28 13:36:21'),
(221, 1, '2018-03-28 13:36:21'),
(221, 2, '2018-03-28 13:36:21'),
(221, 5, '2018-03-28 13:36:21'),
(222, 1, '2018-03-28 13:36:21'),
(222, 2, '2018-03-28 13:36:21'),
(222, 5, '2018-03-28 13:36:21'),
(223, 1, '2018-03-28 13:36:21'),
(223, 2, '2018-03-28 13:36:21'),
(223, 5, '2018-03-28 13:36:21'),
(224, 1, '2018-03-28 13:36:21'),
(224, 2, '2018-03-28 13:36:21'),
(224, 5, '2018-03-28 13:36:21'),
(225, 1, '2018-03-28 13:36:21'),
(225, 2, '2018-03-28 13:36:21'),
(225, 5, '2018-03-28 13:36:21'),
(226, 1, '2018-03-28 13:36:21'),
(226, 2, '2018-03-28 13:36:21'),
(226, 5, '2018-03-28 13:36:21'),
(227, 1, '2018-03-28 13:36:21'),
(227, 2, '2018-03-28 13:36:21'),
(227, 5, '2018-03-28 13:36:21'),
(228, 1, '2018-03-28 13:36:21'),
(228, 2, '2018-03-28 13:36:21'),
(228, 5, '2018-03-28 13:36:21'),
(229, 1, '2018-03-28 13:36:21'),
(229, 2, '2018-03-28 13:36:21'),
(229, 5, '2018-03-28 13:36:21'),
(230, 1, '2018-03-28 13:36:21'),
(230, 2, '2018-03-28 13:36:21'),
(230, 5, '2018-03-28 13:36:21'),
(231, 1, '2018-03-28 13:36:21'),
(231, 2, '2018-03-28 13:36:21'),
(231, 5, '2018-03-28 13:36:21'),
(232, 1, '2018-03-28 13:36:21'),
(232, 2, '2018-03-28 13:36:21'),
(232, 5, '2018-03-28 13:36:21'),
(233, 1, '2018-03-28 13:36:21'),
(233, 2, '2018-03-28 13:36:21'),
(233, 5, '2018-03-28 13:36:21'),
(234, 1, '2018-03-28 13:36:21'),
(234, 2, '2018-03-28 13:36:21'),
(234, 5, '2018-03-28 13:36:21'),
(235, 1, '2018-03-28 13:36:21'),
(235, 2, '2018-03-28 13:36:21'),
(235, 5, '2018-03-28 13:36:21'),
(236, 1, '2018-03-28 13:36:21'),
(236, 2, '2018-03-28 13:36:21'),
(236, 5, '2018-03-28 13:36:21'),
(237, 1, '2018-03-28 13:36:21'),
(237, 2, '2018-03-28 13:36:21'),
(237, 5, '2018-03-28 13:36:21'),
(238, 1, '2018-03-28 13:36:21'),
(238, 2, '2018-03-28 13:36:21'),
(238, 5, '2018-03-28 13:36:21'),
(239, 1, '2018-03-28 13:36:21'),
(239, 2, '2018-03-28 13:36:21'),
(239, 5, '2018-03-28 13:36:21'),
(240, 1, '2018-03-28 13:36:21'),
(240, 2, '2018-03-28 13:36:21'),
(240, 5, '2018-03-28 13:36:21'),
(241, 1, '2018-03-28 13:36:21'),
(241, 2, '2018-03-28 13:36:21'),
(241, 5, '2018-03-28 13:36:21'),
(242, 1, '2018-03-28 13:36:21'),
(242, 2, '2018-03-28 13:36:21'),
(242, 5, '2018-03-28 13:36:21'),
(243, 1, '2018-03-28 13:36:21'),
(243, 2, '2018-03-28 13:36:21'),
(243, 5, '2018-03-28 13:36:21'),
(244, 1, '2018-03-28 13:36:21'),
(244, 3, '2018-03-28 13:36:21'),
(244, 5, '2018-03-28 13:36:21'),
(245, 1, '2018-03-28 13:36:21'),
(245, 3, '2018-03-28 13:36:21'),
(245, 5, '2018-03-28 13:36:21'),
(246, 1, '2018-03-28 13:36:21'),
(246, 3, '2018-03-28 13:36:21'),
(246, 5, '2018-03-28 13:36:21'),
(247, 1, '2018-03-28 13:36:21'),
(247, 3, '2018-03-28 13:36:21'),
(247, 5, '2018-03-28 13:36:21'),
(248, 1, '2018-03-28 13:36:21'),
(248, 3, '2018-03-28 13:36:21'),
(248, 5, '2018-03-28 13:36:21'),
(249, 1, '2018-03-28 13:36:21'),
(249, 3, '2018-03-28 13:36:21'),
(249, 5, '2018-03-28 13:36:21'),
(250, 1, '2018-03-28 13:36:21'),
(250, 3, '2018-03-28 13:36:21'),
(250, 5, '2018-03-28 13:36:21'),
(251, 1, '2018-03-28 13:36:21'),
(251, 3, '2018-03-28 13:36:21'),
(251, 5, '2018-03-28 13:36:21'),
(252, 1, '2018-03-28 13:36:21'),
(252, 3, '2018-03-28 13:36:21'),
(252, 5, '2018-03-28 13:36:21'),
(253, 1, '2018-03-28 13:36:21'),
(253, 3, '2018-03-28 13:36:21'),
(253, 5, '2018-03-28 13:36:21'),
(254, 1, '2018-03-28 13:36:21'),
(254, 3, '2018-03-28 13:36:21'),
(254, 5, '2018-03-28 13:36:21'),
(255, 1, '2018-03-28 13:36:21'),
(255, 3, '2018-03-28 13:36:21'),
(255, 5, '2018-03-28 13:36:21'),
(256, 1, '2018-03-28 13:36:21'),
(256, 3, '2018-03-28 13:36:21'),
(256, 5, '2018-03-28 13:36:21'),
(257, 1, '2018-03-28 13:36:21'),
(257, 3, '2018-03-28 13:36:21'),
(257, 5, '2018-03-28 13:36:21'),
(258, 1, '2018-03-28 13:36:21'),
(258, 3, '2018-03-28 13:36:21'),
(258, 5, '2018-03-28 13:36:21'),
(259, 1, '2018-03-28 13:36:21'),
(259, 3, '2018-03-28 13:36:21'),
(259, 5, '2018-03-28 13:36:21'),
(260, 1, '2018-03-28 13:36:21'),
(260, 3, '2018-03-28 13:36:21'),
(260, 5, '2018-03-28 13:36:21'),
(261, 1, '2018-03-28 13:36:21'),
(261, 3, '2018-03-28 13:36:21'),
(261, 5, '2018-03-28 13:36:21'),
(262, 1, '2018-03-28 13:36:21'),
(262, 3, '2018-03-28 13:36:21'),
(262, 5, '2018-03-28 13:36:21'),
(263, 1, '2018-03-28 13:36:21'),
(263, 3, '2018-03-28 13:36:21'),
(263, 5, '2018-03-28 13:36:21'),
(264, 1, '2018-03-28 13:36:21'),
(264, 3, '2018-03-28 13:36:21'),
(264, 5, '2018-03-28 13:36:21'),
(265, 1, '2018-03-28 13:36:21'),
(265, 3, '2018-03-28 13:36:21'),
(265, 5, '2018-03-28 13:36:21'),
(266, 1, '2018-03-28 13:36:21'),
(266, 3, '2018-03-28 13:36:21'),
(266, 5, '2018-03-28 13:36:21'),
(267, 1, '2018-03-28 13:36:21'),
(267, 3, '2018-03-28 13:36:21'),
(267, 5, '2018-03-28 13:36:21'),
(268, 1, '2018-03-28 13:36:21'),
(268, 3, '2018-03-28 13:36:21'),
(268, 5, '2018-03-28 13:36:21'),
(269, 1, '2018-03-28 13:36:21'),
(269, 3, '2018-03-28 13:36:21'),
(269, 5, '2018-03-28 13:36:21'),
(270, 1, '2018-03-28 13:36:21'),
(270, 3, '2018-03-28 13:36:21'),
(270, 5, '2018-03-28 13:36:21'),
(271, 1, '2018-03-28 13:36:21'),
(271, 5, '2018-03-28 13:36:21'),
(272, 1, '2018-03-28 13:36:21'),
(272, 5, '2018-03-28 13:36:21'),
(273, 1, '2018-03-28 13:36:21'),
(273, 5, '2018-03-28 13:36:21'),
(274, 1, '2018-03-28 13:36:21'),
(274, 5, '2018-03-28 13:36:21'),
(275, 1, '2018-03-28 13:36:21'),
(275, 5, '2018-03-28 13:36:21'),
(276, 1, '2018-03-28 13:36:21'),
(276, 5, '2018-03-28 13:36:21'),
(277, 1, '2018-03-28 13:36:21'),
(277, 5, '2018-03-28 13:36:21'),
(278, 1, '2018-03-28 13:36:21'),
(278, 5, '2018-03-28 13:36:21'),
(279, 1, '2018-03-28 13:36:21'),
(279, 5, '2018-03-28 13:36:21'),
(280, 1, '2018-03-28 13:36:21'),
(280, 5, '2018-03-28 13:36:21'),
(281, 1, '2018-03-28 13:36:21'),
(281, 5, '2018-03-28 13:36:21'),
(282, 1, '2018-03-28 13:36:21'),
(282, 5, '2018-03-28 13:36:21'),
(283, 1, '2018-03-28 13:36:21'),
(283, 5, '2018-03-28 13:36:21'),
(284, 1, '2018-03-28 13:36:21'),
(284, 5, '2018-03-28 13:36:21'),
(285, 1, '2018-03-28 13:36:21'),
(285, 5, '2018-03-28 13:36:21'),
(286, 1, '2018-03-28 13:36:21'),
(286, 5, '2018-03-28 13:36:21'),
(287, 1, '2018-03-28 13:36:21'),
(287, 5, '2018-03-28 13:36:21'),
(288, 1, '2018-03-28 13:36:21'),
(288, 5, '2018-03-28 13:36:21'),
(289, 1, '2018-03-28 13:36:21'),
(289, 5, '2018-03-28 13:36:21'),
(290, 1, '2018-03-28 13:36:21'),
(290, 5, '2018-03-28 13:36:21'),
(291, 1, '2018-03-28 13:36:21'),
(291, 5, '2018-03-28 13:36:21'),
(292, 1, '2018-03-28 13:36:21'),
(292, 5, '2018-03-28 13:36:21'),
(293, 1, '2018-03-28 13:36:21'),
(293, 5, '2018-03-28 13:36:21'),
(294, 1, '2018-03-28 13:36:21'),
(294, 5, '2018-03-28 13:36:21'),
(295, 1, '2018-03-28 13:36:21'),
(295, 5, '2018-03-28 13:36:21'),
(296, 1, '2018-03-28 13:36:21'),
(296, 5, '2018-03-28 13:36:21'),
(297, 1, '2018-03-28 13:36:21'),
(297, 5, '2018-03-28 13:36:21'),
(298, 1, '2018-03-28 13:36:21'),
(298, 5, '2018-03-28 13:36:21'),
(299, 1, '2018-03-28 13:36:21'),
(299, 5, '2018-03-28 13:36:21'),
(300, 1, '2018-03-28 13:36:21'),
(300, 5, '2018-03-28 13:36:21'),
(301, 1, '2018-03-28 13:36:21'),
(301, 5, '2018-03-28 13:36:21'),
(302, 1, '2018-03-28 13:36:21'),
(302, 5, '2018-03-28 13:36:21'),
(303, 1, '2018-03-28 13:36:21'),
(303, 5, '2018-03-28 13:36:21'),
(304, 1, '2018-03-28 13:36:21'),
(304, 5, '2018-03-28 13:36:21'),
(305, 1, '2018-03-28 13:36:21'),
(305, 5, '2018-03-28 13:36:21'),
(306, 1, '2018-03-28 13:36:21'),
(306, 5, '2018-03-28 13:36:21'),
(307, 1, '2018-03-28 13:36:21'),
(307, 5, '2018-03-28 13:36:21'),
(308, 1, '2018-03-28 13:36:21'),
(308, 5, '2018-03-28 13:36:21'),
(309, 1, '2018-03-28 13:36:21'),
(309, 5, '2018-03-28 13:36:21'),
(310, 1, '2018-03-28 13:36:21'),
(310, 5, '2018-03-28 13:36:21'),
(311, 1, '2018-03-28 13:36:21'),
(311, 5, '2018-03-28 13:36:21'),
(312, 1, '2018-03-28 13:36:21'),
(312, 5, '2018-03-28 13:36:21'),
(313, 1, '2018-03-28 13:36:21'),
(313, 5, '2018-03-28 13:36:21'),
(314, 1, '2018-03-28 13:36:21'),
(314, 5, '2018-03-28 13:36:21'),
(315, 1, '2018-03-28 13:36:21'),
(315, 5, '2018-03-28 13:36:21'),
(316, 1, '2018-03-28 13:36:21'),
(316, 5, '2018-03-28 13:36:21'),
(317, 1, '2018-03-28 13:36:21'),
(317, 5, '2018-03-28 13:36:21'),
(318, 1, '2018-03-28 13:36:21'),
(318, 5, '2018-03-28 13:36:21'),
(319, 1, '2018-03-28 13:36:21'),
(319, 5, '2018-03-28 13:36:21'),
(320, 1, '2018-03-28 13:36:21'),
(320, 5, '2018-03-28 13:36:21'),
(321, 1, '2018-03-28 13:36:21'),
(321, 5, '2018-03-28 13:36:21'),
(322, 1, '2018-03-28 13:36:21'),
(322, 5, '2018-03-28 13:36:21'),
(323, 1, '2018-03-28 13:36:21'),
(323, 5, '2018-03-28 13:36:21'),
(324, 1, '2018-03-28 13:36:21'),
(324, 5, '2018-03-28 13:36:21'),
(325, 1, '2018-03-28 13:36:21'),
(325, 2, '2018-03-28 13:36:21'),
(325, 5, '2018-03-28 13:36:21'),
(326, 1, '2018-03-28 13:36:21'),
(326, 2, '2018-03-28 13:36:21'),
(326, 5, '2018-03-28 13:36:21'),
(327, 1, '2018-03-28 13:36:21'),
(327, 2, '2018-03-28 13:36:21'),
(327, 5, '2018-03-28 13:36:21'),
(328, 1, '2018-03-28 13:36:21'),
(328, 2, '2018-03-28 13:36:21'),
(328, 5, '2018-03-28 13:36:21'),
(329, 1, '2018-03-28 13:36:21'),
(329, 2, '2018-03-28 13:36:21'),
(329, 5, '2018-03-28 13:36:21'),
(330, 1, '2018-03-28 13:36:21'),
(330, 2, '2018-03-28 13:36:21'),
(330, 5, '2018-03-28 13:36:21'),
(331, 1, '2018-03-28 13:36:21'),
(331, 2, '2018-03-28 13:36:21'),
(331, 5, '2018-03-28 13:36:21'),
(332, 1, '2018-03-28 13:36:21'),
(332, 2, '2018-03-28 13:36:21'),
(332, 5, '2018-03-28 13:36:21'),
(333, 1, '2018-03-28 13:36:21'),
(333, 2, '2018-03-28 13:36:21'),
(333, 5, '2018-03-28 13:36:21'),
(334, 1, '2018-03-28 13:36:21'),
(334, 2, '2018-03-28 13:36:21'),
(334, 5, '2018-03-28 13:36:21'),
(335, 1, '2018-03-28 13:36:21'),
(335, 2, '2018-03-28 13:36:21'),
(335, 5, '2018-03-28 13:36:21'),
(336, 1, '2018-03-28 13:36:21'),
(336, 2, '2018-03-28 13:36:21'),
(336, 5, '2018-03-28 13:36:21'),
(337, 1, '2018-03-28 13:36:21'),
(337, 2, '2018-03-28 13:36:21'),
(337, 5, '2018-03-28 13:36:21'),
(338, 1, '2018-03-28 13:36:21'),
(338, 2, '2018-03-28 13:36:21'),
(338, 5, '2018-03-28 13:36:21'),
(339, 1, '2018-03-28 13:36:21'),
(339, 2, '2018-03-28 13:36:21'),
(339, 5, '2018-03-28 13:36:21'),
(340, 1, '2018-03-28 13:36:21'),
(340, 2, '2018-03-28 13:36:21'),
(340, 5, '2018-03-28 13:36:21'),
(341, 1, '2018-03-28 13:36:21'),
(341, 2, '2018-03-28 13:36:21'),
(341, 5, '2018-03-28 13:36:21'),
(342, 1, '2018-03-28 13:36:21'),
(342, 2, '2018-03-28 13:36:21'),
(342, 5, '2018-03-28 13:36:21'),
(343, 1, '2018-03-28 13:36:21'),
(343, 2, '2018-03-28 13:36:21'),
(343, 5, '2018-03-28 13:36:21'),
(344, 1, '2018-03-28 13:36:21'),
(344, 2, '2018-03-28 13:36:21'),
(344, 5, '2018-03-28 13:36:21'),
(345, 1, '2018-03-28 13:36:21'),
(345, 2, '2018-03-28 13:36:21'),
(345, 5, '2018-03-28 13:36:21'),
(346, 1, '2018-03-28 13:36:21'),
(346, 2, '2018-03-28 13:36:21'),
(346, 5, '2018-03-28 13:36:21'),
(347, 1, '2018-03-28 13:36:21'),
(347, 2, '2018-03-28 13:36:21'),
(347, 5, '2018-03-28 13:36:21'),
(348, 1, '2018-03-28 13:36:21'),
(348, 2, '2018-03-28 13:36:21'),
(348, 5, '2018-03-28 13:36:21'),
(349, 1, '2018-03-28 13:36:21'),
(349, 2, '2018-03-28 13:36:21'),
(349, 5, '2018-03-28 13:36:21'),
(350, 1, '2018-03-28 13:36:21'),
(350, 2, '2018-03-28 13:36:21'),
(350, 5, '2018-03-28 13:36:21'),
(351, 1, '2018-03-28 13:36:21'),
(351, 2, '2018-03-28 13:36:21'),
(351, 5, '2018-03-28 13:36:21'),
(352, 1, '2018-03-28 13:36:21'),
(352, 2, '2018-03-28 13:36:21'),
(352, 3, '2018-03-28 13:36:21'),
(352, 4, '2018-03-28 13:36:21'),
(352, 5, '2018-03-28 13:36:21'),
(352, 6, '2018-03-28 13:36:21'),
(353, 1, '2018-03-28 13:36:21'),
(353, 2, '2018-03-28 13:36:21'),
(353, 3, '2018-03-28 13:36:21'),
(353, 4, '2018-03-28 13:36:21'),
(353, 5, '2018-03-28 13:36:21'),
(353, 6, '2018-03-28 13:36:21'),
(354, 1, '2018-03-28 13:36:21'),
(354, 2, '2018-03-28 13:36:21'),
(354, 3, '2018-03-28 13:36:21'),
(354, 4, '2018-03-28 13:36:21'),
(354, 5, '2018-03-28 13:36:21'),
(354, 6, '2018-03-28 13:36:21'),
(355, 1, '2018-03-28 13:36:21'),
(355, 2, '2018-03-28 13:36:21'),
(355, 3, '2018-03-28 13:36:21'),
(355, 4, '2018-03-28 13:36:21'),
(355, 5, '2018-03-28 13:36:21'),
(355, 6, '2018-03-28 13:36:21'),
(356, 1, '2018-03-28 13:36:21'),
(356, 2, '2018-03-28 13:36:21'),
(356, 3, '2018-03-28 13:36:21'),
(356, 4, '2018-03-28 13:36:21'),
(356, 5, '2018-03-28 13:36:21'),
(356, 6, '2018-03-28 13:36:21'),
(357, 1, '2018-03-28 13:36:21'),
(357, 2, '2018-03-28 13:36:21'),
(357, 3, '2018-03-28 13:36:21'),
(357, 4, '2018-03-28 13:36:21'),
(357, 5, '2018-03-28 13:36:21'),
(357, 6, '2018-03-28 13:36:21'),
(358, 1, '2018-03-28 13:36:21'),
(358, 2, '2018-03-28 13:36:21'),
(358, 3, '2018-03-28 13:36:21'),
(358, 4, '2018-03-28 13:36:21'),
(358, 5, '2018-03-28 13:36:21'),
(358, 6, '2018-03-28 13:36:21'),
(359, 1, '2018-03-28 13:36:21'),
(359, 2, '2018-03-28 13:36:21'),
(359, 3, '2018-03-28 13:36:21'),
(359, 4, '2018-03-28 13:36:21'),
(359, 5, '2018-03-28 13:36:21'),
(359, 6, '2018-03-28 13:36:21'),
(360, 1, '2018-03-28 13:36:21'),
(360, 2, '2018-03-28 13:36:21'),
(360, 3, '2018-03-28 13:36:21'),
(360, 4, '2018-03-28 13:36:21'),
(360, 5, '2018-03-28 13:36:21'),
(360, 6, '2018-03-28 13:36:21'),
(361, 1, '2018-03-28 13:36:21'),
(361, 2, '2018-03-28 13:36:21'),
(361, 3, '2018-03-28 13:36:21'),
(361, 4, '2018-03-28 13:36:21'),
(361, 5, '2018-03-28 13:36:21'),
(361, 6, '2018-03-28 13:36:21'),
(362, 1, '2018-03-28 13:36:21'),
(362, 2, '2018-03-28 13:36:21'),
(362, 3, '2018-03-28 13:36:21'),
(362, 4, '2018-03-28 13:36:21'),
(362, 5, '2018-03-28 13:36:21'),
(362, 6, '2018-03-28 13:36:21'),
(363, 1, '2018-03-28 13:36:21'),
(363, 2, '2018-03-28 13:36:21'),
(363, 3, '2018-03-28 13:36:21'),
(363, 4, '2018-03-28 13:36:21'),
(363, 5, '2018-03-28 13:36:21'),
(363, 6, '2018-03-28 13:36:21'),
(364, 1, '2018-03-28 13:36:21'),
(364, 2, '2018-03-28 13:36:21'),
(364, 3, '2018-03-28 13:36:21'),
(364, 4, '2018-03-28 13:36:21'),
(364, 5, '2018-03-28 13:36:21'),
(364, 6, '2018-03-28 13:36:21'),
(365, 1, '2018-03-28 13:36:21'),
(365, 2, '2018-03-28 13:36:21'),
(365, 3, '2018-03-28 13:36:21'),
(365, 4, '2018-03-28 13:36:21'),
(365, 5, '2018-03-28 13:36:21'),
(365, 6, '2018-03-28 13:36:21'),
(366, 1, '2018-03-28 13:36:21'),
(366, 2, '2018-03-28 13:36:21'),
(366, 3, '2018-03-28 13:36:21'),
(366, 4, '2018-03-28 13:36:21'),
(366, 5, '2018-03-28 13:36:21'),
(366, 6, '2018-03-28 13:36:21'),
(367, 1, '2018-03-28 13:36:21'),
(367, 2, '2018-03-28 13:36:21'),
(367, 3, '2018-03-28 13:36:21'),
(367, 4, '2018-03-28 13:36:21'),
(367, 5, '2018-03-28 13:36:21'),
(367, 6, '2018-03-28 13:36:21'),
(368, 1, '2018-03-28 13:36:21'),
(368, 2, '2018-03-28 13:36:21'),
(368, 3, '2018-03-28 13:36:21'),
(368, 4, '2018-03-28 13:36:21'),
(368, 5, '2018-03-28 13:36:21'),
(368, 6, '2018-03-28 13:36:21'),
(369, 1, '2018-03-28 13:36:21'),
(369, 2, '2018-03-28 13:36:21'),
(369, 3, '2018-03-28 13:36:21'),
(369, 4, '2018-03-28 13:36:21'),
(369, 5, '2018-03-28 13:36:21'),
(369, 6, '2018-03-28 13:36:21'),
(370, 1, '2018-03-28 13:36:21'),
(370, 2, '2018-03-28 13:36:21'),
(370, 3, '2018-03-28 13:36:21'),
(370, 4, '2018-03-28 13:36:21'),
(370, 5, '2018-03-28 13:36:21'),
(370, 6, '2018-03-28 13:36:21'),
(371, 1, '2018-03-28 13:36:21'),
(371, 2, '2018-03-28 13:36:21'),
(371, 3, '2018-03-28 13:36:21'),
(371, 4, '2018-03-28 13:36:21'),
(371, 5, '2018-03-28 13:36:21'),
(371, 6, '2018-03-28 13:36:21'),
(372, 1, '2018-03-28 13:36:21'),
(372, 2, '2018-03-28 13:36:21'),
(372, 3, '2018-03-28 13:36:21'),
(372, 4, '2018-03-28 13:36:21'),
(372, 5, '2018-03-28 13:36:21'),
(372, 6, '2018-03-28 13:36:21'),
(373, 1, '2018-03-28 13:36:21'),
(373, 2, '2018-03-28 13:36:21'),
(373, 3, '2018-03-28 13:36:21'),
(373, 4, '2018-03-28 13:36:21'),
(373, 5, '2018-03-28 13:36:21'),
(373, 6, '2018-03-28 13:36:21'),
(374, 1, '2018-03-28 13:36:21'),
(374, 2, '2018-03-28 13:36:21'),
(374, 3, '2018-03-28 13:36:21'),
(374, 4, '2018-03-28 13:36:21'),
(374, 5, '2018-03-28 13:36:21'),
(374, 6, '2018-03-28 13:36:21'),
(375, 1, '2018-03-28 13:36:21'),
(375, 2, '2018-03-28 13:36:21'),
(375, 3, '2018-03-28 13:36:21'),
(375, 4, '2018-03-28 13:36:21'),
(375, 5, '2018-03-28 13:36:21'),
(375, 6, '2018-03-28 13:36:21'),
(376, 1, '2018-03-28 13:36:21'),
(376, 2, '2018-03-28 13:36:21'),
(376, 3, '2018-03-28 13:36:21'),
(376, 4, '2018-03-28 13:36:21'),
(376, 5, '2018-03-28 13:36:21'),
(376, 6, '2018-03-28 13:36:21'),
(377, 1, '2018-03-28 13:36:21'),
(377, 2, '2018-03-28 13:36:21'),
(377, 3, '2018-03-28 13:36:21'),
(377, 4, '2018-03-28 13:36:21'),
(377, 5, '2018-03-28 13:36:21'),
(377, 6, '2018-03-28 13:36:21'),
(378, 1, '2018-03-28 13:36:21'),
(378, 2, '2018-03-28 13:36:21'),
(378, 3, '2018-03-28 13:36:21'),
(378, 4, '2018-03-28 13:36:21'),
(378, 5, '2018-03-28 13:36:21'),
(378, 6, '2018-03-28 13:36:21');

-- --------------------------------------------------------

--
-- Estrutura para tabela `TB_ATRIBUTO_has_TB_PROJETO`
--

CREATE TABLE `TB_ATRIBUTO_has_TB_PROJETO` (
  `TB_ATRIBUTO_id_atributo` int(9) NOT NULL,
  `TB_PROJETO_id_projeto` int(9) NOT NULL,
  `dt_atualizacao` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `TB_RESULTADO_id_resultado` int(9) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Fazendo dump de dados para tabela `TB_ATRIBUTO_has_TB_PROJETO`
--

INSERT INTO `TB_ATRIBUTO_has_TB_PROJETO` (`TB_ATRIBUTO_id_atributo`, `TB_PROJETO_id_projeto`, `dt_atualizacao`, `TB_RESULTADO_id_resultado`) VALUES
(34, 3, '2018-04-10 18:53:35', 350),
(34, 1, '2018-04-10 18:53:35', 350),
(34, 7, '2018-04-10 18:57:36', 351),
(34, 2, '2018-04-10 18:57:36', 351),
(34, 16, '2018-04-10 18:57:36', 351),
(34, 22, '2018-04-10 18:57:36', 351),
(34, 4, '2018-04-10 18:57:36', 351),
(34, 11, '2018-04-10 18:57:36', 351),
(34, 2, '2018-04-10 18:59:00', 352),
(34, 8, '2018-04-10 18:59:01', 352),
(34, 1, '2018-04-10 18:59:01', 352),
(34, 5, '2018-04-10 18:59:01', 352),
(34, 3, '2018-04-10 19:00:37', 353),
(34, 3, '2018-04-10 19:00:37', 353),
(34, 3, '2018-04-10 19:00:37', 353),
(34, 3, '2018-04-10 19:00:37', 353),
(34, 16, '2018-04-10 19:02:04', 354),
(34, 19, '2018-04-10 19:02:04', 354),
(34, 2, '2018-04-10 19:02:04', 354),
(34, 9, '2018-04-10 19:02:04', 354),
(34, 22, '2018-04-10 19:02:04', 354),
(34, 10, '2018-04-10 19:02:04', 354),
(34, 16, '2018-04-10 19:35:10', 355);

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
(3, 'Roberto da Silveira Souza Paranhos', 22225454, 6154545454, 'Comunicação Social', '9859.67', '659.65', '2017-11-09 12:26:46', 52, 16, 3, 2, 1),
(4, 'Natanael de Souza Leite', 12345677, 6120218888, 'Desenvolvimento de Sistemas', '5333.45', '233.13', '2017-11-09 12:26:23', 51, 1, 4, 2, 2),
(7, 'Valfrido Verdana Joaquim', 99999999, 6120210000, 'Comunicação Social', '4566.66', '325.44', '2018-01-25 18:12:19', 70, 16, 2, 3, 1),
(8, 'Antonio Francisco Joaquim Neto Sobrinho', 44444444, 6546546546, 'Atendimento', '11111.11', '111.11', '2017-11-07 17:41:57', 58, 1, 1, 3, 4);

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
  `TB_ATRIBUTO_TB_IMPACTO_id_impacto` int(9) NOT NULL,
  `dt_atualizacao` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `TB_RESULTADO_id_resultado` int(9) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Fazendo dump de dados para tabela `TB_COLABORADOR_has_TB_ATRIBUTO`
--

INSERT INTO `TB_COLABORADOR_has_TB_ATRIBUTO` (`TB_COLABORADOR_id_colaborador`, `TB_COLABORADOR_TB_REFERENCIA_FCT_GFE_id_referencia_fct_gfe`, `TB_COLABORADOR_TB_DIVISAO_id_divisao`, `TB_ATRIBUTO_id_atributo`, `TB_ATRIBUTO_TB_ABRANGENCIA_id_abrangencia`, `TB_ATRIBUTO_TB_COMPLEXIDADE_id_complexidade`, `TB_ATRIBUTO_TB_IMPACTO_id_impacto`, `dt_atualizacao`, `TB_RESULTADO_id_resultado`) VALUES
(3, 52, 16, 1, 1, 1, 1, '2018-04-10 15:59:00', 352),
(3, 52, 16, 1, 1, 1, 1, '2018-04-10 16:00:36', 353),
(3, 52, 16, 27, 4, 4, 5, '2018-04-10 15:59:00', 352),
(3, 52, 16, 27, 4, 4, 5, '2018-04-10 16:00:36', 353),
(3, 52, 16, 56, 52, 34, 38, '2018-04-10 15:59:00', 352),
(3, 52, 16, 56, 52, 34, 38, '2018-04-10 16:00:36', 353),
(3, 52, 16, 82, 55, 37, 40, '2018-04-10 15:59:00', 352),
(3, 52, 16, 82, 55, 37, 40, '2018-04-10 16:00:36', 353),
(3, 52, 16, 109, 7, 7, 7, '2018-04-10 15:59:00', 352),
(3, 52, 16, 109, 7, 7, 7, '2018-04-10 16:00:37', 353),
(3, 52, 16, 136, 10, 10, 10, '2018-04-10 15:59:00', 352),
(3, 52, 16, 136, 10, 10, 10, '2018-04-10 16:00:37', 353),
(3, 52, 16, 163, 13, 13, 13, '2018-04-10 15:59:00', 352),
(3, 52, 16, 163, 13, 13, 13, '2018-04-10 16:00:37', 353),
(3, 52, 16, 190, 16, 16, 16, '2018-04-10 15:59:00', 352),
(3, 52, 16, 190, 16, 16, 16, '2018-04-10 16:00:37', 353),
(3, 52, 16, 217, 19, 19, 19, '2018-04-10 15:59:00', 352),
(3, 52, 16, 217, 19, 19, 19, '2018-04-10 16:00:37', 353),
(3, 52, 16, 244, 22, 22, 22, '2018-04-10 15:59:00', 352),
(3, 52, 16, 244, 22, 22, 22, '2018-04-10 16:00:37', 353),
(3, 52, 16, 271, 58, 40, 43, '2018-04-10 15:59:00', 352),
(3, 52, 16, 271, 58, 40, 43, '2018-04-10 16:00:37', 353),
(3, 52, 16, 298, 25, 25, 25, '2018-04-10 15:59:00', 352),
(3, 52, 16, 298, 25, 25, 25, '2018-04-10 16:00:37', 353),
(3, 52, 16, 325, 28, 28, 28, '2018-04-10 15:59:00', 352),
(3, 52, 16, 325, 28, 28, 28, '2018-04-10 16:00:37', 353),
(3, 52, 16, 352, 31, 31, 31, '2018-04-10 15:59:00', 352),
(3, 52, 16, 352, 31, 31, 31, '2018-04-10 16:00:37', 353),
(8, 58, 1, 1, 1, 1, 1, '2018-04-10 15:53:34', 350),
(8, 58, 1, 1, 1, 1, 1, '2018-04-10 16:02:03', 354),
(8, 58, 1, 1, 1, 1, 1, '2018-04-10 16:35:10', 355),
(8, 58, 1, 27, 4, 4, 5, '2018-04-10 16:02:03', 354),
(8, 58, 1, 27, 4, 4, 5, '2018-04-10 16:35:10', 355),
(8, 58, 1, 56, 52, 34, 38, '2018-04-10 15:53:34', 350),
(8, 58, 1, 56, 52, 34, 38, '2018-04-10 16:02:03', 354),
(8, 58, 1, 56, 52, 34, 38, '2018-04-10 16:35:10', 355),
(8, 58, 1, 82, 55, 37, 40, '2018-04-10 15:53:34', 350),
(8, 58, 1, 82, 55, 37, 40, '2018-04-10 16:02:03', 354),
(8, 58, 1, 82, 55, 37, 40, '2018-04-10 16:35:10', 355),
(8, 58, 1, 109, 7, 7, 7, '2018-04-10 15:53:34', 350),
(8, 58, 1, 109, 7, 7, 7, '2018-04-10 15:57:36', 351),
(8, 58, 1, 109, 7, 7, 7, '2018-04-10 16:02:03', 354),
(8, 58, 1, 109, 7, 7, 7, '2018-04-10 16:35:10', 355),
(8, 58, 1, 136, 10, 10, 10, '2018-04-10 15:53:35', 350),
(8, 58, 1, 136, 10, 10, 10, '2018-04-10 15:57:36', 351),
(8, 58, 1, 136, 10, 10, 10, '2018-04-10 16:02:03', 354),
(8, 58, 1, 136, 10, 10, 10, '2018-04-10 16:35:10', 355),
(8, 58, 1, 163, 13, 13, 13, '2018-04-10 15:53:35', 350),
(8, 58, 1, 163, 13, 13, 13, '2018-04-10 15:57:36', 351),
(8, 58, 1, 163, 13, 13, 13, '2018-04-10 16:02:03', 354),
(8, 58, 1, 163, 13, 13, 13, '2018-04-10 16:35:10', 355),
(8, 58, 1, 190, 16, 16, 16, '2018-04-10 15:53:35', 350),
(8, 58, 1, 190, 16, 16, 16, '2018-04-10 15:57:36', 351),
(8, 58, 1, 190, 16, 16, 16, '2018-04-10 16:02:03', 354),
(8, 58, 1, 190, 16, 16, 16, '2018-04-10 16:35:10', 355),
(8, 58, 1, 217, 19, 19, 19, '2018-04-10 15:53:35', 350),
(8, 58, 1, 217, 19, 19, 19, '2018-04-10 15:57:36', 351),
(8, 58, 1, 217, 19, 19, 19, '2018-04-10 16:02:03', 354),
(8, 58, 1, 217, 19, 19, 19, '2018-04-10 16:35:10', 355),
(8, 58, 1, 244, 22, 22, 22, '2018-04-10 15:53:35', 350),
(8, 58, 1, 244, 22, 22, 22, '2018-04-10 15:57:36', 351),
(8, 58, 1, 244, 22, 22, 22, '2018-04-10 16:02:03', 354),
(8, 58, 1, 244, 22, 22, 22, '2018-04-10 16:35:10', 355),
(8, 58, 1, 271, 58, 40, 43, '2018-04-10 15:53:35', 350),
(8, 58, 1, 271, 58, 40, 43, '2018-04-10 15:57:36', 351),
(8, 58, 1, 271, 58, 40, 43, '2018-04-10 16:02:03', 354),
(8, 58, 1, 271, 58, 40, 43, '2018-04-10 16:35:10', 355),
(8, 58, 1, 298, 25, 25, 25, '2018-04-10 15:53:35', 350),
(8, 58, 1, 298, 25, 25, 25, '2018-04-10 15:57:36', 351),
(8, 58, 1, 298, 25, 25, 25, '2018-04-10 16:02:03', 354),
(8, 58, 1, 298, 25, 25, 25, '2018-04-10 16:35:10', 355),
(8, 58, 1, 325, 28, 28, 28, '2018-04-10 15:53:35', 350),
(8, 58, 1, 325, 28, 28, 28, '2018-04-10 15:57:36', 351),
(8, 58, 1, 325, 28, 28, 28, '2018-04-10 16:02:03', 354),
(8, 58, 1, 325, 28, 28, 28, '2018-04-10 16:35:10', 355),
(8, 58, 1, 352, 31, 31, 31, '2018-04-10 15:53:35', 350),
(8, 58, 1, 352, 31, 31, 31, '2018-04-10 15:57:36', 351),
(8, 58, 1, 352, 31, 31, 31, '2018-04-10 16:02:03', 354),
(8, 58, 1, 352, 31, 31, 31, '2018-04-10 16:35:10', 355);

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
(1, '32000.00', 4, '2018-04-10 19:19:38');

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
(9, '59.65', '68.47', '68.47', 0, '0.00', '0.00', 1, 1),
(10, '68.47', '77.30', '72.88', 0, '0.00', '0.00', 1, 1),
(11, '77.30', '86.13', '81.71', 0, '0.00', '0.00', 1, 1),
(12, '86.13', '94.97', '86.13', 0, '0.00', '0.00', 1, 1);

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
(9, 'Design', 'UX', 'Colaboradores que possuem conhecimento aprofundado em UX - User Experience.'),
(10, 'Design', 'UI', 'Teste'),
(12, 'Desenvolvimento', 'xpto', 'Teste xpto'),
(13, 'Desenvolvimento', 'teste 021', 'Teste 021'),
(14, 'Design', 'XPTO 01', 'XPTO 01'),
(15, 'Design', 'XPTO 01', 'XPT0101');

-- --------------------------------------------------------

--
-- Estrutura para tabela `TB_PAPEL_has_TB_COLABORADOR`
--

CREATE TABLE `TB_PAPEL_has_TB_COLABORADOR` (
  `TB_PAPEL_id_papel` int(9) NOT NULL,
  `TB_COLABORADOR_id_colaborador` int(9) NOT NULL,
  `TB_COLABORADOR_TB_REFERENCIA_FCT_GFE_id_referencia_fct_gfe` int(9) NOT NULL,
  `TB_COLABORADOR_TB_DIVISAO_id_divisao` int(9) NOT NULL,
  `dt_resultado` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `TB_RESULTADO_id_resultado` int(9) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Fazendo dump de dados para tabela `TB_PAPEL_has_TB_COLABORADOR`
--

INSERT INTO `TB_PAPEL_has_TB_COLABORADOR` (`TB_PAPEL_id_papel`, `TB_COLABORADOR_id_colaborador`, `TB_COLABORADOR_TB_REFERENCIA_FCT_GFE_id_referencia_fct_gfe`, `TB_COLABORADOR_TB_DIVISAO_id_divisao`, `dt_resultado`, `TB_RESULTADO_id_resultado`) VALUES
(1, 3, 52, 16, '2018-04-10 18:59:00', 352),
(1, 3, 52, 16, '2018-04-10 19:00:36', 353),
(1, 8, 58, 1, '2018-04-10 18:53:34', 350),
(1, 8, 58, 1, '2018-04-10 18:57:36', 351),
(1, 8, 58, 1, '2018-04-10 19:02:03', 354),
(1, 8, 58, 1, '2018-04-10 19:35:09', 355),
(2, 3, 52, 16, '2018-04-10 18:59:00', 352),
(2, 3, 52, 16, '2018-04-10 19:00:36', 353),
(2, 8, 58, 1, '2018-04-10 18:53:34', 350),
(2, 8, 58, 1, '2018-04-10 19:02:03', 354),
(2, 8, 58, 1, '2018-04-10 19:35:09', 355),
(3, 3, 52, 16, '2018-04-10 18:59:00', 352),
(3, 3, 52, 16, '2018-04-10 19:00:36', 353),
(3, 8, 58, 1, '2018-04-10 19:02:03', 354),
(3, 8, 58, 1, '2018-04-10 19:35:09', 355);

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
  `TB_COLABORADOR_TB_DIVISAO_id_divisao` int(9) NOT NULL,
  `dt_resultado` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `TB_RESULTADO_id_resultado` int(9) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Fazendo dump de dados para tabela `TB_PROJETO_has_TB_COLABORADOR`
--

INSERT INTO `TB_PROJETO_has_TB_COLABORADOR` (`TB_PROJETO_id_projeto`, `TB_COLABORADOR_id_colaborador`, `TB_COLABORADOR_TB_REFERENCIA_FCT_GFE_id_referencia_fct_gfe`, `TB_COLABORADOR_TB_DIVISAO_id_divisao`, `dt_resultado`, `TB_RESULTADO_id_resultado`) VALUES
(1, 3, 52, 16, '2018-04-10 18:59:00', 352),
(1, 8, 58, 1, '2018-04-10 18:53:34', 350),
(1, 8, 58, 1, '2018-04-10 19:02:03', 354),
(2, 3, 52, 16, '2018-04-10 18:59:00', 352),
(2, 8, 58, 1, '2018-04-10 18:57:36', 351),
(2, 8, 58, 1, '2018-04-10 19:02:03', 354),
(3, 3, 52, 16, '2018-04-10 19:00:36', 353),
(3, 8, 58, 1, '2018-04-10 18:53:34', 350),
(4, 8, 58, 1, '2018-04-10 18:57:36', 351),
(5, 3, 52, 16, '2018-04-10 18:59:00', 352),
(7, 8, 58, 1, '2018-04-10 18:57:36', 351),
(8, 3, 52, 16, '2018-04-10 18:59:00', 352),
(9, 8, 58, 1, '2018-04-10 19:02:03', 354),
(10, 8, 58, 1, '2018-04-10 18:57:36', 351),
(15, 8, 58, 1, '2018-04-10 18:57:36', 351),
(15, 8, 58, 1, '2018-04-10 19:02:03', 354),
(15, 8, 58, 1, '2018-04-10 19:35:10', 355),
(20, 8, 58, 1, '2018-04-10 18:57:36', 351),
(20, 8, 58, 1, '2018-04-10 19:02:03', 354);

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
(80, 'Analista', 40, '7663.62', '2016-05-01 03:00:00'),
(81, 'Técnico', 4, '500.00', '2018-03-27 12:07:22');

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
(350, '59.65', '2018-04-10 18:53:34', '32.96', '0.00', 12, 8),
(351, '68.56', '2018-04-10 18:57:36', '24.05', '1.00', 14, 8),
(352, '82.20', '2018-04-10 18:59:00', '-29.54', '0.00', 16, 3),
(353, '82.20', '2018-04-10 19:00:36', '-29.54', '0.00', 16, 3),
(354, '94.95', '2018-04-10 19:02:03', '-2.34', '0.00', 18, 8),
(355, '68.70', '2018-04-10 19:35:09', '28.08', '0.00', 13, 8);

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
(9, 'Desenvolvimento', 'Ckan', 'Linguagem Ckan.'),
(10, 'Design', 'UX', 'Experiência em UX Design.');

-- --------------------------------------------------------

--
-- Estrutura para tabela `TB_TECNOLOGIA_has_TB_COLABORADOR`
--

CREATE TABLE `TB_TECNOLOGIA_has_TB_COLABORADOR` (
  `TB_TECNOLOGIA_id_tecnologia` int(9) NOT NULL,
  `TB_COLABORADOR_id_colaborador` int(9) NOT NULL,
  `TB_COLABORADOR_TB_REFERENCIA_FCT_GFE_id_referencia_fct_gfe` int(9) NOT NULL,
  `TB_COLABORADOR_TB_DIVISAO_id_divisao` int(9) NOT NULL,
  `dt_resultado` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `TB_RESULTADO_id_resultado` int(9) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Fazendo dump de dados para tabela `TB_TECNOLOGIA_has_TB_COLABORADOR`
--

INSERT INTO `TB_TECNOLOGIA_has_TB_COLABORADOR` (`TB_TECNOLOGIA_id_tecnologia`, `TB_COLABORADOR_id_colaborador`, `TB_COLABORADOR_TB_REFERENCIA_FCT_GFE_id_referencia_fct_gfe`, `TB_COLABORADOR_TB_DIVISAO_id_divisao`, `dt_resultado`, `TB_RESULTADO_id_resultado`) VALUES
(3, 3, 52, 16, '2018-04-10 18:59:00', 352),
(3, 3, 52, 16, '2018-04-10 19:00:36', 353),
(3, 8, 58, 1, '2018-04-10 18:53:34', 350),
(3, 8, 58, 1, '2018-04-10 18:57:36', 351),
(3, 8, 58, 1, '2018-04-10 19:02:03', 354),
(3, 8, 58, 1, '2018-04-10 19:35:10', 355),
(4, 3, 52, 16, '2018-04-10 18:59:00', 352),
(4, 3, 52, 16, '2018-04-10 19:00:36', 353),
(4, 8, 58, 1, '2018-04-10 18:53:34', 350),
(4, 8, 58, 1, '2018-04-10 19:02:03', 354),
(4, 8, 58, 1, '2018-04-10 19:35:10', 355),
(5, 3, 52, 16, '2018-04-10 18:59:00', 352),
(5, 3, 52, 16, '2018-04-10 19:00:36', 353),
(5, 8, 58, 1, '2018-04-10 19:02:03', 354),
(5, 8, 58, 1, '2018-04-10 19:35:10', 355),
(6, 3, 52, 16, '2018-04-10 18:59:00', 352),
(6, 3, 52, 16, '2018-04-10 19:00:36', 353),
(6, 8, 58, 1, '2018-04-10 19:02:03', 354),
(6, 8, 58, 1, '2018-04-10 19:35:10', 355),
(7, 3, 52, 16, '2018-04-10 18:59:00', 352),
(7, 3, 52, 16, '2018-04-10 19:00:36', 353),
(7, 8, 58, 1, '2018-04-10 19:02:03', 354),
(7, 8, 58, 1, '2018-04-10 19:35:10', 355),
(8, 3, 52, 16, '2018-04-10 18:59:00', 352),
(8, 3, 52, 16, '2018-04-10 19:00:36', 353),
(8, 8, 58, 1, '2018-04-10 19:02:03', 354),
(8, 8, 58, 1, '2018-04-10 19:35:10', 355);

-- --------------------------------------------------------

--
-- Estrutura para tabela `TB_TECNOLOGIA_has_TB_PROJETO`
--

CREATE TABLE `TB_TECNOLOGIA_has_TB_PROJETO` (
  `TB_TECNOLOGIA_id_tecnologia` int(9) NOT NULL,
  `TB_PROJETO_id_projeto` int(9) NOT NULL,
  `dt_resultado` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `TB_RESULTADO_id_resultado` int(9) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura para tabela `TB_VALORES`
--

CREATE TABLE `TB_VALORES` (
  `ID_VALORES` int(9) NOT NULL
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
-- Estrutura stand-in para view `VW_ATRIBUTO_PAPEL`
-- (Veja abaixo para a visão atual)
--
CREATE TABLE `VW_ATRIBUTO_PAPEL` (
`idAtributo` int(9)
,`letra` varchar(1)
,`descricao` text
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
,`TB_COLABORADOR_id_colaborador` int(9)
,`id_referencia_fct_gfe` int(9)
,`referencia_fct_gfe_pontuacao` int(9)
,`no_colaborador` varchar(50)
,`faixa` int(9)
,`sigla_divisao` varchar(5)
,`fct_atual` varchar(40)
,`fct_ideal` varchar(40)
);

-- --------------------------------------------------------

--
-- Estrutura stand-in para view `VW_AVALIACAO_ATRIBUTO`
-- (Veja abaixo para a visão atual)
--
CREATE TABLE `VW_AVALIACAO_ATRIBUTO` (
`id_resultado` int(9)
,`letra_atributo` varchar(1)
,`descricao_atributo` text
,`class_abrangencia_atributo` int(2)
,`nome_abrangencia_atributo` varchar(50)
,`descricao_abrangencia_atributo` text
,`class_complexidade_atributo` int(2)
,`nome_complexidade_atributo` varchar(50)
,`descricao_complexidade_atributo` text
,`class_impacto_atributo` int(1)
,`nome_impacto_atributo` varchar(50)
,`descricao_impacto_atributo` text
);

-- --------------------------------------------------------

--
-- Estrutura stand-in para view `VW_AVALIACAO_DADOS_BASICOS`
-- (Veja abaixo para a visão atual)
--
CREATE TABLE `VW_AVALIACAO_DADOS_BASICOS` (
`id_resultado` int(9)
,`id_colaborador` int(9)
,`nome` varchar(50)
,`matricula` bigint(10)
,`sigla` varchar(5)
,`dt_avaliacao` varchar(10)
,`pontuacao` decimal(6,2)
,`ajuste` decimal(5,2)
,`ociosidade` decimal(9,2)
,`referencia_fct_atual` varchar(40)
);

-- --------------------------------------------------------

--
-- Estrutura stand-in para view `VW_AVALIACAO_PAPEL`
-- (Veja abaixo para a visão atual)
--
CREATE TABLE `VW_AVALIACAO_PAPEL` (
`id_resultado` int(9)
,`nome_papel` varchar(50)
);

-- --------------------------------------------------------

--
-- Estrutura stand-in para view `VW_AVALIACAO_PROJETO`
-- (Veja abaixo para a visão atual)
--
CREATE TABLE `VW_AVALIACAO_PROJETO` (
`id_resultado` int(9)
,`descricao_projeto` text
,`class_abrangencia_projeto` int(2)
,`nome_abrangencia_projeto` varchar(50)
,`class_complexidade_projeto` int(2)
,`nome_complexidade_projeto` varchar(50)
,`class_impacto_projeto` int(1)
,`nome_impacto_projeto` varchar(50)
);

-- --------------------------------------------------------

--
-- Estrutura stand-in para view `VW_AVALIACAO_TECNOLOGIA`
-- (Veja abaixo para a visão atual)
--
CREATE TABLE `VW_AVALIACAO_TECNOLOGIA` (
`id_resultado` int(9)
,`nome_tecnologia` varchar(20)
);

-- --------------------------------------------------------

--
-- Estrutura stand-in para view `VW_BUSCA_ATRIBUTO`
-- (Veja abaixo para a visão atual)
--
CREATE TABLE `VW_BUSCA_ATRIBUTO` (
`id_atributo` int(9)
,`letra` varchar(1)
,`id_abrangencia` int(9)
,`id_complexidade` int(9)
,`id_impacto` int(9)
,`classificacaoAbrangencia` int(2)
,`classificacaoComplexidade` int(2)
,`classificacaoImpacto` int(1)
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
,`id_referencia_fct_gfe` int(9)
,`valorReferenciaFct` decimal(10,2)
,`cargo` varchar(8)
,`sigla` varchar(5)
,`ref_fct_atual` bigint(11)
,`pontuacao_inicial` decimal(10,2)
,`ref_pontuacao_fct` bigint(11)
,`valorFctInicial` decimal(10,2)
);

-- --------------------------------------------------------

--
-- Estrutura stand-in para view `VW_DETALHES_AVALIACAO`
-- (Veja abaixo para a visão atual)
--
CREATE TABLE `VW_DETALHES_AVALIACAO` (
`id_resultado` int(9)
,`id_colaborador` int(9)
,`nome` varchar(50)
,`matricula` bigint(10)
,`sigla` varchar(5)
,`dt_avaliacao` varchar(10)
,`nome_papel` varchar(50)
,`nome_tecnologia` varchar(20)
,`letra_atributo` varchar(1)
,`descricao_atributo` text
,`class_abrangencia_atributo` int(2)
,`nome_abrangencia_atributo` varchar(50)
,`descricao_abrangencia_atributo` text
,`class_complexidade_atributo` int(2)
,`nome_complexidade_atributo` varchar(50)
,`descricao_complexidade_atributo` text
,`class_impacto_atributo` int(1)
,`nome_impacto_atributo` varchar(50)
,`descricao_impacto_atributo` text
,`descricao_projeto` text
,`class_abrangencia_projeto` int(2)
,`nome_abrangencia_projeto` varchar(50)
,`class_complexidade_projeto` int(2)
,`nome_complexidade_projeto` varchar(50)
,`class_impacto_projeto` int(1)
,`nome_impacto_projeto` varchar(50)
,`pontuacao` decimal(6,2)
,`ajuste` decimal(5,2)
,`ociosidade` decimal(9,2)
,`referencia_fct_atual` varchar(40)
,`tecnologias` text
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
,`valor` decimal(10,2)
,`pontuacao_minima` decimal(6,2)
,`pontuacao_maxima` decimal(6,2)
,`qtde_faixas` int(2)
,`dt_registro` varchar(10)
,`referencia_fct` bigint(11)
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
,`qtde_pessoas` bigint(21)
,`valor_rateio_pessoa` decimal(10,2)
,`percentual` decimal(5,2)
,`TB_REFERENCIA_FCT_GFE_id_referencia_fct_gfe` int(9)
);

-- --------------------------------------------------------

--
-- Estrutura stand-in para view `VW_PAPEL`
-- (Veja abaixo para a visão atual)
--
CREATE TABLE `VW_PAPEL` (
`id_papel` int(9)
,`tipo` varchar(50)
,`nome` varchar(50)
,`descricao` text
,`possuiAtributo` bigint(11)
);

-- --------------------------------------------------------

--
-- Estrutura stand-in para view `VW_PAPEL_ATRIBUTO`
-- (Veja abaixo para a visão atual)
--
CREATE TABLE `VW_PAPEL_ATRIBUTO` (
`id_atributo` int(9)
,`TB_PAPEL_id_papel` int(9)
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
-- Estrutura para view `VW_ATRIBUTO_PAPEL`
--
DROP TABLE IF EXISTS `VW_ATRIBUTO_PAPEL`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `VW_ATRIBUTO_PAPEL`  AS  select `tb0`.`id_atributo` AS `idAtributo`,`tb0`.`letra` AS `letra`,`tb0`.`descricao` AS `descricao` from `TB_ATRIBUTO` `tb0` group by `tb0`.`letra` order by `tb0`.`letra` ;

-- --------------------------------------------------------

--
-- Estrutura para view `VW_AVALIACAO`
--
DROP TABLE IF EXISTS `VW_AVALIACAO`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `VW_AVALIACAO`  AS  select distinct `tba`.`id_resultado` AS `id_resultado`,`tba`.`pontuacao` AS `pontuacao`,date_format(`tba`.`dt_resultado`,'%d/%m/%Y') AS `dt_resultado`,`tba`.`ajuste` AS `ajuste`,`tba`.`ociosidade` AS `ociosidade`,`clb`.`id_colaborador` AS `TB_COLABORADOR_id_colaborador`,`clb`.`TB_REFERENCIA_FCT_GFE_id_referencia_fct_gfe` AS `id_referencia_fct_gfe`,`tba`.`referencia_fct_gfe_pontuacao` AS `referencia_fct_gfe_pontuacao`,`clb`.`nome` AS `no_colaborador`,`clb`.`TB_FAIXA_id_faixa` AS `faixa`,(select `dv`.`sigla` from `TB_DIVISAO` `dv` where (`dv`.`id_divisao` = `clb`.`TB_DIVISAO_id_divisao`)) AS `sigla_divisao`,(select concat(`TB_REFERENCIA_FCT_GFE`.`num_referencia`,' - ',`TB_REFERENCIA_FCT_GFE`.`cargo`,' (R$ ',`TB_REFERENCIA_FCT_GFE`.`valor_referencia`,')') AS `fctAtual` from `TB_REFERENCIA_FCT_GFE` where (`TB_REFERENCIA_FCT_GFE`.`id_referencia_fct_gfe` = `clb`.`TB_REFERENCIA_FCT_GFE_id_referencia_fct_gfe`)) AS `fct_atual`,(select concat(`TB_REFERENCIA_FCT_GFE`.`num_referencia`,' - ',`TB_REFERENCIA_FCT_GFE`.`cargo`,' (R$ ',`TB_REFERENCIA_FCT_GFE`.`valor_referencia`,')') AS `fctIdeal` from `TB_REFERENCIA_FCT_GFE` where ((`TB_REFERENCIA_FCT_GFE`.`num_referencia` = `tba`.`referencia_fct_gfe_pontuacao`) and (`TB_REFERENCIA_FCT_GFE`.`cargo` = (select `TB_REFERENCIA_FCT_GFE`.`cargo` from `TB_REFERENCIA_FCT_GFE` where (`TB_REFERENCIA_FCT_GFE`.`id_referencia_fct_gfe` = `clb`.`TB_REFERENCIA_FCT_GFE_id_referencia_fct_gfe`))))) AS `fct_ideal` from ((`TB_RESULTADO` `tba` join `TB_COLABORADOR` `clb`) join `TB_FAIXA` `tbf`) where (`clb`.`id_colaborador` = `tba`.`TB_COLABORADOR_id_colaborador`) order by `clb`.`nome`,`tba`.`dt_resultado` ;

-- --------------------------------------------------------

--
-- Estrutura para view `VW_AVALIACAO_ATRIBUTO`
--
DROP TABLE IF EXISTS `VW_AVALIACAO_ATRIBUTO`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `VW_AVALIACAO_ATRIBUTO`  AS  select `tbR`.`id_resultado` AS `id_resultado`,`tbA`.`letra` AS `letra_atributo`,`tbA`.`descricao` AS `descricao_atributo`,`tbAb`.`classificacao` AS `class_abrangencia_atributo`,`tbAb`.`nome` AS `nome_abrangencia_atributo`,`tbAb`.`descricao` AS `descricao_abrangencia_atributo`,`tbCo`.`classificacao` AS `class_complexidade_atributo`,`tbCo`.`nome` AS `nome_complexidade_atributo`,`tbCo`.`descricao` AS `descricao_complexidade_atributo`,`tbIm`.`classificacao` AS `class_impacto_atributo`,`tbIm`.`nome` AS `nome_impacto_atributo`,`tbIm`.`descricao` AS `descricao_impacto_atributo` from ((((((`TB_RESULTADO` `tbR` join `TB_ATRIBUTO` `tbA`) join `TB_COLABORADOR` `tbC`) join `TB_ABRANGENCIA` `tbAb`) join `TB_COMPLEXIDADE` `tbCo`) join `TB_IMPACTO` `tbIm`) join `TB_COLABORADOR_has_TB_ATRIBUTO` `tbCA`) where ((`tbR`.`id_resultado` = `tbCA`.`TB_RESULTADO_id_resultado`) and (`tbCA`.`TB_COLABORADOR_id_colaborador` = `tbC`.`id_colaborador`) and (`tbCA`.`TB_COLABORADOR_id_colaborador` = `tbA`.`id_atributo`) and (`tbR`.`TB_COLABORADOR_id_colaborador` = `tbC`.`id_colaborador`) and (`tbA`.`TB_ABRANGENCIA_id_abrangencia` = `tbAb`.`id_abrangencia`) and (`tbA`.`TB_COMPLEXIDADE_id_complexidade` = `tbCo`.`id_complexidade`) and (`tbA`.`TB_IMPACTO_id_impacto` = `tbIm`.`id_impacto`)) ;

-- --------------------------------------------------------

--
-- Estrutura para view `VW_AVALIACAO_DADOS_BASICOS`
--
DROP TABLE IF EXISTS `VW_AVALIACAO_DADOS_BASICOS`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `VW_AVALIACAO_DADOS_BASICOS`  AS  select `tbR`.`id_resultado` AS `id_resultado`,`tbC`.`id_colaborador` AS `id_colaborador`,`tbC`.`nome` AS `nome`,`tbC`.`matricula` AS `matricula`,`tbD`.`sigla` AS `sigla`,date_format((select max(`TB_RESULTADO`.`dt_resultado`) from `TB_RESULTADO` where (`TB_RESULTADO`.`TB_COLABORADOR_id_colaborador` = `tbC`.`id_colaborador`)),'%d/%m/%Y') AS `dt_avaliacao`,`tbR`.`pontuacao` AS `pontuacao`,`tbR`.`ajuste` AS `ajuste`,`tbR`.`ociosidade` AS `ociosidade`,concat(`tbF`.`num_referencia`,' - ',`tbF`.`cargo`,' (R$ ',`tbF`.`valor_referencia`,')') AS `referencia_fct_atual` from (((`TB_RESULTADO` `tbR` join `TB_COLABORADOR` `tbC`) join `TB_DIVISAO` `tbD`) join `TB_REFERENCIA_FCT_GFE` `tbF`) where ((`tbR`.`TB_COLABORADOR_id_colaborador` = `tbC`.`id_colaborador`) and (`tbF`.`id_referencia_fct_gfe` = `tbC`.`TB_REFERENCIA_FCT_GFE_id_referencia_fct_gfe`) and (`tbD`.`id_divisao` = `tbC`.`TB_DIVISAO_id_divisao`)) ;

-- --------------------------------------------------------

--
-- Estrutura para view `VW_AVALIACAO_PAPEL`
--
DROP TABLE IF EXISTS `VW_AVALIACAO_PAPEL`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `VW_AVALIACAO_PAPEL`  AS  select `tbR`.`id_resultado` AS `id_resultado`,`tbP`.`nome` AS `nome_papel` from (((`TB_RESULTADO` `tbR` join `TB_PAPEL` `tbP`) join `TB_PAPEL_has_TB_COLABORADOR` `tbPC`) join `TB_COLABORADOR` `tbC`) where ((`tbR`.`id_resultado` = `tbPC`.`TB_RESULTADO_id_resultado`) and (`tbPC`.`TB_COLABORADOR_id_colaborador` = `tbC`.`id_colaborador`) and (`tbR`.`TB_COLABORADOR_id_colaborador` = `tbC`.`id_colaborador`) and (`tbP`.`id_papel` = `tbPC`.`TB_PAPEL_id_papel`)) ;

-- --------------------------------------------------------

--
-- Estrutura para view `VW_AVALIACAO_PROJETO`
--
DROP TABLE IF EXISTS `VW_AVALIACAO_PROJETO`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `VW_AVALIACAO_PROJETO`  AS  select `tbR`.`id_resultado` AS `id_resultado`,`tbP`.`descricao` AS `descricao_projeto`,`tbAb`.`classificacao` AS `class_abrangencia_projeto`,`tbAb`.`nome` AS `nome_abrangencia_projeto`,`tbCo`.`classificacao` AS `class_complexidade_projeto`,`tbCo`.`nome` AS `nome_complexidade_projeto`,`tbIm`.`classificacao` AS `class_impacto_projeto`,`tbIm`.`nome` AS `nome_impacto_projeto` from (((((((((`TB_RESULTADO` `tbR` join `TB_PROJETO` `tbP`) join `TB_ABRANGENCIA` `tbAb`) join `TB_COMPLEXIDADE` `tbCo`) join `TB_IMPACTO` `tbIm`) join `TB_ATRIBUTO` `tbA`) join `TB_COLABORADOR` `tbC`) join `TB_ATRIBUTO_has_TB_PROJETO` `tbAP`) join `TB_PROJETO_has_TB_COLABORADOR` `tbPC`) join `TB_COLABORADOR_has_TB_ATRIBUTO` `tbCA`) where ((`tbR`.`id_resultado` = `tbAP`.`TB_RESULTADO_id_resultado`) and (`tbR`.`id_resultado` = `tbPC`.`TB_RESULTADO_id_resultado`) and (`tbA`.`id_atributo` = `tbAP`.`TB_ATRIBUTO_id_atributo`) and (`tbCA`.`TB_COLABORADOR_id_colaborador` = `tbC`.`id_colaborador`) and (`tbCA`.`TB_COLABORADOR_id_colaborador` = `tbA`.`id_atributo`) and (`tbR`.`TB_COLABORADOR_id_colaborador` = `tbC`.`id_colaborador`) and (`tbA`.`TB_ABRANGENCIA_id_abrangencia` = `tbAb`.`id_abrangencia`) and (`tbA`.`TB_COMPLEXIDADE_id_complexidade` = `tbCo`.`id_complexidade`) and (`tbA`.`TB_IMPACTO_id_impacto` = `tbIm`.`id_impacto`)) ;

-- --------------------------------------------------------

--
-- Estrutura para view `VW_AVALIACAO_TECNOLOGIA`
--
DROP TABLE IF EXISTS `VW_AVALIACAO_TECNOLOGIA`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `VW_AVALIACAO_TECNOLOGIA`  AS  select `tbR`.`id_resultado` AS `id_resultado`,`tbT`.`nome` AS `nome_tecnologia` from (((`TB_RESULTADO` `tbR` join `TB_TECNOLOGIA` `tbT`) join `TB_TECNOLOGIA_has_TB_COLABORADOR` `tbTC`) join `TB_COLABORADOR` `tbC`) where ((`tbR`.`id_resultado` = `tbTC`.`TB_RESULTADO_id_resultado`) and (`tbTC`.`TB_COLABORADOR_id_colaborador` = `tbC`.`id_colaborador`) and (`tbR`.`TB_COLABORADOR_id_colaborador` = `tbC`.`id_colaborador`) and (`tbT`.`id_tecnologia` = `tbTC`.`TB_TECNOLOGIA_id_tecnologia`)) ;

-- --------------------------------------------------------

--
-- Estrutura para view `VW_BUSCA_ATRIBUTO`
--
DROP TABLE IF EXISTS `VW_BUSCA_ATRIBUTO`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `VW_BUSCA_ATRIBUTO`  AS  select `tba`.`id_atributo` AS `id_atributo`,`tba`.`letra` AS `letra`,`tbab`.`id_abrangencia` AS `id_abrangencia`,`tbco`.`id_complexidade` AS `id_complexidade`,`tbim`.`id_impacto` AS `id_impacto`,`tbab`.`classificacao` AS `classificacaoAbrangencia`,`tbco`.`classificacao` AS `classificacaoComplexidade`,`tbim`.`classificacao` AS `classificacaoImpacto` from (((`TB_ATRIBUTO` `tba` join `TB_ABRANGENCIA` `tbab`) join `TB_COMPLEXIDADE` `tbco`) join `TB_IMPACTO` `tbim`) where ((`tba`.`TB_ABRANGENCIA_id_abrangencia` = `tbab`.`id_abrangencia`) and (`tba`.`TB_COMPLEXIDADE_id_complexidade` = `tbco`.`id_complexidade`) and (`tba`.`TB_IMPACTO_id_impacto` = `tbim`.`id_impacto`)) ;

-- --------------------------------------------------------

--
-- Estrutura para view `VW_COLABORADOR`
--
DROP TABLE IF EXISTS `VW_COLABORADOR`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `VW_COLABORADOR`  AS  select `tb0`.`id_colaborador` AS `idColaborador`,`tb0`.`nome` AS `nome`,`tb0`.`matricula` AS `matricula`,`tb0`.`telefone` AS `telefone`,`tb0`.`especialidade` AS `especialidade`,concat('R$ ',`tb0`.`salario`) AS `salario`,concat('R$ ',`tb0`.`percentual_salario`) AS `percentual_salario`,concat(`tb1`.`num_referencia`,' - ',`tb1`.`cargo`,' (R$ ',`tb1`.`valor_referencia`,')') AS `referenciaFct`,`tb1`.`id_referencia_fct_gfe` AS `id_referencia_fct_gfe`,`tb1`.`valor_referencia` AS `valorReferenciaFct`,`tb1`.`cargo` AS `cargo`,`tb2`.`sigla` AS `sigla`,(select `tb1`.`num_referencia` from (`TB_REFERENCIA_FCT_GFE` `tb1` join `TB_COLABORADOR` `tb2`) where ((`tb1`.`id_referencia_fct_gfe` = `tb2`.`TB_REFERENCIA_FCT_GFE_id_referencia_fct_gfe`) and (`tb2`.`id_colaborador` = `tb0`.`id_colaborador`))) AS `ref_fct_atual`,(select min(`TB_FAIXA`.`limite_inferior`) from `TB_FAIXA`) AS `pontuacao_inicial`,(select `tb1`.`num_referencia` from (`TB_REFERENCIA_FCT_GFE` `tb1` join `TB_FAIXA` `tb2`) where ((`tb1`.`id_referencia_fct_gfe` = `tb2`.`TB_REFERENCIA_FCT_GFE_id_referencia_fct_gfe`) and (`tb2`.`limite_inferior` = (select min(`TB_FAIXA`.`limite_inferior`) from `TB_FAIXA`)))) AS `ref_pontuacao_fct`,(select `tb1`.`valor_referencia` from (`TB_REFERENCIA_FCT_GFE` `tb1` join `TB_FAIXA` `tb2`) where ((`tb1`.`id_referencia_fct_gfe` = `tb2`.`TB_REFERENCIA_FCT_GFE_id_referencia_fct_gfe`) and (`tb2`.`limite_inferior` = (select min(`TB_FAIXA`.`limite_inferior`) from `TB_FAIXA`)))) AS `valorFctInicial` from ((`TB_COLABORADOR` `tb0` join `TB_REFERENCIA_FCT_GFE` `tb1`) join `TB_DIVISAO` `tb2`) where ((`tb0`.`TB_REFERENCIA_FCT_GFE_id_referencia_fct_gfe` = `tb1`.`id_referencia_fct_gfe`) and (`tb0`.`TB_DIVISAO_id_divisao` = `tb2`.`id_divisao`)) order by `tb0`.`nome` ;

-- --------------------------------------------------------

--
-- Estrutura para view `VW_DETALHES_AVALIACAO`
--
DROP TABLE IF EXISTS `VW_DETALHES_AVALIACAO`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `VW_DETALHES_AVALIACAO`  AS  select `tbR`.`id_resultado` AS `id_resultado`,`tbC`.`id_colaborador` AS `id_colaborador`,`tbC`.`nome` AS `nome`,`tbC`.`matricula` AS `matricula`,`tbD`.`sigla` AS `sigla`,date_format((select max(`TB_RESULTADO`.`dt_resultado`) from `TB_RESULTADO` where (`TB_RESULTADO`.`TB_COLABORADOR_id_colaborador` = `tbC`.`id_colaborador`)),'%d/%m/%Y') AS `dt_avaliacao`,`tbP`.`nome` AS `nome_papel`,`tbT`.`nome` AS `nome_tecnologia`,`tbA`.`letra` AS `letra_atributo`,`tbA`.`descricao` AS `descricao_atributo`,`tbAb`.`classificacao` AS `class_abrangencia_atributo`,`tbAb`.`nome` AS `nome_abrangencia_atributo`,`tbAb`.`descricao` AS `descricao_abrangencia_atributo`,`tbCo`.`classificacao` AS `class_complexidade_atributo`,`tbCo`.`nome` AS `nome_complexidade_atributo`,`tbCo`.`descricao` AS `descricao_complexidade_atributo`,`tbIm`.`classificacao` AS `class_impacto_atributo`,`tbIm`.`nome` AS `nome_impacto_atributo`,`tbIm`.`descricao` AS `descricao_impacto_atributo`,`tbP`.`descricao` AS `descricao_projeto`,`tbAb`.`classificacao` AS `class_abrangencia_projeto`,`tbAb`.`nome` AS `nome_abrangencia_projeto`,`tbCo`.`classificacao` AS `class_complexidade_projeto`,`tbCo`.`nome` AS `nome_complexidade_projeto`,`tbIm`.`classificacao` AS `class_impacto_projeto`,`tbIm`.`nome` AS `nome_impacto_projeto`,`tbR`.`pontuacao` AS `pontuacao`,`tbR`.`ajuste` AS `ajuste`,`tbR`.`ociosidade` AS `ociosidade`,concat(`tbF`.`num_referencia`,' - ',`tbF`.`cargo`,' (R$ ',`tbF`.`valor_referencia`,')') AS `referencia_fct_atual`,(select group_concat(distinct concat((select `TB_TECNOLOGIA`.`nome` from `TB_TECNOLOGIA` where (`TB_TECNOLOGIA`.`id_tecnologia` = `tbTC`.`TB_TECNOLOGIA_id_tecnologia`))) separator ',') from `TB_TECNOLOGIA_has_TB_COLABORADOR` `tbTC` where (`tbTC`.`TB_RESULTADO_id_resultado` = `tbR`.`id_resultado`)) AS `tecnologias` from (((((((((((((((`TB_COLABORADOR` `tbC` join `TB_RESULTADO` `tbR`) join `TB_DIVISAO` `tbD`) join `TB_REFERENCIA_FCT_GFE` `tbF`) join `TB_PAPEL` `tbP`) join `TB_PAPEL_has_TB_COLABORADOR` `tbPC`) join `TB_TECNOLOGIA` `tbT`) join `TB_TECNOLOGIA_has_TB_COLABORADOR` `tbTC`) join `TB_ATRIBUTO` `tbA`) join `TB_ABRANGENCIA` `tbAb`) join `TB_COMPLEXIDADE` `tbCo`) join `TB_IMPACTO` `tbIm`) join `TB_COLABORADOR_has_TB_ATRIBUTO` `tbCA`) join `TB_PROJETO` `tbPr`) join `TB_ATRIBUTO_has_TB_PROJETO` `tbAP`) join `TB_PROJETO_has_TB_COLABORADOR` `tbPrC`) where ((`tbD`.`id_divisao` = `tbC`.`TB_DIVISAO_id_divisao`) and (`tbR`.`TB_COLABORADOR_id_colaborador` = `tbC`.`id_colaborador`) and (`tbR`.`id_resultado` = `tbPC`.`TB_RESULTADO_id_resultado`) and (`tbR`.`id_resultado` = `tbTC`.`TB_RESULTADO_id_resultado`) and (`tbR`.`id_resultado` = `tbCA`.`TB_RESULTADO_id_resultado`) and (`tbR`.`id_resultado` = `tbAP`.`TB_RESULTADO_id_resultado`) and (`tbR`.`id_resultado` = `tbPrC`.`TB_RESULTADO_id_resultado`) and (`tbF`.`id_referencia_fct_gfe` = `tbC`.`TB_REFERENCIA_FCT_GFE_id_referencia_fct_gfe`) and (`tbPC`.`TB_COLABORADOR_id_colaborador` = `tbC`.`id_colaborador`) and (`tbP`.`id_papel` = `tbPC`.`TB_PAPEL_id_papel`) and (`tbTC`.`TB_COLABORADOR_id_colaborador` = `tbC`.`id_colaborador`) and (`tbT`.`id_tecnologia` = `tbTC`.`TB_TECNOLOGIA_id_tecnologia`) and (`tbA`.`TB_ABRANGENCIA_id_abrangencia` = `tbAb`.`id_abrangencia`) and (`tbA`.`TB_COMPLEXIDADE_id_complexidade` = `tbCo`.`id_complexidade`) and (`tbA`.`TB_IMPACTO_id_impacto` = `tbIm`.`id_impacto`) and (`tbCA`.`TB_ATRIBUTO_id_atributo` = `tbA`.`id_atributo`) and (`tbCA`.`TB_COLABORADOR_id_colaborador` = `tbC`.`id_colaborador`) and (`tbPr`.`id_projeto` = `tbAP`.`TB_PROJETO_id_projeto`) and (`tbPrC`.`TB_PROJETO_id_projeto` = `tbAP`.`TB_PROJETO_id_projeto`) and (`tbPrC`.`TB_COLABORADOR_id_colaborador` = `tbC`.`id_colaborador`)) order by `tbC`.`nome` ;

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

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `VW_DISTRIBUICAO`  AS  select `TB1`.`id_distribuicao` AS `id_distribuicao`,`TB1`.`valor` AS `valor`,(select distinct min(`TB_RESULTADO`.`pontuacao`) from `TB_RESULTADO`) AS `pontuacao_minima`,(select distinct max(`TB_RESULTADO`.`pontuacao`) from `TB_RESULTADO`) AS `pontuacao_maxima`,`TB1`.`qtde_faixas` AS `qtde_faixas`,date_format(`TB1`.`dt_registro`,'%d/%m/%Y') AS `dt_registro`,(select min(`TB_FAIXA`.`TB_REFERENCIA_FCT_GFE_id_referencia_fct_gfe`) from `TB_FAIXA`) AS `referencia_fct` from `TB_DISTRIBUICAO` `TB1` ;

-- --------------------------------------------------------

--
-- Estrutura para view `VW_DISTRIBUICAO_FAIXA`
--
DROP TABLE IF EXISTS `VW_DISTRIBUICAO_FAIXA`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `VW_DISTRIBUICAO_FAIXA`  AS  select `tb1`.`id_faixa` AS `id_faixa`,`tb1`.`limite_inferior` AS `limite_inferior`,`tb1`.`limite_superior` AS `limite_superior`,`tb1`.`pontuacao_referencia` AS `pontuacao_referencia`,(select count(`tb2`.`id_resultado`) from (`TB_RESULTADO` `tb2` join `TB_COLABORADOR` `tb3`) where ((`tb2`.`TB_COLABORADOR_id_colaborador` = `tb3`.`id_colaborador`) and (`tb2`.`pontuacao` >= `tb1`.`limite_inferior`) and (`tb2`.`pontuacao` <= `tb1`.`limite_superior`) and (`tb2`.`dt_resultado` = (select max(`tb4`.`dt_resultado`) from `TB_RESULTADO` `tb4` where (`tb4`.`TB_COLABORADOR_id_colaborador` = `tb3`.`id_colaborador`))))) AS `qtde_pessoas`,`tb1`.`valor_rateio_pessoa` AS `valor_rateio_pessoa`,`tb1`.`percentual` AS `percentual`,`tb1`.`TB_REFERENCIA_FCT_GFE_id_referencia_fct_gfe` AS `TB_REFERENCIA_FCT_GFE_id_referencia_fct_gfe` from `TB_FAIXA` `tb1` group by `tb1`.`limite_inferior`,`tb1`.`limite_superior` order by `tb1`.`limite_inferior` ;

-- --------------------------------------------------------

--
-- Estrutura para view `VW_PAPEL`
--
DROP TABLE IF EXISTS `VW_PAPEL`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `VW_PAPEL`  AS  select `tb0`.`id_papel` AS `id_papel`,`tb0`.`tipo` AS `tipo`,`tb0`.`nome` AS `nome`,`tb0`.`descricao` AS `descricao`,(select `tb1`.`TB_PAPEL_id_papel` from `TB_ATRIBUTO_has_TB_PAPEL` `tb1` where (`tb1`.`TB_PAPEL_id_papel` = `tb0`.`id_papel`) group by `tb1`.`TB_PAPEL_id_papel`) AS `possuiAtributo` from `TB_PAPEL` `tb0` group by `tb0`.`id_papel` order by `tb0`.`id_papel` ;

-- --------------------------------------------------------

--
-- Estrutura para view `VW_PAPEL_ATRIBUTO`
--
DROP TABLE IF EXISTS `VW_PAPEL_ATRIBUTO`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `VW_PAPEL_ATRIBUTO`  AS  select `TA`.`id_atributo` AS `id_atributo`,`TBA`.`TB_PAPEL_id_papel` AS `TB_PAPEL_id_papel`,`TA`.`letra` AS `letra`,`TA`.`descricao` AS `descricao`,`TB`.`descricao` AS `descricaoAbrangencia1`,(select `TB_ABRANGENCIA`.`descricao` from `TB_ABRANGENCIA` where ((`TB_ABRANGENCIA`.`atributo` = `TA`.`letra`) and (`TB_ABRANGENCIA`.`classificacao` = 2))) AS `descricaoAbrangencia2`,(select `TB_ABRANGENCIA`.`descricao` from `TB_ABRANGENCIA` where ((`TB_ABRANGENCIA`.`atributo` = `TA`.`letra`) and (`TB_ABRANGENCIA`.`classificacao` = 3))) AS `descricaoAbrangencia3`,`TC`.`descricao` AS `descricaoComplexidade1`,(select `TB_COMPLEXIDADE`.`descricao` from `TB_COMPLEXIDADE` where ((`TB_COMPLEXIDADE`.`atributo` = `TA`.`letra`) and (`TB_COMPLEXIDADE`.`classificacao` = 2))) AS `descricaoComplexidade2`,(select `TB_COMPLEXIDADE`.`descricao` from `TB_COMPLEXIDADE` where ((`TB_COMPLEXIDADE`.`atributo` = `TA`.`letra`) and (`TB_COMPLEXIDADE`.`classificacao` = 3))) AS `descricaoComplexidade3`,`TI`.`descricao` AS `descricaoImpacto1`,(select `TB_IMPACTO`.`descricao` from `TB_IMPACTO` where ((`TB_IMPACTO`.`atributo` = `TA`.`letra`) and (`TB_IMPACTO`.`classificacao` = 2))) AS `descricaoImpacto2`,(select `TB_IMPACTO`.`descricao` from `TB_IMPACTO` where ((`TB_IMPACTO`.`atributo` = `TA`.`letra`) and (`TB_IMPACTO`.`classificacao` = 3))) AS `descricaoImpacto3` from (((((`TB_ATRIBUTO_has_TB_PAPEL` `TBA` join `TB_ATRIBUTO` `TA`) join `TB_ABRANGENCIA` `TB`) join `TB_COMPLEXIDADE` `TC`) join `TB_IMPACTO` `TI`) join `TB_PAPEL` `TP`) where ((`TA`.`id_atributo` = `TBA`.`TB_ATRIBUTO_id_atributo`) and (`TA`.`TB_ABRANGENCIA_id_abrangencia` = `TB`.`id_abrangencia`) and (`TA`.`TB_COMPLEXIDADE_id_complexidade` = `TC`.`id_complexidade`) and (`TA`.`TB_IMPACTO_id_impacto` = `TI`.`id_impacto`) and (`TP`.`id_papel` = `TBA`.`TB_PAPEL_id_papel`)) group by `TP`.`nome`,`TA`.`letra` ;

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
  ADD PRIMARY KEY (`TB_ATRIBUTO_id_atributo`,`TB_PAPEL_id_papel`,`dt_resultado`),
  ADD KEY `fk_TB_ATRIBUTO_has_TB_PAPEL_TB_PAPEL1` (`TB_PAPEL_id_papel`),
  ADD KEY `fk_TB_ATRIBUTO_has_TB_PAPEL_TB_ATRIBUTO1` (`TB_ATRIBUTO_id_atributo`);

--
-- Índices de tabela `TB_ATRIBUTO_has_TB_PROJETO`
--
ALTER TABLE `TB_ATRIBUTO_has_TB_PROJETO`
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
  ADD PRIMARY KEY (`TB_COLABORADOR_id_colaborador`,`TB_COLABORADOR_TB_REFERENCIA_FCT_GFE_id_referencia_fct_gfe`,`TB_COLABORADOR_TB_DIVISAO_id_divisao`,`TB_ATRIBUTO_id_atributo`,`TB_ATRIBUTO_TB_ABRANGENCIA_id_abrangencia`,`TB_ATRIBUTO_TB_COMPLEXIDADE_id_complexidade`,`TB_ATRIBUTO_TB_IMPACTO_id_impacto`,`dt_atualizacao`),
  ADD KEY `fk_TB_COLABORADOR_has_TB_ATRIBUTO_TB_ATRIBUTO1` (`TB_ATRIBUTO_id_atributo`,`TB_ATRIBUTO_TB_ABRANGENCIA_id_abrangencia`,`TB_ATRIBUTO_TB_COMPLEXIDADE_id_complexidade`,`TB_ATRIBUTO_TB_IMPACTO_id_impacto`),
  ADD KEY `fk_TB_COLABORADOR_has_TB_ATRIBUTO_TB_COLABORADOR1` (`TB_COLABORADOR_id_colaborador`,`TB_COLABORADOR_TB_REFERENCIA_FCT_GFE_id_referencia_fct_gfe`,`TB_COLABORADOR_TB_DIVISAO_id_divisao`),
  ADD KEY `dt_atualizacao` (`dt_atualizacao`);

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
  ADD PRIMARY KEY (`TB_PAPEL_id_papel`,`TB_COLABORADOR_id_colaborador`,`TB_COLABORADOR_TB_REFERENCIA_FCT_GFE_id_referencia_fct_gfe`,`TB_COLABORADOR_TB_DIVISAO_id_divisao`,`dt_resultado`),
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
  ADD PRIMARY KEY (`TB_PROJETO_id_projeto`,`TB_COLABORADOR_id_colaborador`,`TB_COLABORADOR_TB_REFERENCIA_FCT_GFE_id_referencia_fct_gfe`,`TB_COLABORADOR_TB_DIVISAO_id_divisao`,`dt_resultado`),
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
  ADD PRIMARY KEY (`TB_TECNOLOGIA_id_tecnologia`,`TB_COLABORADOR_id_colaborador`,`TB_COLABORADOR_TB_REFERENCIA_FCT_GFE_id_referencia_fct_gfe`,`TB_COLABORADOR_TB_DIVISAO_id_divisao`,`dt_resultado`),
  ADD KEY `fk_TB_TECNOLOGIA_has_TB_COLABORADOR_TB_COLABORADOR1` (`TB_COLABORADOR_id_colaborador`,`TB_COLABORADOR_TB_REFERENCIA_FCT_GFE_id_referencia_fct_gfe`,`TB_COLABORADOR_TB_DIVISAO_id_divisao`),
  ADD KEY `fk_TB_TECNOLOGIA_has_TB_COLABORADOR_TB_TECNOLOGIA1` (`TB_TECNOLOGIA_id_tecnologia`);

--
-- Índices de tabela `TB_TECNOLOGIA_has_TB_PROJETO`
--
ALTER TABLE `TB_TECNOLOGIA_has_TB_PROJETO`
  ADD PRIMARY KEY (`TB_TECNOLOGIA_id_tecnologia`,`TB_PROJETO_id_projeto`,`dt_resultado`),
  ADD KEY `fk_TB_TECNOLOGIA_has_TB_PROJETO_TB_PROJETO1` (`TB_PROJETO_id_projeto`),
  ADD KEY `fk_TB_TECNOLOGIA_has_TB_PROJETO_TB_TECNOLOGIA1` (`TB_TECNOLOGIA_id_tecnologia`);

--
-- Índices de tabela `TB_VALORES`
--
ALTER TABLE `TB_VALORES`
  ADD PRIMARY KEY (`ID_VALORES`);

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
  MODIFY `id_distribuicao` int(9) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `TB_DIVISAO`
--
ALTER TABLE `TB_DIVISAO`
  MODIFY `id_divisao` int(9) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT de tabela `TB_FAIXA`
--
ALTER TABLE `TB_FAIXA`
  MODIFY `id_faixa` int(9) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de tabela `TB_IMPACTO`
--
ALTER TABLE `TB_IMPACTO`
  MODIFY `id_impacto` int(9) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;

--
-- AUTO_INCREMENT de tabela `TB_PAPEL`
--
ALTER TABLE `TB_PAPEL`
  MODIFY `id_papel` int(9) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

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
  MODIFY `id_referencia_fct_gfe` int(9) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=82;

--
-- AUTO_INCREMENT de tabela `TB_RESULTADO`
--
ALTER TABLE `TB_RESULTADO`
  MODIFY `id_resultado` int(9) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=356;

--
-- AUTO_INCREMENT de tabela `TB_TECNOLOGIA`
--
ALTER TABLE `TB_TECNOLOGIA`
  MODIFY `id_tecnologia` int(9) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de tabela `TB_VALORES`
--
ALTER TABLE `TB_VALORES`
  MODIFY `ID_VALORES` int(9) NOT NULL AUTO_INCREMENT;

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