const express = require("express");
const rotas = express();
const metodos = require("./constoladores/metodos");

rotas.get("/produtos", metodos.listarProdutos);
rotas.get("/produtos/:idProduto", metodos.acharId);
rotas.get("/produtos/:idProduto/frete/:cep", metodos.calcularFrete);


module.exports = rotas;