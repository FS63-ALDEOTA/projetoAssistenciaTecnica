const getServicos = (req, res) => {
    try{
    res.status(200).send("Busca todos os servicos")
    } catch {
    res.status(500).send("Erro de requisição", error)
    }
}

const getServicosById = (req, res) => {
    try{
        res.status(200).send("Busca todos os servicos pelo Id")
    } catch {
        res.status(500).send("Erro de requisição", error)
    }
}

const createServicos = async (req, res) => {
    try{
        const {id, descricao} = res.body
        const servicos = await client.query ('INSERT INTO servicos (id, descricao) VALUES ($1, $2);', [id, servicos])
        res.status(201).send("Cadastro 1 Servico")
    } catch {
        res.status(500).send("Erro na requisição", error)
    }
}

const uptadeServicos = async (req, res) => {
    try{
        const {id} = req.params
        await client.query(
        'SELECT * FROM servicos WHERE id = $1', [id])
        res.status(201).send(servicos.rows)
    } catch {
        res.status(500).send("Erro na requisição", error)
    }
}

export {
    getServicos,
    getServicosById,
    createServicos,
    uptadeServicos
}