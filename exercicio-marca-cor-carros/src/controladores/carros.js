const carros = require("../bancodedados");

const buscarId = (req, res) => {
    let buscaId = carros.find((carro) => {
        return Number(req.params.id) === carro.id;
    });
    res.send(buscaId);
};

const buscarCorMarca = (req, res) =>{
    const {cor, marca} = req.query;
    let resultado = carros;

    if(cor){
        resultado = resultado.filter((carro) => {
            return carro.cor === cor;
        });
    }
    if(marca){
        resultado = resultado.filter((carro) => {
            return carro.marca === marca;
        })
    }
    res.send(resultado)
}

module.exports = {
    buscarId,
    buscarCorMarca
};