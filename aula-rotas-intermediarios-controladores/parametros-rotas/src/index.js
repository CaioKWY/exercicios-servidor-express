const express = require("express");
const {filtrarProfessores, encontrarId } = require("./controladores/professores")
const app = express();

const primeiroIntermediario = (req, res, next) => {
    console.log("passei no primeiro intermediario");
    next();
};
const segundoIntermediario = (req, res, next) => {
    console.log("passei no segundo intermediario");
    next();
};

const intermediarioRota = (req, res, next) => {
    console.log("passei no intermediario da rota");
    next();
};

// app.use(primeiroIntermediario);
// app.use(segundoIntermediario);
 
//localhost:3000/professores
app.get("/professores",intermediarioRota, filtrarProfessores);

//localhost:3000/professores/:id
app.get("/professores/:id", encontrarId);



app.listen(3000);