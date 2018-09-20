---
id: doc_arquitetura
title: Documento de Arquitetura
sidebar_label: Documento de Arquitetura
---
## Controle de versão

| **Data** | **Versão** | **Descrição** | **Autor** |
| --- | --- | --- | --- |
| 06/09/2018 | 0.1.0 | Template | Henrique Martins |
| 06/09/2018 | 0.2.0 | Construção do tópico 1.1 | Henrique Martins |
| 07/09/2018 | 0.2.1 | Adições nos tópicos 1.2, 1.3 e 1.4 | Henrique Martins |
| 07/09/2018 | 0.2.2 | Adições nos tópicos 1.4 e 3 | Victor Rodrigues |
| 10/09/2018 | 0.3.0 | Adições nos tópicos 3(restriçoes),7,8| Guilherme Leal |
| 10/09/2018 | 0.3.1 | Atualização no sumário, tópico 2 e BUG fixes | Victor Rodrigues |
| 13/09/2018 | 0.4.0 | Revisão de todo o documento | Victor Rodrigues |
| 13/09/2018 | 0.4.1 | Alteração da ordem dos tópicos e BUG fixes | Guilherme Leal |
| 13/09/2018 | 0.4.2 | Correção de erros de português | Henrique Martins |
| 13/09/2018 | 0.4.3 | Revisão de todo o documento | Victor Rodrigues |
| 14/09/2018 | 0.5.0 | Adionado tópico 4 | Guilherme Leal|
| 14/09/2018 | 0.5.1 | Reorganização de tópicos e adionado tópico 6 | Guilherme Leal|
| 18/09/2018 | 0.6.0 | Correção de Bugs do sumário e revisão | Victor Rodrigues |
| 18/09/2018 | 0.7.0 | Índice com links | Victor Rodrigues |
| 20/09/2018 | 0.8.0 | Correção de Bugs e adição aos tópicos 2 e 5 | Henrique Martins |
| 20/09/2018 | 0.8.1 | Correção de erros de sintaxe | Henrique Martins |


# Índice

1. [Introdução](#id1)</br>
1.1. [Finalidade](#id11)</br>
1.2. [Escopo](#id12)</br>
1.3. [Definições, Acrônimos e Abreviações](#id13)</br>

2. [Representação da Arquitetura](#id2)</br>
2.1. [Diagrama de relações](#id21)</br>
2.2. [Diagrama React/Redux/Microsserviços](#id22)</br>

3. [Metas e Restrições da Arquitetura](#id3)

4. [Visão de Casos de Uso](#id4)

5. [Visão Lógica](#id5)

6. [Tamanho e Desempenho](#id6)

7. [Qualidade](#id7)

8. [Referências](#id8)


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

Este documento apresenta a arquitetura como duas visões: visão de casos de uso e visão lógica. Outras visões não existem neste documento. (Inserir modelo usado)

## 2.1. <a name='id21'> Diagrama de relações </a>

***Diagrama aqui***

O diagrama apresenta cada etapa que será seguido para que o app Roles funcione.

## 2.2. <a name='id22'> Diagrama React/Redux/Microsserviços </a>

### [React-native](https://facebook.github.io/react-native/)

O React Native é um projeto desenvolvido pelos engenheiros do Facebook e que consiste em uma série de ferramentas que viabilizam a criação de aplicações móveis nativas para as plataformas iOS e Android, utilizado no desenvolvimento Front-end baseado em JavaScript.

### [Redux](https://redux.js.org/)

O Redux armazena e resgata dados utilizados dentro da aplicação react.
O Redux é composto de três princípios que formam e definem o seu conceito. Eles são:

* Um único ponto de verdade – Todo o estado da aplicação é mantido em apenas um único objeto chamado de Store.
* O estado é imutável – O estado da aplicação é inalterável, a unica maneira de afetá-lo é emitindo uma Action com a mudança.
* Mudanças são feitas apenas por funções puras – Reducers recebem as Actions emitidas e aplicam-nas ao estado. Sempre retornando um novo estado.

Agora com os princípios estabelecidos, vamos entender o que significa cada uma dessas parte da arquitetura.

### [Python](https://www.python.org/)

Python é uma liguagem de programação de alto nível, utilizada na programação dos microsserviços do back-end do aplicativo.

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

| Caso de Uso | Motivo da Escolha |
| --- | --- |
| <u>Caso de Uso 1</u> | Cadastro de usuários|
| <u>Caso de Uso 2</u> | Cadastro de Eventos|
| <u>Caso de Uso 3</u> | Visualizar informações do Evento|
| <u>Caso de Uso 4</u> | Localização do Evento|


# 5. <a name='id5'> Visão Lógica </a>

A descrição da visão lógica da arquitetura. Descreve as classes mais importantes, sua organização em pacotes e subsistemas de serviço e a organização desses subsistemas em camadas. Também descreve as realizações de caso de uso mais importantes como, por exemplo, os aspectos dinâmicos da arquitetura. Os diagramas de classe podem ser incluídos para ilustrar os relacionamentos entre as classes, os subsistemas, os pacotes e as camadas arquiteturalmente significativas. </br>

A visão lógica do Roles é composta por (N) pacotes principais:
  * Pacote 1
    * Descrição do Pacote 1
  * Pacote 2
    * Descrição do Pacote 2


# 6. <a name='id6'> Tamanho e Desempenho </a>

O sistema é desenvolvido em react-native para plataformas móveis Android e iOS, entretanto o sistema deve ser construido com foco no desempenho do aparelho em que será instalado. O software deverá suportar cerca de 3.000 usuários (alunos, professores e eventuais empresas).

# 7. <a name='id7'> Qualidade </a>

|Característica | Descrição | Solução |
| --- | --- | --- |
| <b>Escalabilidade | Índice do potencial de crescimento do negócio.| Adicionar infraestrutura,  modelo <i>SaaS</i>, adicionar recursos |
| <b>Confiabilidade | Software funcionar sem ocorrer interrupções e falhas. | <i>DevOps</i>, Melhoria Contínua |
| <b>Disponibilidade | Manter os serviços disponibilizados  | Escala e resiliência da infraestrutura de rede, Servidores disponíveis |
| <b> Portabilidade | Executar em diferentes arquiteturas | Utilizar react-native  |
| <b>Segurança | Proteção de dados e informações | --- |


# 8. <a name='id8'> Referências </a>

  > Como documentar a Arquitetura de Software:
     http://www.linhadecodigo.com.br/artigo/3343/como-documentar-a-arquitetura-de-software.aspx - Acesso em: 06/09/2018.

  > Build native mobile apps using JavaScript and React: https://facebook.github.io/react-native/ - Acesso em: 07/09/2018.

  > Build, Manage and Secure Your Apps Anywhere. Your Way: https://www.docker.com/ - Acesso em: 07/09/2018.
