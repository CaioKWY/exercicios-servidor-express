const express = require("express");
const rotas = express();
const metodosLivros = require("./controladores/livros");

rotas.get("/livros", metodosLivros.consultarColecao);
rotas.get("/livros/:id", metodosLivros.consultarLivro);
rotas.post("/livros", metodosLivros.adicionarLivro);
rotas.put("/livros/:id", metodosLivros.substituirLivro);
rotas.patch("/livros/:id", metodosLivros.alterarLivro);
rotas.delete("/livros/:id", metodosLivros.removerLivro)

module.exports = rotas;