import client from "../db.js"
import * as ServicosService from '../services/servicosService.js'

const getServicos = async (req, res) => {
    try{
    const servicos = await client.query('SELECT * FROM servicos')
    return res.status(200).send(servicos.rows)
    } catch (error) {
    return res.status(500).send("Erro de requisição", error)
    }
}

const getServicosById = async (req, res) => {
    try{
        console.log("INICIO REQUISIÇÃO getServicosById")
        const {id} = req.params
        if (!isNaN(Number(id))) {
            return res.status(400).send("Id precisa ser um número")
        }
        console.log("PASSOU VERFICAÇÃO REQUISIÇÃO getServicosById")
        const servicos = await client.query('SELECT * FROM servicos WHERE id = $1', [id])
        return res.status(200).send(servicos.rows)
    } catch (error) {
        return res.status(500).send({mensagem:"Erro de requisição", error: error.message})
    }
}

const createServicos = async (req, res) => {
    try {
        const {descricao} = req.body

        if (!descricao) {
            return res.status(400).send({mensagem: "Verifique os campos obrigatórios"})
        }
        await ServicosService.createServicos({descricao})
        return res.status(201).send({mensagem: "Serviço criado com sucesso"})
    } catch (error) {
        const errorTratamento = error.status ? res.status(error.status).send({mensagem: error.message}) : res.status(500).send({mensagem: "Erro na requisição", error})
        return errorTratamento
    }
}

const updateServicos = async (req, res) => {
    try{
        const {id} = req.params
        const {descricao} = req.body
        const servico = await client.query('UPDATE servicos SET descricao = $2 WHERE id = $1;', [id, descricao])
        return res.status(200).send(servico.rowCount)
    } catch (error) {
        return res.status(500).send({mensagem: "Erro na requisição", error: error})
    }
}

export {
    getServicos,
    getServicosById,
    createServicos,
    updateServicos
}