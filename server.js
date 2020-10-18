const express = require('express');

const app = express();

//criando rota de serviço api
app.get('/', (req, res) => {
    return res.json({ menssage : 'okay' })
});

//criando porta de serviço do projeto
app.listen('3000');