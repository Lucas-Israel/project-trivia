# :toolbox: Tecnologias usadas:

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

# :busts_in_silhouette: Projeto desenvolvido em conjunto com:
  
#### [Danielle Gazarini](https://github.com/daniellegazarini), [Pedro Gonçalves](https://github.com/pllsg96), [Ivens Arroxellas](https://github.com/ivensarroxellas), [SHEIFER KEPLER DE ANDRADE](https://github.com/SH-Kepler) e [Bruno Monteiro](https://github.com/Brunooml)

# :open_book: Objetivo do projeto trivia

<details>
  <summary>:speech_balloon: Objetivos</summary>

  ```
  1. Desenvolver um jogo de perguntas e respostas baseado no jogo Trivia (tipo um show do milhão americano rs) utilizando React e Redux.
  2. Desenvolvendo em grupo suas funcionalidades de acordo com as demandas definidas em um quadro Kanban.
  3. Deve ser possivel:
    3.1 Logar no jogo e, se o email tiver cadastro no site Gravatar, ter sua foto associada ao perfil da pessoa usuária.
    3.2 Acessar a página referente ao jogo, onde se deverá escolher uma das respostas disponíveis para cada uma das perguntas apresentadas. A resposta deve ser marcada antes do contador de tempo chegar a zero, caso contrário a resposta deverá ser considerada errada.
    3.3 Ser redirecionada, após 5 perguntas respondidas, para a tela de score, onde o texto mostrado depende do número de acertos.
    3.4 Visualizar a página de ranking, se quiser, ao final de cada jogo.
    3.5 Configurar algumas opções para o jogo em uma tela de configuração acessível a partir do cabeçalho do app.
  ```
</details>

<details>
  <summary>:speech_balloon: Exemplo de funcionamento</summary>
  
![Captura de tela de 2023-05-22 12-36-44](https://github.com/Lucas-Israel/project-trivia/assets/104790267/cd058640-1a75-4789-975c-dcaaf3662574)
![Captura de tela de 2023-05-22 12-13-11](https://github.com/Lucas-Israel/project-trivia/assets/104790267/360b54ce-e6ad-4910-b97c-348687680178)

  
</details>

# :heavy_exclamation_mark: Arquivos desenvolvidos nesse projeto:

<details>
  <summary>:speech_balloon: Arquivos</summary>

  ```
  public/
    trivia.png
  src/
    App.css
    App.js
    index.js
  
    tests/
      Config.test.js
      Feedback.test.js
      Game.test.js
      Login.test.js
      NotFound.test.js
      Ranking.test.js
      Timer.test.js
      
      helpers/
        APIReturnMock.js
        StoreWithInvalidCode.js
        invalidToken.js
        loginHelper.js
        meAjude.js
        returnCode3.js
        tokenMock.js
        winHelper.js

    components/
      ConfigButton.js
      Header.js
      Questions.js
      Timer.js
    
    pages/
      Configuracoes.js
      Feedback.js
      Game.js
      Login.js
      NotFound.js
      Ranking.js
      
    redux/
      actions/
        actionType.js
        index.js
  
      reducers/
        index.js
        player.js
        questions.js
        token.js
        
      store/
        index.js
  ```
</details

#### :warning: todos os outros arquivos foram desenvolvidos pela [Trybe](https://www.betrybe.com).

# :thinking: Como checar o projeto

```
git clone git@github.com:Lucas-Israel/project-trivia.git
npm install
npm run test
npm start
```

# :calendar: Datas para desenvolvimento

```
início: 08/09/22 às 14h46
término: 14/09/22 às 15h32
prazo: 7 dias
dias específicos para o desenvolvimento do projéto: 5
```

# :trophy: Percentual de conclusão do projeto

![Captura de tela de 2023-05-22 12-49-07](https://github.com/Lucas-Israel/project-trivia/assets/104790267/012e9015-a480-4ba6-b723-ac9237bd7b57)


<details>
  <summary>:warning: Metodo de avaliação da Trybe</summary>
  
##### A escola de programação [Trybe](https://www.betrybe.com) utiliza um sistema de avaliação baseado na conclusão de requisitos em cada projeto, considerando a porcentagem de conclusão, com um mínimo de 80% dos requisitos obrigatórios, em um prazo regular de no máximo 7 dias, tendo dias específicos para o desenvolvimento do projeto que variam de acordo com a complexidade dele.

##### Não alcançando esse patamar mímino, o aluno entra em recuperação, tendo que entregar 90% dos requisitos obrigatórios mais os bonús, em outros 7 dias, caso o aluno falhe novamente ele é mudado de turma para refazer o conteúdo e projeto, caso falhe após mudar de turma, no mesmo conteúdo/projeto, o aluno é removido do curso.
 
