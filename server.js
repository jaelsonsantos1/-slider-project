const express = require('express');
const fs = require('fs');
const app = express();

app.use(express.static('images'));

app.listen(8080, () => {
  console.log('Servidor rodando em http://localhost:8080');
});
