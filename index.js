const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const professorController = require('./controllers/professor.controller');
const usuarioController = require('./controllers/usuario.controller');

mongoose.connect("mongodb+srv://treinamento_node:abc123456@cluster0.jodan.gcp.mongodb.net/Treinamento?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true }, (err) => console.log("Erros de conexão:", err));

const app = express();
app.use(bodyParser.json());
app.use(cors());

professorController(app);
usuarioController(app);

app.listen(8081, () => console.log("Ouvindo na porta 8081"));