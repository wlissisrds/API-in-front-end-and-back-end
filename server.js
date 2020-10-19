const cors = require('cors');
const express = require('express');
const axios = require('axios');


const app = express();

app.use(cors());

//criando rota de serviço api
app.get('/', async(req, res) => {

    //response é a resposta do axiosm MAS eu tiro o data de dentro o response
    const {data} = await axios('https://jsonplaceholder.typicode.com/users')
    console.log(data);
    

    return res.json(data);
});
//criando porta de serviço do projeto
app.listen('4567');