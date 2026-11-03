const getFuncionarios = (req, res) => {
    try{
        res.status(200).send("Busca todos os funcionários")
    } catch (error){
        res.status(500).send("Erro na requisição", error)
    }
}

const getFuncionariobyId = (req, res) => {
    try{
        res.status(200).send("Busca 1 Funcionário pelo ID")
    } catch (error){
        res.status(500).send("Erro na requisição", error)
    }
}

const createFuncionario = (req, res) => {
    try{
        res.status(201).send("Cadastro 1 Funcionário")
    } catch (error){
        res.status(500).send("Erro na requisição", error)
    }
}

const updateFuncionario = (req, res) => {
    try{
        res.status(201).send("Altera 1 Funcionário")
    } catch (error){
        res.status(500).send("Erro na requisição", erro)
    }
}