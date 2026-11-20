import * as clientesRepository from '../repositories/clientesRepository.js'

const createCliente = async ({nome, cpf, email, telefone, endereco_id}) => {
    // Lógica : Verificar se cliente já está cadastro para não ter duplicidade
    const cliente = await clientesRepository.getClientByEmail(email)
    console.log(cliente.rowCount > 0)
    if (cliente.rowCount > 0) {
        console.log("Entrou no if do 409")
        const error = new Error("Email já existe")
        error.status = 409 //conflict
        throw error
    }
    // em caso de cliente ser falso, significa que não tem cadastro então posso seguir para prox camada
    await clientesRepository.createCliente({nome, cpf, email, telefone, endereco_id})
}

export {
    createCliente
}