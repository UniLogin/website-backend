const server = require('./server');

server.init().then(
  () => server.start(),
  console.error
);
