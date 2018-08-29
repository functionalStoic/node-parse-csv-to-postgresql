const knex = require('knex')({
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    user: null,
    password: null,
    charset: 'utf8'
  }
});

knex
  .raw('CREATE DATABASE node_parse_csv_to_postgresql')
  .then(() => knex.destroy());
