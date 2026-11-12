import client from "../db.js"

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
        const {id} = req.params
        const servicos = await client.query('SELECT * FROM servicos WHERE id = $1', [id])
        return res.status(200).send(servicos.rows)
    } catch (error) {
        return res.status(500).send({mensagem:"Erro de requisição", error: error.message})
    }
}

const createServicos = async (req, res) => {
    try{
        const {descricao} = req.body
        const servicos = await client.query ('INSERT INTO servicos (descricao) VALUES ($1);', [ descricao])
        return res.status(201).send(servicos.rows)
    } catch (error) {
        return res.status(500).send("Erro na requisição", error)
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