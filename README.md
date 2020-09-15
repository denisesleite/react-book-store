### Para executar o projeto você deve:

#### Clonar este repositório

\$ git clone https://github.com/denisesleite/react-book-store.git

#### Para executar o server(back-end):

Acessar a pasta /back

Instalar suas dependências:<br/>
\$ npm install

Criar o banco de dados executando:<br/>
\$ npx knex --knexfile knexfile.ts migrate:latest

Popular o banco de dados executando:<br/>
\$ npx knex --knexfile knexfile.ts seed:run

Executar projeto:<br/>
\$ npm run dev

Porta: http://localhost:3333/book

#### Para executar o projeto(front-end):

Acessar a pasta /front

Instalar suas dependências:<br/>
\$ npm install

Executar projeto:<br/>
\$ npm start
