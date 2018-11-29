---
id: plano_metodologico
title: Plano Metodológico
sidebar_label: Plano Metodológico
---

A metodologia aplicada neste projeto será uma metodologia híbrida baseada nos _frameworks_ Scrum, Extreme Programming e Kanban. Abaixo segue a descrição de quais técnicas serão aplicadas e como cada uma deve ser seguida.

---

## Papéis

### Scrum Master

* Responsável por garantir que a equipe esteja aderindo aos valores, práticas e regras do Scrum;
* Educa a equipe para ser mais produtiva e desenvolver os produtos com maior qualidade;
* Ajuda a equipe a se auto-organizar;
* Documentar as sprints;
* Resolver impedimentos internos e externos;
* Gerenciar os riscos do projeto e EVM.

### Product Owner

* Reponsável pelo gerenciamento do _Backlog_ do produto e garantir o valor do trabalho realizado pela equipe;
* Definir os critérios de aceitação para _issues_;
* Vender o produto;
* Vender o produto;
* Intermediário entre o cliente e a equipe;
* Agregar valor ao produto;
* Canvas.

### DevOps

* Garantir que todas as alterações de código e configurações sejam feitas usando mecânismos automatizados e rastreávevis;
* Automatizar a infraestrututra;
* Automatizar e garantir a integração e deploy contínuos;
* Organizar os pipelines de produto, desenvolvimento e deploy;
* Organizar e garantir o ambiente de desenvolvimento e testes;
* Organizar e garantir o ambiente de homologação;
* Gerar '.apk';
* Verificar e aceitar os _pull requests_ de acordo com os critérios definidos pelo Scrum Master e o PO;
* Registrar o _gitflow_.

### Arquiteto

* Planeja e desenvolve a arquitetura que melhor atende as necessidades do projeto;
* Tomar decisões sobre ferramentas e métodos de desenvolvimento;
* Acompanhar o processo de desenvolvimento para garantir que a arquitetura está sendo seguida;
* Lidar com a aplicação e seu fluxo de dados.

### Desenvolvedor

* Desenvolver as histórias de usuário;
* Testar sempre as soluções, visando mantes no mínimo 90% da corbetura do código;
* Ter habilidade de compartilhar, adquirir e transformar conhecimento em um produto utilizável;
* Seguir os padrões e técnicas de programação adotados pelo Scrum Master.

---

## Rituais

### Sprints

* Geralmente com duração de 7 dias;
* As sprints normalmente se iniciaram na segunda-feria e tiveram seu término na segunda-feira seguinte.
  * As sprints mais proximas das _releases_ podem ser encurtadas para 4 dias ou alongadas para até 15 dias. Sendo responsabilidade do Scrum Master, avaliar previamente, conforme andamento da equipe, qual a melhor opção que deverá ser adotada.

### Daily Meeting

* Duração Máxima de 15 minutos;
* Realizadas presencialmente todas as terças e quinta às 13:45h;
* Realizadas virtualmente toda segunda, quarta e sexta-feira através do [Discord](https://discordapp.com/).
* A ausência em qualquer das reuniões deverá ser previamente comunicada pelo membro da equipe e justificada. Sendo obrigação do mesmo informar o andamento das duas atividades neste dia pelos meios de comunicações definidos pela equipe.

### Sprint Review

* Duração Máxima: 1 hora;
* Ocorrerão toda segunda-feira, tendo início as 19h

### Sprint Retrospective

* Duração Máxima: 45 minutos;
* Ocorrerão toda segunda-feira, após o termino da Sprint Review.

### Sprint Planning

* Duração Máxima: 2 horas;
* Ocorrerão toda segunda-feira, tendo início após o termino da Sprint Retrospective.

---

## Técnicas de Planejamento

### Issues

* As _issues_ serão aplicadas para representar os mais diversos tipos de tarefas que o projeto demandar.


### Milestones

* As _milestones_ serão aplicadas para identificar cada _sprint_. Entende-se que cada _sprint_ representa uma entrega significativa de novas funcionalidades, caracterizando-se assim como macros do projeto.
* Toda _issue_ planejada ou adicionada para ser executada durante aquela _sprint_ deve ser mapeada com a _milestone_ referente.

### Épicos

* Issues referentes a um mesmo módulo dentro do projeto devem estar associadas a épicos, como forma de mapear melhor o desenvolvimento daquele épico em específico.
* Épicos também podem ser usados para representar _issues_ muito grandes, com alto grau de dificuldade. Assim, quebra-se essas _issues_ complexas em _issues_ menores facilitando o desenvolvimento.

### User Stories

* Serão aplicadas na estimativa de tempo para planejamento da _sprint_;
* Deverão seguir o seguinte _template_:

<blockquote> <b> Eu como</b> [usuário do sistema] <b>desejo</b> [ação a ser executada] <b>para</b> [justificativa para a ação]. </blockquote>

* Este _template_ deve estar mapeado em uma _Issue Template_:
  
<blockquote>

**Descrição**
Deve conter uma descrição detalhada explicando a finalidade para a qual à issue foi criada.

**Tarefas :**

* [ ] Tarefa 1;

**Requisitos:**

As issues devem possuir título, descrição, no mínimo um assinante responsável, labels, milestone(a sprint que deve ser concluída) e estimated(puntuação) para as issues pontuadas.

* Cada _user story_ deve possuir um conjunto de critérios de aceitação definidos pelo PO, os quais deverão ser verificados antes de afirmar a tarefa como concluída.

</blockquote>

### Technical Stories

* _Techinical Stories_ devem ser aplicadas quando surgir alguma demanda não funcional durante o andamento do projeto.
* Deverão seguir o mesmo _template_ definido para as _user stories_.

### Planning Poker

* Deverá ser aplicado para estimar a dificuldade de trabalho do projeto e auxiliar no planejamento das _sprints_, conforme nota-se a capacidade de produção da equipe;
* Os pontos estimados para uma _issue_ devem estar registrados na mesma por meio do ZenHub;
* Os valores considerados deverão seguir a tabela abaixo:

<table>
<tr><th>Pontuação</th><th>Duração</th><th>Risco</th><th>Máximo</th></tr>
<tr><td>0</td><td>15 minutos</td><td>15 minutos</td><td>30 minutos</td></tr>
<tr><td>1</td><td>1 hora</td><td>1 hora</td><td>2 horas</td></tr>
<tr><td>2</td><td>2 horas</td><td>1 hora</td><td>3 horas</td></tr>
<tr><td>3</td><td>4 horas</td><td>2 horas</td><td>6 horas</td></tr>
<tr><td>5</td><td>8 horas</td><td>2 horas</td><td>10 horas</td></tr>
<tr><td>8</td><td>12 horas</td><td>4 horas</td><td>16 horas</td></tr>
<tr><td>13</td><td>20 horas</td><td>6 horas</td><td>26 horas</td></tr>
<tr><td>21</td><td>30 horas</td><td>10 horas</td><td>40 horas</td></tr>
</table>

_Issues_ com mais de 13 pontos devem ser transformadas em Épicos e quebradas em _issues_ menores, para facilitar o desenvolvimento do projeto.

### MosCow

O _backlog_ deve ser priorizado utilizando o método MosCow, o qual está disposto abaixo:

<table>
		<tr>
				<th>Must have</th>
				<td>Tem que ter</td>
		</tr>
		<tr>
				<th>Should have</th>
				<td>Deveria ter</td>
		</tr>
		<tr>
				<th>Could have</th>
				<td>Pode ter</td>
		</tr>
		<tr>
				<th>Would have</th>
				<td>Seria bom ter</td>
		</tr>
</table>

### Kanban

O Kanban será aplicado visando monitorar o fluxo de trabalho da equipe.

* O Kanban deverá contar com os quadros Product Backlog, Icebox, Sprint Backlog, Em progresso, Revisão e Terminados;
* É de responsabilidade de cada membro da equipe atualizar o Kanban diariamente com o _status_ de cada atividade;
* O Kanban estará disponível por meio da ferramenta ZenHub.
* [Acessar o Kanban][zenhub].

---

## Técnicas de Gerenciamento

### Velocity

* O _velocity_ deve ser medido ao final de cada _sprint_ e utilizado no planejamento da próxima _sprint_ como parâmetro para avaliar a capacidade da equipe de desenvolvimento.

### Burndown

* O _burndown_ deve ser aplicado sobre cada _sprint_ com o intuito de monitorar a entrega das atividades planejadas.
* É responsabilidade do _Scrum Master_ acompanhar o gráfico durante a _sprint_ e tomar ações para garantir as entregas ao final da _sprint_.
* O gráfico de _burndown_ será gerado automaticamente pela ferramenta ZenHub a medida que o KanBan é atualizado pela equipe.

---

## Técnicas de Codificação

### Programação em Pares

* Os pares da _sprint_ deverão ser definidos durante o _Sprint Planning_;
* O _Scrum Master_ é responsável por formar os pares;
* O quadro de conhecimentos deve ser o indicador de maior peso na formação dos pares, sendo que desenvolvedores com mais experiência em determinada área deve parear com quem possui menos conhecimento na mesma.

### Integração Contínua

* As _branchs_ `master` e `dev` estarão submetidas ao processo de integração contínua, devendo respeitar o mínimo de 90% da cobertura de código nos testes unitários;
* Todo _pull request_ realizado para _branch_ `dev` estará sujeito ao processo de integração contínua.

### Padrões de Codificação

* O código deve ser formato seguindo os padrões de estilo e técnicas de programação adotadas pela equipe, visando assim garantir a qualidade do código gerado.

## Técnicas de Design

### Simplicidade

* Ao manusear o código a equipe deve priorizar sempre a solução mais simples que atenda as necessidades do problema.

### Refatoração

* Ao manusear o código, sempre que houver dificuldade para compreensão do mesmo a equipe deve se organizar para refatorá-lo.
* A refatoração deve ser realizada antes de fazer qualquer alteração na funcionalidade, visando garantir a integridade do código.

## Definição de Pronto

### História de Usuário

Uma história estará finalizada quando a funcionalidade for implementada, testada, e validada junto ao PO, além de manter ou aumentar a cobertura dos testes.

### Feature

Uma feature é considerada finalizada quando todas as histórias derivadas estão todas implementadas com a cobertura de testes aumentada ou mantida.

### Sprint

Uma sprint conclui após 7 dias de trabalho. Caso as histórias não forem finalizadas e mescladas na branch master devem ser alocadas para a próxima Sprint como dívida técnica. Os riscos identificados devido as dificuldades enfrentadas são mapeados na documentação da sprint.

### Artefato

Um artefato é considerado pronto quando for finalizado e feito o _pull request_ com as validações presentes no guia de contribuição.

[zenhub]: https://github.com/fga-eps-mds/2018.2-Roles/issues#zenhub
