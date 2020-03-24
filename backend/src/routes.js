const express = require('express');

const OngControler = require('./controllers/OngController');

const routes = express.Router();

routes.get('/ongs', OngControler.index);

routes.post('/ongs', OngControler.create );

module.exports = routes;
