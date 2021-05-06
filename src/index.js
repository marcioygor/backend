const express = require('express'); /* Recebe todas as depedências do express */
const mongoose = require('mongoose'); /* responsável pela manipulação com o banco */
const path = require('path');
const app = express();
/* Fazendo a conexão com o MongoDB */
mongoose.connect("mongodb+srv://marcio:marcio@cluster0.wrb6n.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
    useNewUrlParser: true
});

app.listen(3333); /* Porta padrão onde o app irá rodar */

app.use(express.json()); /* Comunicação por json */
app.use(express.urlencoded({ extended: true })); /* Permiti enviar arquivos */
app.use(require('./routes')); /* assosiação o arquivo de rotas */
app.use('/files', express.static(path.resolve(__dirname, '..', 'temp')));
/* Mongo_12345! */