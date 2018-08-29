module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      user: null,
      password: null,
      database: 'node_parse_csv_to_postgresql'
    },
    useNullAsDefault: true
  }
};
