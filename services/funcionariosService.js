import * as funcionariosRepository from '../repositories/funcionariosRepository.js'
const createFuncionario = async({nome, cpf, email, telefone, endereco_id, cargo_id}) => {
    const funcionario = await funcionariosRepository.getFuncionariosByEmail(email)
    console.log(funcionario.rowCount)
    if (funcionario.rowCount > 0){
        console.log("Entrou no if do 409")
        const error = new Error("Email já existe")
        error.status = 409
        throw error
    }
    await funcionariosRepository.createFuncionario({nome, cpf, email, telefone, endereco_id, cargo_id})
}
export {
    createFuncionario
}