const express = require("express");
const routes = express.Router();
const multer = require('multer');
const multerConfig = require('./config/multer');

const boxController = require("./controllers/boxController");
const fileController = require("./controllers/fileController");

routes.get("/", function (req, res) {
    return res.send("hello world");
});

routes.get("/boxes/:id", boxController.show);
routes.post("/boxes", boxController.strore);
routes.post("/boxes/:id/files", multer(multerConfig).single('file'), fileController.strore)

module.exports = routes; /* exportando o arquivo de rotas */
