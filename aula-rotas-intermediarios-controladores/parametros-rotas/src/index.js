const express = require("express");
const {filtrarProfessores, encontrarId } = require("./controladores/professores")
const app = express();




 
//localhost:3000/professores
app.get("/professores", filtrarProfessores);

//localhost:3000/professores/:id
app.get("/professores/:id", encontrarId);

app.listen(3000);