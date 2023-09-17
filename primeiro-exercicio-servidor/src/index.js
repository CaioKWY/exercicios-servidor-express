const express = require("express");

const usuarios = require("./cadastro");

const app = express();

app.get("/usuario", (req, resp) => {
    
    resp.send(usuarios);
});

app.listen(3000, () => {
    console.log("Servidor iniciado na porta 3000");
});