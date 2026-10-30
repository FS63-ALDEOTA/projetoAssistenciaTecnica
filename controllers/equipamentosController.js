const getEquipamentosByClient = (req, res) => {
    try {
        res.status(200).send("Busca todos os equipamentos pelo Id do cliente.");
    } catch (error) {
        res.status(500).send("Erro na requisição.", error)
    }
}

const getEquipamentoById = (req, res) => {
    try {
        res.status(200).send("Busca 1 equipamento pelo Id do cliente.");
    } catch (error) {
        res.status(500).send("Erro na requisição.", error)
    }
}

const createEquipamento = (req, res) => {
    try {
        res.status(201).send("Cadastra 1 equipamento.");
    } catch (error) {
        res.status(500).send("Erro na requisição.", error)
    }
}

const updateEquipamento = (req, res) => {
    try {
        res.status(200).send("Altera 1 equipamento.");
    } catch (error) {
        res.status(500).send("Erro na requisição.", error.message)
    }
}

const deleteEquipamento = (req, res) => {
    try {
        res.status(200).send("Deleta 1 equipamento.");
    } catch (error) {
        res.status(500).send("Erro na requisição.", error.message)
    }
}