<h1> Happy </h1>

# :computer: Tecnologias

Este projeto, 100% responsivo, utilizou das seguintes tecnologias para criação dos ambientes front-end e back-end:

- [HTML5](https://developer.mozilla.org/pt-BR/docs/Web/HTML "Documentação da linguagem de marcação de hipertexto HTML5")
- [CSS3](https://developer.mozilla.org/pt-BR/docs/Archive/CSS3 "Documentação das folhas de estilos em cascata CSS3")
- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript "Documentação da linguagem JavaScript")
- [VSCode](https://code.visualstudio.com/ "Acesso ao site do VSCode")
- [Git](https://git-scm.com/ "Acesso ao site do Git")
- [Node.js](https://nodejs.org/en/ "Acesso ao site do Node.js")
- [Express](https://expressjs.com/pt-br/ "Acesso ao site do Express")
- [SQLite](https://www.sqlite.org/index.html "Acesso ao site do SQLite")
- [Handlebars](https://handlebarsjs.com/ "Acesso ao site do Handlebars")
- [Nodemon](https://nodemon.io/ "Acesso ao site do Nodemon")
- [Leaflet](https://leafletjs.com/ "Acesso ao site da biblioteca Leaflet")

<br>

# :triangular_ruler: Projeto

O Happy é uma aplicação que conecta pessoas à casas de acolhimento institucional (antes chamadas de orfanatos) em homenagem ao mês das crianças. 💜

Foi escolhida como localização de exemplo Boa Vista - Roraima.

As imagens no site são aleatórias e servem apenas de exemplo.

Este projeto é de responsabilidade da Rocketseat e foi desenvolvido durante a 3a edição da [Next Level Week - Trilha Discovery](https://nextlevelweek.com/ "Next Level Week"), realizada pela [Rocketseat](https://rocketseat.com.br/ "Rocketseat") entre os dias 12 a 18 de Outubro de 2020.

<br>

# :pencil: Layout

Você pode visualizar o layout do projeto através [desse link](https://www.figma.com/file/mDEbnoojksG4w8sOxmudh3/Happy-Web "desse link"). Lembrando que você precisa ter uma conta no [Figma](http://figma.com/) para acessá-lo.

<br>

# :cd: Instalação

### Link de acesso a aplicação (Local)
Endereço local utilizado tanto pela extensão do VSCode (Live Server) no Front-End quanto pelo Node no Back-End.

http://127.0.0.1:5500/

<br>

## Front-End
1) Utilizado Visual Studio Code (VSCode) durante o desenvolvimento de todo projeto. Abaixo as principais extensões utitizadas:

- Launchbase Theme
- Bracket Pair Colorizer
- Prettier
- Tabnine
- Material Icon Theme
- Live Server <b>(Utilizado apenas durante o desenvolvimento do front-end)</b>

<br>

## Back-End
2) Desintalar a extensão do VSCode (Live Server) utilizada apenas no front-end

3) Instalação do [Node.js](https://nodejs.org/en/)

4) Instalação do [Git](https://git-scm.com/ "Git"). Usado como emulador de terminal por dentro do VSCode.

5) Caso venha baixar o projeto via Github, toda a estrutura de diretório do projeto ficou alocado em c:\nlw (caminho absoluto: /c/nlw)

6) Instalação dos seguintes plugins do Node com o uso do npm (node package manger):

- Na pasta principal do projeto (/c/nlw) via terminal:

	<b>$ npm init -y</b> <i>(Responsável por iniciar o projeto e pela criação do arquivo package.json o qual já se encontra disponível na estrutura de arquivos)</i>

	<b>$ npm install express</b> <i>(Responsável pelo mapeamento das dependências, bibliotecas, pela criação do arquivo package_lock.json e da pasta node-modules os quais já se encontram disponíveis na estrutura de arquivos)</i>

	<b>$ npm install nodemon</b> <i>(Faz o monitoramento do Node. Já está configurado no aquivo server.js a chamada da biblioteca express e o start no servidor na porta 5500. Será a partir do arquivo server.js que o plugin/dependência nodemon fará o restart automático do servidor sem a necessidade do restart manual ($ node src/server.js). Toda e qualquer alteração no arquivo server.js, o nodemon fará o restart automaticamente em background)</i>

- <b>$ npm start</b> <i>(Executará o start do servidor com comando starting `node src/server.js` em backgound e o nodemon já estará monitorando o reload das alterarções sem a necessidade de um restart manual. O terminal pode ser fechado e aberto somente na necessidade de acompanhar algum console.log.</i>

- <b>$ npm install hbs</b> <i>(Conhecido como Handlebars, é uma template engine que permite o uso de variáveis dentro do HTML. Sua chamada também é configurada pelo arquivo server.js. Após instalação do módulo hbs, todos os arquivos .html obrigatoriamente foram renomeados para .hbs tornando a funcionalidade do html dinâmico. Torna-se obrigatório essa alteração por estarrmos configurando toda parte de execução do projeto no back-end onde este será responsável em enviar as informações ao fron-end)</i>

- <b>$ npm install sqlite-async</b> <i>(Será utilizado o SQLite onde o banco será armazenado em um arquivo a parte dentro da própria aplicação denominado database.sqlite Configurado nos aquivos pages.js e db.js)</i>

<br>
