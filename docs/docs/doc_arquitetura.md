---
id: doc_arquitetura
title: Documento de Arquitetura
sidebar_label: Documento de Arquitetura
---

Versão 0.2.2
___

## Controle de versão

| **Data** | **Versão** | **Descrição** | **Autor** |
| --- | --- | --- | --- |
| 06/09/2018 | 0.1.0 | Template | Henrique Martins |
| 06/09/2018 | 0.2.0 | Construção do tópico 1.1 | Henrique Martins |
| 07/09/2018 | 0.2.1 | Adições nos tópicos 1.2, 1.3 e 1.4 | Henrique Martins |
| 07/09/2018 | 0.2.2 | Adições nos tópicos 1.4 e 3 | Victor Rodrigues |


# Sumário

1. Introdução </br>
2. Representação da Arquitetura </br>
3. Metas e Restrições da Arquitetura </br>
4. Visão de Casos de Uso </br>
5. Visão Lógica </br>
6. Visão de Processos </br>
7. Visão de Implantação </br>
8. Visão da Implementação </br>
9. Tamanho e Desempenho </br>
10. Qualidade </br>

# 1. Introdução

## 1.1. Finalidade

<p> Este documento fornece uma visão arquitetural abrangente do sistema, usando diversas visões de arquitetura para representar diferentes aspectos do sistema. Seu objetivo é captar e transmitir as decisões arquiteturais significativas que foram feitas no sistema.
 </p>

## 1.2. Escopo

Este Documento de Arquitetura de Software fornece uma visão geral da arquitetura do Roles.

## 1.3. Definições, Acrônimos e Abreviações

  * UnB - Universidade de Brasília
  * FGA - Faculdade do Gama
  * App - Aplicativo mobile

## 1.4. Referências

  > Como documentar a Arquitetura de Software:
     http://www.linhadecodigo.com.br/artigo/3343/como-documentar-a-arquitetura-de-software.aspx - Acesso em: 06/09/2018.

  > Build native mobile apps using JavaScript and React: https://facebook.github.io/react-native/ - Acesso em: 07/09/2018.
  
  > Build, Manage and Secure Your Apps Anywhere. Your Way: https://www.docker.com/ - Acesso em: 07/09/2018.
  * Referencia 4


# 2. Representação da Arquitetura

 Inserir Representação da Arquitetura

# 3. Metas e Restrições da Arquitetura

 Para o desenvolvimento deste projeto serão utilizadas as seguintes tecnologias:

* [React-native](https://facebook.github.io/react-native/): Utilizado na contrução do aplicativo nativo para Android e IOS;
* [Python-Django](https://www.python.org/): Plataforma utilizada para micro serviços;
* [Docker](https://www.docker.com/);

# 4. Visão de Casos de Uso

Esta visão é obrigatória. Esta fase, será responsável por apresentar os casos de uso ou cenários escolhidos para a validação da arquitetura apresentada. Casos de uso, backlog, requisitos de usuários ou qualquer outro nome que represente os itens relevantes para o funcionamento do sistema final, o intuito é exercitar e testar os principais aspectos de risco da arquitetura. Exemplo:

| Caso de Uso | Motivo da Escolha |
| --- | --- |
| Caso de Uso 1 | Descrever o motivo e os itens que serão testados.|
| Caso de Uso 2 | Descrever o motivo e os itens que serão testados.|
| Caso de Uso 3 | Descrever o motivo e os itens que serão testados.|

# 5. Visão Lógica

Esta visão é obrigatória. A descrição da visão lógica da arquitetura. Descreve as classes mais importantes, sua organização em pacotes e subsistemas de serviço, e a organização desses subsistemas em camadas. Descreve também as realizações de caso de uso mais importantes como, por exemplo, os aspectos dinâmicos da arquitetura. Os diagramas de classe podem ser incluídos para ilustrar os relacionamentos entre as classes, os subsistemas, os pacotes e as camadas arquiteturalmente significativas.

# 6. Visão de Processos

Esta visão é opcional. Utilize-a somente se o sistema tiver mais de um thread de controle e se os threads separados interagirem ou forem dependentes entre si.

# 7. Visão de Implantação

Esta visão é opcional. Utilize-a somente se o sistema for distribuído por mais de um nó. Até mesmo nesses casos, somente use esta visão no local em que a distribuição acarretar implicações na arquitetura. Por exemplo, nos casos em que há um único servidor e vários clientes, a visão de implantação apenas precisaria definir as responsabilidades do servidor e dos clientes como uma classe de nós; não haveria necessidade de mostrar cada nó de cliente se todos tivessem as mesmas capacidades.

# 8. Visão da Implementação

Esta visão é opcional. Utilize-a somente nos casos em que a implementação não for rigorosamente baseada no design, isto é, no local em que houver uma distribuição diferente de responsabilidades entre os pacotes correspondentes nos Modelos de Design e Implementação. Se os empacotamentos dos modelos de design e implementação forem idênticos, esta visão poderá ser omitida.

# 9. Tamanho e Desempenho

Inserir tamanho e desempenho suportados pelo software.

# 10. Qualidade

Inserir qualidade do software.
