let {livros, idLivros} = require("../dados/bancodedados");
const { param } = require("../roteador");

const metodos = { 
    consultarColecao: (req, res) =>{
       return res.status(200).json(livros);
    },
    consultarLivro: (req, res) => {
        const { id } = req.params;
        const livroBuscado = livros.find((livro) => {
            return livro.id === Number(id);
        });

        if(!livroBuscado){
            return res.status(404).json({"mensagems": "Id não encontrado."})
        };
        return res.status(200).json(livroBuscado)
    },
    adicionarLivro: (req, res) => {
        let {titulo, autor, ano, numPaginas} = req.body;
        if(!titulo || !autor || !ano || !numPaginas){
            return res.status(400).json("Está faltando informações")
        };
        let livroAdicionado = {
            id: idLivros++,
            titulo,
            autor,
            ano,
            numPaginas
        };
        livros.push(livroAdicionado);
        return res.status(201).json(livroAdicionado);
    },
    substituirLivro: (req, res) => {
        const {id} = req.params;
        if(!id){
            return res.status(400).json({"mensagem": "Informe um id valido."})
        };
        let livroBusca = livros.find((livro) => {
            return livro.id === Number(id);
        });
        if(!livroBusca){
            return res.status(404).json({"mensagem": "Livro não encontrado"})
        };
        const indiceTroca = livros.indexOf(livroBusca);
        const {titulo, autor, ano, numPaginas} = req.body;
        const novoLivro = {
            id,
            titulo,
            autor,
            ano,
            numPaginas
        };
        livros.splice(indiceTroca, 1, novoLivro);
        return res.status(201).json("Livro substituido");

    },
    alterarLivro: (req, res) => {
        const { id } = req.params;
        let livroAlterado = livros.find((livro) =>{
            return livro.id === Number(id);
        });
        if(!livroAlterado){
            return res.status(404).json({"mensagem": "Não existe livro a ser alterado para o ID informado."})
        };
        const indiceLivro = livros.indexOf(livroAlterado);
        const { titulo, autor, ano, numPaginas } = req.body;

        if(titulo){
            livroAlterado.titulo = titulo;
        };
        if(autor){
            livroAlterado.autor = autor;
        };
        if(ano){
            livroAlterado.ano = ano;
        };
        if(numPaginas){
            livroAlterado.numPaginas = numPaginas;
        };
        if(!titulo && !autor && !ano &&!numPaginas){
            return res.status(400).json({"mensagem": "nenhuma informação valida para substituicao."});
        };
        livros.splice(indiceLivro, 1, livroAlterado);
        res.status(200).json("livro alterado")

    },
    removerLivro: (req, res) => {
        const { id } = req.params;
        const livroApagado = livros.find((livro) => {
            return livro.id === Number(id);
        });
        if(!livroApagado){
            return res.status(404).json({"mensagem": "livro não localizado"})
        };
        livros = livros.filter((livro) => {
            return livro != livroApagado;
        });
        return res.status(200).json({ "mensagem": "Livro apagado"})

    }
};

module.exports = metodos;