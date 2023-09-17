const express = require("express");

const app = express();

let tempo = 0;
let contagem;

app.get("/", (req, res) => {
    let minutos = tempo >= 60 ? Math.floor(tempo/60): 0;
    let segundos = tempo < 60 ? tempo : tempo%60;
    let minutosFormatados = (minutos.toString()).padStart(2, "0");
    let segundosFormatados = (segundos.toString()).padStart(2, "0");
           
    res.send("Tempo atual do cronometro: "+minutosFormatados +
    " minutos e "+ segundosFormatados +" segundos");
});

app.get("/iniciar", (req, res) => {
    contagem = setInterval(() => {
        tempo ++;
    }, 1000);
    res.send("Cronometro iniciado!");
});

app.get("/pausar", (req, res) => {
    clearInterval(contagem);
    res.send("Cronometro pausado!")
});

app.get("/continuar", (req, res) => {
    contagem = setInterval(() => {
        tempo ++;
    }, 1000);
    res.send("Cronometro continuado!");
});

app.get("/zerar", (req, res) => {
    clearInterval(contagem);
    tempo = 0;
    res.send("Cronometro zerado!");
});

app.listen(8000);

