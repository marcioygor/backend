
/* Esta classe defini a tabela box no banco de dados */
const mongoose = require('mongoose');

/* Definindo campos para a tabela box */
const box = new mongoose.Schema({
    title: {
        type: String,    /* Esta especificação defini o campo como obrigatório */

    },
    files: []
}, {
    timestamps: true

});

module.exports = mongoose.model('Box', box);