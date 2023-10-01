const { listarPokemons, detalharPokemon } = require("utils-playground");

const metodos = {
    listarPokemons:async (req, res) => {
        try{
            const lista = await listarPokemons(1);

            return res.status(200).json(lista);

         }catch(erro){
            console.log(erro);
        }
    },
    acharId:async (req, res) => { 
        try{
            const { idPoke } = req.params;
            
            const {id, name, height, weight,base_experience, forms, 
                abilities, species} = await detalharPokemon(idPoke);
            
            const descricaoFiltrada = {id, name, height, weight,base_experience, forms, 
                abilities, species};
            
            return res.status(200).json(descricaoFiltrada);


        }catch(erro){
            console.log(erro);
        }
    }
};

module.exports = metodos;