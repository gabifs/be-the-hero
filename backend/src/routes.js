const express = require('express');

const routes = express.Router();

routes.get('/', (req,res)=>{
  return res.json({
    evento: 'Semana Omnistack 11',
    aluno: 'Gabriel Fernandes'
  });
});

module.exports = routes;
