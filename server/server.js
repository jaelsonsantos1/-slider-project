const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const imagesPath = path.join(__dirname, '../imagens/Acompanhamento_Custo_Mina_BDG_vs_ACT_2023_VRS_03');

app.use(express.static(path.join(__dirname, '../')));

app.get('/images', (req, res) => {
  fs.readdir(imagesPath, (err, files) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Internal Server Error');
    }

    const images = files.filter(file => /\.(png|jpe?g|gif|svg)$/i.test(file))
                        .map(file => `imagens/Acompanhamento_Custo_Mina_BDG_vs_ACT_2023_VRS_03/${file}`);

    res.json(images);
  });
});

app.listen(8080, () => {
  console.log('Servidor rodando em http://localhost:8080');
});
