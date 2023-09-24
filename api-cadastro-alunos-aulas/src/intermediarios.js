const verificarSenha = (req, res, next) => {
    const { senha } = req.query;
    if(!senha || senha != "cubos123"){
        return res.status(401).json({mensagem: "Não autorizado"})
    };
    return next();
};

module.exports = {
    verificarSenha
};