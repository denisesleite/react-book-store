//CRIANDO CONEXÃO DA APLICAÇÃO
import path from 'path';
import knex from 'knex';

const connection = knex({
  client: 'sqlite3',
  connection: {
    filename: path.resolve(__dirname, 'database.sqlite'),
  },

  pool: {
    afterCreate: (conn: any, cb: any) =>
      conn.run('PRAGMA foreign_keys = ON', cb),
  },

  useNullAsDefault: true,
});

export default connection;
