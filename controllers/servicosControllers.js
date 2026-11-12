import client from "../db.js"

const getServicos = (req, res) => {
    try{
    res.status(200).send("Busca todos os servicos")
    } catch (error) {
    res.status(500).send("Erro de requisição", error)
    }
}

const getServicosById = async (req, res) => {
    try{
        const {id} = req.params
        const servicos = await client.query('SELECT * FROM servicos WHERE id = $1', [id])
        res.status(200).send(servicos.rows)
    } catch (error) {
        res.status(500).send({mensagem:"Erro de requisição", error: error.message})
    }
}

const createServicos = async (req, res) => {
    try{
        const {id, descricao} = req.body
        const servicos = await client.query ('INSERT INTO servicos (id, descricao) VALUES ($1, $2);', [id, descricao])
        res.status(201).send("Cadastro 1 Servico")
    } catch (error) {
        res.status(500).send("Erro na requisição", error)
    }
}

const uptadeServicos = (req, res) => {
    try{
        res.status(201).send("Altera 1 Funcionário")
    } catch (error) {
        res.status(500).send("Erro na requisição", error)
    }
}

export {
    getServicos,
    getServicosById,
    createServicos,
    uptadeServicos
}