const produtos = require("../bancodedados/produtos");
const {getStateFromZipcode} = require("utils-playground");
const taxas = require("../bancodedados/taxasfretes");

const metodos = {
    listarProdutos: (req, res) => {
        return res.status(200).json(produtos);
    },
    acharId: (req, res) => {
        const {idProduto} = req.params;
        const produtoEncontrado = produtos.find((produto) => {
            return produto.id === Number(idProduto);
        });

        if(!produtoEncontrado){
            return res.status(404).json("Produto não encontrado")
        };

        return res.status(200).json(produtoEncontrado);

    },
    calcularFrete: async (req, res) => {
        const {idProduto, cep} = req.params;
        const produtoEncontrado = produtos.find((produto) => {
            return produto.id === Number(idProduto);
        });

        if(!produtoEncontrado){
            return res.status(404).json("Produto não encontrado")
        };
        let taxaFrete = 0.12;
       
        try{
            const estado = await getStateFromZipcode(cep);

            tem10 = taxas.estados10.some((item) => {
                 return  item === estado;
            });
            tem15 = taxas.estados15.some((item) => {
                return item === estado;
            })
            if(tem10){
                taxaFrete = 0.10;
            };
            if(tem15){
                taxaFrete = 0.15;
            };

        let valorFrete = produtoEncontrado.valor * taxaFrete;
            

            return res.status(200).json({
                produtoEncontrado,
                "estado": estado,
                "frete": valorFrete
            });
            
           

        }catch(erro){
            console.log(erro);
        }
    }
};

module.exports = metodos;