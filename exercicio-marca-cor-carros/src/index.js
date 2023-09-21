const express = require("express");
const app = express();
const { buscarId, buscarCorMarca } = require("./controladores/carros")
const verificarSenha = require("./intermediarios")

app.use(verificarSenha);

app.get("/carros/:id", buscarId);

app.get("/carros", buscarCorMarca);

app.listen(3200);