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
| 13/09/2018 | 0.4 | Revisão de todo o documento | Victor Rodrigues |
| 13/09/2018 | 0.4.1 | Alteração da ordem dos tópicos e BUG fixes | Guilherme Leal |
| 13/09/2018 | 0.4.2 | Correção de erros de português | Henrique Martins |
| 13/09/2018 | 0.4.0 | Revisão de todo o documento | Victor Rodrigues |
| 14/09/2018 | 0.5.0 | Adionado tópico 4 | Guilherme Leal|
| 14/09/2018 | 0.5.1 | Reorganização de tópicos e adionado tópico 6 | Guilherme Leal|
# Sumário
<pre>
<b>
1. Introdução 
&#09 1.1. Finalidade 
&#09 1.2. Escopo 
&#09 1.3. Definições, Acrônimos e Abreviações 

2. Representação da Arquitetura 
&#09 2.1. Diagrama de relações 
&#09 2.2. Diagrama React/Redux/Microsserviços

3. Metas e Restrições da Arquitetura

4. Visão de Casos de Uso

5. Tamanho e Desempenho

6. Qualidade
   
7. Referências
</b>
</pre>
# 1. Introdução

## 1.1. Finalidade

Este documento fornece uma visão arquitetural abrangente do sistema, usando diversas visões de arquitetura para representar diferentes aspectos do sistema. Seu objetivo é captar e transmitir as decisões arquiteturais significativas que foram feitas no sistema.

## 1.2. Escopo

Este Documento de Arquitetura de Software fornece uma visão geral da arquitetura do Roles.

## 1.3. Definições, Acrônimos e Abreviações

  * UnB - Universidade de Brasília
  * FGA - Faculdade do Gama
  * App - Aplicativo mobile
  * iOS - Sistema operacional móvel da Apple Inc.
  * Android - Sistema operacional móvel do Google Inc.

# 2. Representação da Arquitetura

## 2.1. Diagrama de relações

***Diagrama aqui***

O diagrama apresenta cada etapa que será seguido para que o app Rolês funcione.

## 2.2. Diagrama React/Redux/Microsserviços

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

# 3. Metas e Restrições da Arquitetura

 Para o desenvolvimento deste projeto serão utilizadas as seguintes tecnologias:

* [React-native](https://facebook.github.io/react-native/): Utilizado na contrução do aplicativo nativo para Android e iOS;
* [Python](https://www.python.org/): Plataforma utilizada para microsserviços;
* [Docker](https://www.docker.com/): Plataforma de containeres para empacotamento de aplicações;
* [Redux](https://redux.js.org/): Plataforma que armazena e recupera dados dentro da aplicação.

| Restrições |
| --- |
| Ao se conectar com as redes sociais e for ser feita alguma publicação, sempre pedir permissão. |
| Não é aceito nenhum nenhuma que contenha caracteres especiais (parâmetros pré-definidos). |
| O sistema não pode travar/encerrar o processo com frequência. |
| Mudanças nas necessidades de integração com outros sistemas |


# 4. Visão de Casos de Uso

| Caso de Uso | Motivo da Escolha |
| --- | --- |
| <u>Caso de Uso 1</u> | Cadastro de usuários|
| <u>Caso de Uso 2</u> | Cadastro de Eventos|
| <u>Caso de Uso 3</u> | Visualizar informações do Evento|
| <u>Caso de Uso 3</u> | Localização do Evento|


# 5. Tamanho e Desempenho

O sistema é desenvolvido em react-native para plataformas móveis Android e iOS, entretanto o sistema deve ser construido com foco no desempenho do aparelho em que será instalado. O software deverá suportar cerca de 3.000 usuários (alunos, professores e eventuais empresas).

# 6. Qualidade

|Característica | Descrição | Solução |
| --- | --- | --- |
| <b>Escalabilidade | Indice do potencial de crescimento do negócio.| Adicionar infra-estrutura,  modelo <i>SaaS</i>, adicionar recursos |
| <b>Confiabilidade | Software funcionar sem ocorrer interrupções e falhas. | <i>DevOps</i>, Melhoria Contínua |
| <b>Disponibilidade | Manter os serviços disponibilizados  | Escala e resiliência da infraestrutura de rede, Servidores disponíveis |
| <b> Portabilidade | Executar em diferentes arquiteturas | Utilizar react-native  |
| <b>Segurança | Proteção de dados e informações | --- |

* Saas (Software as a Service)


# 7. Referências

  > Como documentar a Arquitetura de Software:
     http://www.linhadecodigo.com.br/artigo/3343/como-documentar-a-arquitetura-de-software.aspx - Acesso em: 06/09/2018.

  > Build native mobile apps using JavaScript and React: https://facebook.github.io/react-native/ - Acesso em: 07/09/2018.

  > Build, Manage and Secure Your Apps Anywhere. Your Way: https://www.docker.com/ - Acesso em: 07/09/2018.
