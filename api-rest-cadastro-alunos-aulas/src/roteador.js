const express = require("express");
const rotas = express();
const metodos = require("./controladores/alunos")
const cursos = require("./controladores/cursos-metodos")

rotas.get("/alunos", metodos.listarAlunos);
rotas.get("/alunos/:id", metodos.acharId);
rotas.post("/alunos", metodos.cadastrarAluno);
rotas.delete("/alunos/:id",metodos.deletarAluno)

rotas.post("/cursos", cursos.adicionarCurso);
rotas.get("/cursos", cursos.listarCursos)

module.exports = rotas;