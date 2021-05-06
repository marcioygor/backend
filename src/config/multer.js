const multer = require('multer');
const path = require('path'); /* O path é responsável pela padronização dos caminhos */
const crypto = require('crypto');
/* Definindo o caminho onde os arquivos serão salvos */
module.exports = {
    dest: path.resolve(__dirname, '..', '..', 'temp'),
    storage: multer.diskStorage({
        destination: (req, res, cb) => {
            cb(null, path.resolve(__dirname, '..', '..', 'temp'));
        },
        filename: (req, file, cb) => { /* Dando um nome criptografado ao arquivo */
            crypto.randomBytes(16, (err, hash) => {
                if (err) cb(err);
                file.key = `${hash.toString('hex')}-${file.originalname}`;
                cb(null, file.key);
            })
        }
    })
};

/* O multer é responsável pelo upload de arquivos */