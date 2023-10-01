const express = require("express");
const rotas = express();
const {listarPokemons, acharId} = require("./controladores/metodos")

rotas.get("/pokemon", listarPokemons);
rotas.get("/pokemon/:idPoke", acharId);

module.exports = rotas; 
