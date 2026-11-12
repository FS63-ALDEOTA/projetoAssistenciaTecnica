

const getClientes = (req, res) => {
    try {
        // linha que busca os dados no banco 
        return res.status(200).send("Busca todos os clientes")
    } catch (error) {
        return res.status(500).send("Erro na requisição", error)
    }
}

const getClienteById = (req, res) => {
    try {
        // linha que busca os dados no banco 
        return res.status(200).send("Busca 1 cliente pelo Id")
    } catch (error) {
        return res.status(500).send("Erro na requisição", error)
    }
}

const createCliente = (req, res) => {
    try {
        // linha que busca os dados no banco 
        return res.status(201).send("Cadastra 1 cliente")
    } catch (error) {
        return res.status(500).send("Erro na requisição", error)
    }

}

const updateCliente = (req, res) => {
    try {
        // linha que busca os dados no banco 
        return res.status(200).send("Altera 1 cliente")
    } catch (error) {
        return res.status(500).send("Erro na requisição", error)
    }

}

export {
    getClientes,
    getClienteById,
    createCliente,
    updateCliente
}