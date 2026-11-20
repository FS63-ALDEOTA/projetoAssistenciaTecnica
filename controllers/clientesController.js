import client from "../db.js"
import * as clientesService from '../services/clientesService.js'

const getClientes = async (req, res) => {
    try {
        const clientes = await client.query('SELECT * FROM clientes')
        return res.status(200).send(clientes.rows)
    } catch (error) {
        return res.status(500).send("Erro na requisição", error)
    }
}

const getClienteById = async (req, res) => {
    try {
        console.log("INICIO REQUISIÇÃO getClienteById")
        const { id } = req.params
        if (!isNaN(Number(id))) {
            return res.status(400).send("Id precisa ser um número")
        }
        console.log("PASSOU VERIFICAÇÃO REQUISIÇÃO getClienteById")
        const cliente = await client.query('SELECT * FROM cliente WHERE id = $1', [id])
        return res.status(200).send(cliente.rows)
    } catch (error) {
        return res.status(500).send({ mensagem: "Erro na requisição", error: error.message })
    }
}

const createCliente = async (req, res) => {
    try {
        // 1. Recebe os dados da requisição
        const { email, cpf, nome, telefone, endereco_id } = req.body
        // 2. Validação de entrada 
        if (!nome || !cpf || !email) {
            return res.status(400).send({ mensagem: "Verifique os campos obrigatórios" })
        }
        //3. Passou na validação é encaminhado para próx. camada
        await clientesService.createCliente({email, cpf, nome, telefone, endereco_id})
        return res.status(201).send({mensagem: "Cliente criado com sucesso"})
    } catch (error) {
        const errorTratamento = error.status ? res.status(error.status).send({ mensagem: error.message }) :
         res.status(500).send({ mensagem: "Erro na requisição", error })
        return errorTratamento
    }

}

const updateCliente = async (req, res) => {
    try {
        const { id } = req.params
        const { email, cpf, nome, telefone, endereco_id } = req.body
        const cliente = await client.query('UPDATE clientes SET nome = $1, cpf = $2, email = $3, telefone = $4, endereco_id = $5 WHERE id = $7;', [nome, cpf, email, telefone, endereco_id, id])
        return res.status(200).send(cliente.rows)
    } catch (error) {
        return res.status(500).send({ mensagem: "Erro na requisição", error: error.message })
    }

}

export {
    getClientes,
    getClienteById,
    createCliente,
    updateCliente
}