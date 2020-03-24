const express = require('express');

const app = express();

const routes = require('./routes');

app.use(express.json());

app.use(routes)

app.listen(3333, ()=>{
  console.log(`Backend escutando: http://localhost:3333`);
});
