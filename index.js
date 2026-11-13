// import express from 'express'  - ESmodule (Forma nova)
// const express = require('express') - commonJS (Forma antiga)

import express from 'express'
import clientesRoute from './routes/clientesRoute.js'
import equipamentosRoute from './routes/equipamentosRoute.js'
import funcionariosRoute from './routes/funcionariosRoute.js'
import ordemServicosRoute from './routes/ordemServicosRoute.js'
import servicosRoute from './routes/servicosRoute.js'
import itensOrdemServicosRoute from './routes/itensOrdemServicosRoute.js'
import client from './db.js'

const app = express()

// função que usa alguma condição
app.use(express.json()) // converte as funções do express para objeto e usa

// função que chama API passando requisição com regras de :método e rota
app.get("/", (req, res)=> {
    res.send("Online")
})
app.use("/clientes",  clientesRoute)
app.use("/funcionarios", funcionariosRoute)
app.use("/equipamentos", equipamentosRoute)
app.use("/ordem-servicos", ordemServicosRoute)
app.use("/itens-ordem-servicos", itensOrdemServicosRoute)
app.use("/servicos",servicosRoute)
app.use((req, res)=> {
  res.send("Rota não encontrada")
})

// função que roda servidor
app.listen(3000, () => {
    console.log("Servidor rodando na http://localhost:3000")
})