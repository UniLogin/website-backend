const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const knexConfig = require('./config/knex');
const database = require('knex')(knexConfig);

const init = function () {
  return database.migrate.latest();
};

const start = function () {
  app.use(bodyParser.urlencoded({ extended: true }));

  app.post('/subscribe', async function (req, res) {
    try {
      const email = req.body.email;
      await database('emails').insert({ email });
      return res.send("Your subscription successfully added!");
    } catch (e) {
      res.send(e)
    }
  })

  app.get('/email', async function (req, res) {
    const databaseItems = await database('emails').select();
    res.send(databaseItems)
  })

  const port = 19511;
  app.listen(port);
  console.log('Application listen on port', port)
}

const stop = function () {
  app.close();
  database.destroy();
}

module.exports = { init, start, stop };