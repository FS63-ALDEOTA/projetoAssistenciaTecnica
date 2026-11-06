import client from "../db.js"

const getFuncionarios = (req, res) => {
    try{
        res.status(200).send("Busca todos os funcionários")
    } catch (error){
        res.status(500).send("Erro na requisição", error)
    }
}

const getFuncionariobyId = async (req, res) => {
    try{
        const {id} = req.params
        const funcionario = await client.query('SELECT * FROM funcionarios WHERE id = $1', [id])
        res.status(200).send(funcionario.rows)
    } catch (error){
        res.status(500).send("Erro na requisição", error)
    }
}

const createFuncionario = async (req, res) => {
    try{
        const {email, cpf, nome, telefone, endereco_id, cargo_id} = req.body
        const funcionario = await client.query('INSERT INTO funcionarios (nome, cpf, email, telefone, endereco_id, cargo_id) VALUES ($1, $2, $3, $4, $5, $6);', [nome, cpf, email, telefone, endereco_id, cargo_id])
        res.status(201).send(funcionario.rows)
    } catch (error){
        res.status(500).send({mensagem: "Erro na requisição", error})
    }
}

const updateFuncionario = (req, res) => {
    try{
        res.status(201).send("Altera 1 Funcionário")
    } catch (error){
        res.status(500).send("Erro na requisição", erro)
    }
}

export {
    getFuncionariobyId,
    getFuncionarios,
    createFuncionario,
    updateFuncionario
}