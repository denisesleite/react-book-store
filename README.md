## Bem vindo a livraria BookHouse
Sistema de biblioteca online, onde você consegue consultar um livro, alugar, deletar, criar e atualizar. Para esta aplicação foram utilizadas as tecnologias react, node com typescript e banco de dados knex.

#### Para executar você deve clonar este repositório
$ git clone https://github.com/denisesleite/react-book-store.git

#### Para executar o server(back-end):

Acessar a pasta /back

Instalar suas dependências:<br/>
$ npm install ou yarn 

Criar o banco de dados executando:<br/>
$ npx knex --knexfile knexfile.ts migrate:latest

Popular o banco de dados executando:<br/>
$ npx knex --knexfile knexfile.ts seed:run

Executar projeto:<br/>
$ npm run dev ou yarn dev

Porta: http://localhost:3333/book

#### Para executar o projeto(front-end):

Acessar a pasta /front

Instalar suas dependências:<br/>
$ npm install ou yarn

Executar projeto:<br/>
$ npm start ou yarn start
