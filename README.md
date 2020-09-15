### Para executar o projeto você deve:

#### Clonar este repositório

\$ git clone https://github.com/denisesleite/teste-softdesign.git

#### Para executar o server(back-end):

Acessar a pasta /back

Instalar suas dependências:
\$ npm install

Criar o banco de dados executando:
\$ npx knex --knexfile knexfile.ts migrate:latest

Popular o banco de dados executando:
\$ npx knex --knexfile knexfile.ts seed:run

Executar projeto:
\$ npm run dev

Porta: http://localhost:3333/livros

#### Para executar o projeto(front-end):

Acessar a pasta /front

Instalar suas dependências:
\$ npm install

Executar projeto:
\$ npm start
