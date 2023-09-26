let { alunos, indiceAlunos } = require("../dados/colecao-a");

const listarAlunos = (req, res) => {
    return res.status(200).json(alunos);
};

const acharId = (req,res) => {
    const { id } = req.params;
    const aluno = alunos.find((aluno) => {
        return aluno.id === Number(id);
    });
    if(!id){
        return res.status(400).json({mensagem: "O id deve ser um numero valido"})
    };
    if(!aluno){
        return res.status(404).json({mensagem: "Aluno não encontrado"})
    };
    return res.status(200).json(aluno);
};

const cadastrarAluno = (req, res) => {
    let { nome, sobrenome, idade, curso} = req.body;

    if(!nome || !sobrenome || !idade || !curso){
        return res.status(400).json({mensagem: "Preencha todos os campos"})
    };
    nome = nome.trim();
    sobrenome = sobrenome.trim();
    if(nome == "" || sobrenome == ""){
        return res.status(400).json({mensagem: "Preencher com espacos vazios não vale!!"})
    };
    if(idade < 18){
        return res.status(400).json({mensagem: "Apenas pessoas com pelo menos 18 anos"})
    };
    alunos.push({
        id: indiceAlunos++,
        nome,
        sobrenome,
        idade,
        curso
    });
    return res.status(201).json();
};

const deletarAluno = (req, res) => {
    const { id } = req. params;

    if(!id){
        return res.status(400).json({mensagem: "Necessário um ID válido"})
    };
    
    const excluido = alunos.find((aluno) => {
        return aluno.id === Number(id);
    });

    if(!excluido){
        return res.status(404).json({mensagem: "Não encontrado"});
    }
    alunos = alunos.filter((aluno) => {
        return aluno.id != Number(id);
    });
    res.status(200).json(excluido);
}

module.exports = {
    listarAlunos,
    acharId,
    cadastrarAluno,
    deletarAluno
};