import Clientes from "../models/Clientes.js"

const getClientByEmail = async (email) => {
    return await Clientes.findAll({
        where:{ email: email}
    })
}


const createCliente = async ({nome, cpf, email, telefone, endereco_id}) => {
    return await Clientes.create({nome, cpf, email, telefone, endereco_id})
}


export {
    createCliente,
    getClientByEmail
}