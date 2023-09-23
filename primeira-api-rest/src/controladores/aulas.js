let { aulas, instrutores, identificadorAula } = require("../bancodedados")

const cadastrarAula = (req, res) => {
        const { idInstrutor } = req.params;
        const {titulo, descricao} = req.body;

        const instrutor = instrutores.find((instrutor) => {
            return instrutor.id === Number(idInstrutor);
        });

        if(!instrutor){
            return res.status(404).json({mensagem: "O instrutor não foi encontrado"})
        };

        const aula = { 
            id: identificadorAula++,
            instrutor_id: Number(idInstrutor),
            titulo,
            descricao
        }

        aulas.push(aula);

        return res.status(201).json(aula);

};
const listarAulas = (req, res) => {
    return res.status(200).json(aulas);
};

const obterAula = (req, res) => {
    const {id} = req.params

    const aula = aulas.find((aula) => {
        return aula.id === Number(id); 
    });

    if(!aula){
        return res.status(404).json({mensagem: "Aula não encontrada"});
    }

    return res.status(200).json(aula);
};

const obterAulasInstrutor = (req, res) => {
    const {idInstrutor} = req.params

    const aulasInstrutor = aulas.filter((aula) => {
        return aula.instrutor_id === Number(idInstrutor); 
    });

    if(aulasInstrutor.length === 0){
        return res.status(404).json({mensagem: "Esse instrutor não tem aulas cadastradas"});
    };

    return res.status(200).json(aulasInstrutor);
}


module.exports = {
    cadastrarAula,
    listarAulas,
    obterAula,
    obterAulasInstrutor
}