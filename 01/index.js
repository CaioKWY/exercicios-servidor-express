const express = require("express");

const app = express();

let jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"];
let indice = 0;

app.get("/", (req, res) => {
  
    res.send("É a vez de "+jogadores[indice]+ " jogar!");
    indice ++
    if(indice == jogadores.length){
        indice = 0;
    }
       
        
    
    
});

app.listen(3000);