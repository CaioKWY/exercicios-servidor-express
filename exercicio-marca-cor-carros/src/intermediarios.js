const verificarSenha = (req, res, next) => {
    const { senha } = req.query;
    if(senha === "carros123"){
        next();
    }else if(!senha){
        res.send("Preencha a senha")
    }else{
        res.send("Senha incorreta")
    }
};

module.exports = verificarSenha;