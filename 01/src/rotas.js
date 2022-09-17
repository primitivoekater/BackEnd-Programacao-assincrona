const express = require('express')
const rotas = express()
const tarefas = require('./contoladores/tarefas')



rotas.get('/produtos', tarefas.listarProdutos)
rotas.get('/produtos/:idProduto',tarefas.detalharProduto)
rotas.get('/produtos/:idProduto/frete/:cep', intermediarios.idInvalido, alunos.obterAlunos)

module.exports = rotas