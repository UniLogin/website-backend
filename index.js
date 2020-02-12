const server = require('./server');
const dotenv = require('dotenv');
dotenv.config();

server.init().then(
  () => server.start(),
  console.error
);
