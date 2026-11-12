const getEquipamentosByClient = (req, res) => {
    try {
        return res.status(200).send("Busca todos os equipamentos pelo Id do cliente.");
    } catch (error) {
        return res.status(500).send("Erro na requisição.", error)
    }
}

const getEquipamentoById = async (req, res) => {
    try{
        const {id} = req.params
        const equipamento = await client.query('SELECT * FROM equipamentos WHERE id = $1', [id])
        return res.status(200).send(equipamento.rows)
    } catch (error){
        return res.status(500).send("Erro na requisição", error)
    }
}

const createEquipamento = async (req, res) => {
    try {
        const {cliente_id, tipo_id, marca_id, cor, tamanho, ano, serie, observacao} = req.body
        const equipamentos = await client.query('INSERT INTO equipamentos (cliente_id, tipo_id, marca_id, cor, tamanho, ano, serie, observacao) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)', [cliente_id, tipo_id, marca_id, cor, tamanho, ano, serie, observacao])
        return res.status(201).send(equipamentos.rows);
    } catch (error) {
        return res.status(500).send("Erro na requisição.", error)
    }
}

const updateEquipamento = (req, res) => {
    try {
        return res.status(200).send("Altera 1 equipamento.");
    } catch (error) {
        return res.status(500).send("Erro na requisição.", error.message)
    }
}

const deleteEquipamento = (req, res) => {
    try {
        return res.status(200).send("Deleta 1 equipamento.");
    } catch (error) {
        return res.status(500).send("Erro na requisição.", error.message)
    }
}

export {
    getEquipamentosByClient,
    getEquipamentoById,
    createEquipamento,
    updateEquipamento,
    deleteEquipamento
}