const express=require('expres')
const {pokemons,pokemon} =require('./controladorespokemons')
const rotas=express

rotas.get('/pokemon',pokemons)
rotas.get('pokemon/idOuNome',pokemon);

module.exports=rotas;