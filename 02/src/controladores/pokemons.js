const {listarPokemons,detalharPokemon}= require('utilisplayground')

const pokemons =async (req,res)=>{
    const{pagina}=req.query
    const listarPokemons= await listarPokemons(pagina??1)
    return res.json(listarPokemons)
}

const pokemon= async(req,res)=>{
    const {idOuNome}= req.params
    const pokemonEncontrado=  await detalharPokemon(idOuNome)
    const { id, name, height, weight, base_experience, forms, abilities, species } = pokemonEcontrado; 
    /* o valor de idOuNome é um parametro obtido pelo o que esta contido  no html(req.params). novamente, é preciso aguardar
    o retorno  da função detalharPokemon, que recebe como valor necessario o idOuNome, que  ja foi obtido pelo req.paramas; 
    e isso é  guardado na variavel -pokemonEncontado-. apos isso ,  todas as informações requeridas na proxima linha, ja estão contidas
    no valor que é retornado da API e que esta retido em pokemonEncontrado*/
    return res.json({ id, name, height, weight, base_experience, forms, abilities, species });
}
module.exports = {
    pokemons,
    pokemon
}