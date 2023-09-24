const express = require("express");
const app = express();
const rotas = require("./roteador")
const { verificarSenha } = require("./intermediarios")

app.use(express.json());

app.use(verificarSenha);

app.use(rotas);

app.listen(3000);