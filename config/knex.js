const path = require('path');

const knexConfig = {
  client: 'postgresql',
  connection: process.env['DATABASE_URL'] || {
    database: 'subscriptions',
    user: 'postgres',
    password: 'postgres',
  },
  migrations: {
    directory: path.join(__dirname, '../migrations'),
    loadExtensions: ['.js'],
  },
};

module.exports = knexConfig;
