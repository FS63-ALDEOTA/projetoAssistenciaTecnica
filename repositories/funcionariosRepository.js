import Funcionarios from "../models/Funcionarios.js"

const getFuncionariosByEmail = async(email) => {
    return await Funcionarios.findAll({
        where:{email: email}
    })
}
const createFuncionario = async({nome, cpf, email, telefone, endereco_id, cargo_id}) => {
    return await Funcionarios.create({nome, cpf, email, telefone, endereco_id, cargo_id})
}
export{
    createFuncionario,
    getFuncionariosByEmail
}