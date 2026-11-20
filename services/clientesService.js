import * as clientesRepository from '../repositories/clientesRepository.js'

const createCliente = async({nome,cpf,email,telefone,endereco_id}) => {

    const cliente = await clientesRepository.getClienteByEmail(email)
    if (cliente.rowCount > 0) {
        const error = new Error("Email já cadastrado")
        error.status = 409
        throw error
    }
    await clientesRepository.createCliente({nome,cpf,email,telefone,endereco_id})
}

export {
    createCliente
}