// import express from 'express' 
// const express = require('express') - commonJS (antiga)

import express from 'express';
import funcionariosRoute from './routes/funcionariosRoute.js'

const app = express();

// função que usa alguma condição

app.use(express.json()) // converte as funções do express para objeto

function buscarClientes (req,res) {
    res.send("resposta da função que busca cliente")
}

// app.get("/",() => {})



    // funçaõ que chama API passando requisição com regras de médoto e toda

app.get("/clientes", buscarClientes);

app.use("/funcionarios", funcionariosRoute);

app.get("/", (req, res) =>{
    res.send ("online")
})

app.use((req, res) =>{
    res.send ("Rota não encontrada")
})






// função para iniciar o servidor
app.listen(3000,()=>{
    console.log ("Servidor rodando na http://localhost:3000")
})