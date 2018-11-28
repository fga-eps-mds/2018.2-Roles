---
id: doc_arquitetura
title: Documento de Arquitetura
sidebar_label: Documento de Arquitetura
---

# Índice

1. [Introdução](#id1)</br>
1.1. [Finalidade](#id11)</br>
1.2. [Escopo](#id12)</br>
1.3. [Definições, Acrônimos e Abreviações](#id13)</br>

2. [Representação da Arquitetura](#id2)</br>
    [Visão Lógica](#id2a)</br>
 2.1. [Diagrama de relações](#id21)</br>
 2.2. [React/Redux/Microsserviços](#id22)</br>
  2.2.1. [Diagrama React-Native/Redux](#id221)</br>
 2.3. [Diagrama de Pacotes](#id23)</br>
 2.4. [Diagrama de classes](#id24)</br>

3. [Metas e Restrições da Arquitetura](#id3)

4. [Visão de Casos de Uso](#id4)</br>
 4.1. [Casos de uso](#id41)</br>
 4.2. [Diagrama de casos de uso](#id42)</br>

5. [Tamanho e Desempenho](#id5)

6. [Qualidade](#id6)

7. [Referências](#id7)

# 1. <a name='id1'> Introdução </a>

## 1.1. <a name='id11'> Finalidade </a>

Este documento fornece uma visão arquitetural abrangente do sistema, usando diversas visões de arquitetura para representar diferentes aspectos do sistema. Seu objetivo é captar e transmitir as decisões arquiteturais significativas que foram feitas no sistema.

## 1.2. <a name='id12'> Escopo </a>

Este Documento de Arquitetura de Software fornece uma visão geral da arquitetura do Roles.

## 1.3. <a name='id12'> Definições, Acrônimos e Abreviações </a>

  * UnB - Universidade de Brasília;
  * FGA - Faculdade do Gama;
  * App - Aplicativo mobile;
  * iOS - Sistema operacional móvel da Apple Inc;
  * Android - Sistema operacional móvel do Google Inc;
  * SaaS - Software as a Service.

# 2. <a name='id2'> Representação da Arquitetura </a>

Este documento apresenta a arquitetura como duas visões: visão de casos de uso e visão lógica. Outras visões não existem neste documento.

# <a name='id2a'> Visão Lógica </a>

## 2.1. <a name='id21'> Diagrama de relações </a>

O diagrama apresenta cada etapa que será seguido para que o app Roles funcione.

## 2.2. <a name='id22'>React-Native/Redux/Microsserviços </a>

### [React-Native](https://facebook.github.io/react-native/)

O React Native é um projeto desenvolvido pelos engenheiros do Facebook e que consiste em uma série de ferramentas que viabilizam a criação de aplicações móveis nativas para as plataformas iOS e Android, utilizado no desenvolvimento Front-end baseado em JavaScript.

### [Redux](https://redux.js.org/)

O Redux armazena e resgata dados utilizados dentro da aplicação react.
O Redux é composto de três princípios que formam e definem o seu conceito. Eles são:

* Um único ponto de verdade – Todo o estado da aplicação é mantido em apenas um único objeto chamado de Store.
* O estado é imutável – O estado da aplicação é inalterável, a unica maneira de afetá-lo é emitindo uma Action com a mudança.
* Mudanças são feitas apenas por funções puras – Reducers recebem as Actions emitidas e aplicam-nas ao estado. Sempre retornando um novo estado.


### [Python](https://www.python.org/)

Python é uma liguagem de programação de alto nível, utilizada na programação dos microsserviços do back-end do aplicativo.

### 2.2.1. <a name = 'id221'> Diagrama React-Native/Redux </a>

[![Diadrama React-Redux](https://github.com/fga-eps-mds/2018.2-Roles/blob/doc/doc_arquitetura/docs/docs/assets/diagramas/Diagrama1.jpeg?raw=true)](https://fga-eps-mds.github.io/2018.2-Roles/)

## 2.3. <a name = 'id23'> Diagrama de pacotes </a>

[![Diadrama de Pacotes](https://github.com/fga-eps-mds/2018.2-Roles/blob/doc/doc_arquitetura/docs/docs/assets/diagramas/Diagrama2.jpeg?raw=true)](https://fga-eps-mds.github.io/2018.2-Roles/)

## 2.4. <a name = 'id24'> Diagrama de classes </a>

[![Diadrama de Classes](https://github.com/fga-eps-mds/2018.2-Roles/blob/doc/doc_arquitetura/docs/docs/assets/diagramas/Diagrama4.jpeg?raw=true)](https://fga-eps-mds.github.io/2018.2-Roles/)

# 3. <a name='id3'> Metas e Restrições da Arquitetura </a>

 Para o desenvolvimento deste projeto serão utilizadas as seguintes tecnologias:

* [React-native](https://facebook.github.io/react-native/): Utilizado na contrução do aplicativo nativo para Android e iOS;
* [Python](https://www.python.org/): Plataforma utilizada para microsserviços;
* [Docker](https://www.docker.com/): Plataforma de containeres para empacotamento de aplicações;
* [Redux](https://redux.js.org/): Plataforma que armazena e recupera dados dentro da aplicação.

| Restrições |
| --- |
| Ao se conectar com as redes sociais e for ser feita alguma publicação, sempre pedir permissão. |
| Não é aceito nenhum login e nenhuma senha que contenham caracteres especiais (parâmetros pré-definidos). |
| O sistema não pode travar/encerrar o processo com frequência. |
| Mudanças nas necessidades de integração com outros sistemas |


# 4. <a name='id4'> Visão de Casos de Uso </a>

## 4.1. <a name ='id41'> Casos de uso </a>

| Caso de Uso | Motivo da Escolha |
| --- | --- |
| <u>Caso de Uso 1</u> | Cadastro de Eventos (Rolês) |
|  <u>Caso de Uso 2</u> | Confirmar presença |
| <u>Caso de Uso 3</u> | Visualizar Feed com detalhes do rolê |

### 4.2. <a name = 'id42'> Diagrama de casos de uso </a>

[![Diadrama de Casos de uso](https://github.com/fga-eps-mds/2018.2-Roles/blob/doc/doc_arquitetura/docs/docs/assets/diagramas/Diagrama3.jpeg?raw=true)](https://fga-eps-mds.github.io/2018.2-Roles/)


# 5. <a name='id5'> Tamanho e Desempenho </a>

O sistema é desenvolvido em react-native para plataformas móveis Android e iOS, entretanto o sistema deve ser construido com foco no desempenho do aparelho em que será instalado. O software deverá suportar cerca de 3.000 usuários (alunos, professores e eventuais empresas).

# 6. <a name='id6'> Qualidade </a>

|Característica | Descrição | Solução |
| --- | --- | --- |
| <b>Escalabilidade | Índice do potencial de crescimento do negócio.| Adicionar infraestrutura,  modelo <i>SaaS</i>, adicionar recursos |
| <b>Confiabilidade | Software funcionar sem ocorrer interrupções e falhas. | <i>DevOps</i>, Melhoria Contínua |
| <b>Disponibilidade | Manter os serviços disponibilizados  | Escala e resiliência da infraestrutura de rede, Servidores disponíveis |
| <b> Portabilidade | Executar em diferentes arquiteturas | Utilizar react-native  |
| <b>Segurança | Proteção de dados e informações | --- |


# 7. <a name='id7'> Referências </a>

  > Como documentar a Arquitetura de Software:
     http://www.linhadecodigo.com.br/artigo/3343/como-documentar-a-arquitetura-de-software.aspx - Acesso em: 06/09/2018.

  > Build native mobile apps using JavaScript and React: https://facebook.github.io/react-native/ - Acesso em: 07/09/2018.

  > Build, Manage and Secure Your Apps Anywhere. Your Way: https://www.docker.com/ - Acesso em: 07/09/2018.
