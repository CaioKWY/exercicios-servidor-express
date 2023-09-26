let {cursos, identificadorCurso} = require("../dados/curso")

const adicionarCurso = (req, res) => {
    let { nome, descricao } = req.body;

    if(!nome || !descricao){
        return res.status(400).json({mensagem: "Preencha o nome e descricao"})
    };
    nome = nome.trim();
    descricao = descricao.trim();

    if(nome === "" || descricao === ""){
        return res.status(400).json({mensagem: "Não deixe campos vazios"})
    }

    temCurso = cursos.some((curso) => {
        return curso.nome === nome;
    });
    if(temCurso){
        return res.status(400).json({mensagem: "Curso ja cadastrado"})
    };

   const novoCurso = {
        id: identificadorCurso++,
        nome,
        descricao
    };
    cursos.push(novoCurso)
    return res.status(201).json(novoCurso);
};

const listarCursos = (req, res) => {
    return res.status(200).json(cursos);
}

module.exports = {
    adicionarCurso,
    listarCursos
}