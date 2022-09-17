const produtos = require('../bancodedados/produtos')
const {getStateFromZipcode} = require('utils-payground') 

 const listarProdutos=  (req,res)=>{
     return res.json(produtos)
 }

 const detalharProduto= (req,res) =>{
     const {idProduto} = req.params;
     
     const produto=produtos.find((produto)=>{
         return produto.id===Number(idProduto)
     })

     if (!produto) {
        return res.status(404).json({ mensagem: 'Produto não encontrado' });
    }

     return res.json(produto)
 }

 const calculoDeFret =(req, res)=>{
     const {idProduto,cep}= req.params
     const produto=produtos.find((produto)=>{
        return produto.id===Number(idProduto)
    })

    if (!produto) {
       return res.status(404).json({ mensagem: 'Produto não encontrado' });
   }
    
   const estado= await  getStateFromZipcode(cep)
   /*nota :  getStateFromZipcode é uma função adiquirida na utilis-playground. essa função recebe um numero, e esse numero
   é o cep informado no req.params.é possivel inferir que essa função realiza essa  ação e requer um parametro (cep) pelo 
   nome da função ' get state from zipcode'.essa função retorna  uma UF que sera guardada na variavel estado*/
    let valorFrete=0
    if (estado === 'SP' || estado === 'RJ') {
        valorFrete = produto.valor * 0.15;

        return res.json({
            produto,
            estado,
            frete: valorFrete
        })
    }
    if (estado === 'BA' || estado === 'SE' || estado === 'AL' || estado === 'PE' || estado === 'PB') {
        valorFrete = produto.valor * 0.1;

        return res.json({
            produto,
            estado,
            frete: valorFrete
        })
    }
    valorFrete = produto.valor * 0.12;

    return res.json({
        produto,
        estado,
        frete: valorFrete
    })
        
 }

 module.exports = {
    buscarProdutos,
    detalharProduto,
    calcularFrete
}
