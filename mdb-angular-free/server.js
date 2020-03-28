const path = require('path');
const express = require('express');
const nameApp = 'FE-sba9-app';
const app = express();
// Servir arquivos estáticos
app.use(express.static(`${__dirname}/dist/${nameApp}`));
// Envie todos os pedidos para index.html
app.get('/*', function(req, res) {
res.sendFile(path.join(`${__dirname}/dist/${nameApp}/index.html`));
});
// Porta padrão do Heroku
app.listen(process.env.PORT || 5000);