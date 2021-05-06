
/* Esta classe defini a tabela box no banco de dados */
const mongoose = require('mongoose');

/* Definindo campos para a tabela box */
const file = new mongoose.Schema({
    title: {
        type: String,    /* Esta especificação defini o campo como obrigatório */
        required: true,
    },
    path: {
        type: String,    /* Esta especificação defini o campo como obrigatório */
        required: true,
    },
    files: [{ type: mongoose.Schema.Types.ObjectId, ref: "File" }]
}, {
    timestamps: true,
    toObject: { virtuals: true },
    toJSON: { virtuals: true }

});

file.virtual("url").get(function () {
    return `http://localhost:3333/files/${encodeURIComponent(this.path)}`;
});

module.exports = mongoose.model('file', file);
