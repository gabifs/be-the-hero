const express = require('express');

const app = express();

app.get('/', (req,res)=>{
  return res.json({
    evento: 'Semana Omnistack 11',
    aluno: 'Gabriel Fernandes'
  });
});

app.listen(3333, ()=>{
  console.log(`Backend escutando: http://localhost:3333`);
});
