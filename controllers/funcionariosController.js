import client from "../db.js"

const getFuncionarios = async(req, res) => {
    try{
        const funcionarios = await client.query('SELECT * FROM funcionarios')
        return res.status(200).send(funcionarios.rows)
    } catch (error){
        return res.status(500).send("Erro na requisição", error)
    }
}

const getFuncionariobyId = async (req, res) => {
    try{
        console.log("INICIO REQUISIÇÃO getFuncionariobyId")
        const {id} = req.params
        if (!isNaN(Number(id))) {
          return res.status(400).send("Id precisa ser um número")
        }
        console.log("PASSOU VERIFICAÇÃO REQUISIÇÃO getFuncionariobyId")
        const funcionario = await client.query('SELECT * FROM funcionarios WHERE id = $1', [id])
        return res.status(200).send(funcionario.rows)
    } catch (error){
       return res.status(500).send({mensagem:"Erro na requisição", error: error.message})
    }
}

const createFuncionario = async (req, res) => {
    try{
        const {email, cpf, nome, telefone, endereco_id, cargo_id} = req.body
        const funcionario = await client.query('INSERT INTO funcionarios (nome, cpf, email, telefone, endereco_id, cargo_id) VALUES ($1, $2, $3, $4, $5, $6);', [nome, cpf, email, telefone, endereco_id, cargo_id])
        return res.status(201).send(funcionario.rows)
    } catch (error){
        return res.status(500).send({mensagem: "Erro na requisição", error})
    }
}

const updateFuncionario = async(req, res) => {
    try{
        const {id} = req.params
        const {email, cpf, nome, telefone, endereco_id, cargo_id} = req.body
        const funcionario = await client.query('UPDATE funcionarios SET nome = $1, cpf = $2, email = $3, telefone = $4, endereco_id = $5, cargo_id = $6 WHERE id = $7;', [nome, cpf, email, telefone, endereco_id, cargo_id, id])
        return res.status(200).send(funcionario.rows)
    } catch (error){
        return res.status(500).send({mensagem:"Erro na requisição", error: error.message})
    }
}

export {
    getFuncionariobyId,
    getFuncionarios,
    createFuncionario,
    updateFuncionario
}