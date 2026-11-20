import client from '../config/db.js'

const getClienteByEmail = async (email) => {
    return await client.query('SELECT * FROM clientes WHERE email = $1', [email])
}

const createCliente = async ({nome,cpf,email,telefone,endereco_id}) => {
return await client.query('INSERT INTO clientes (nome, cpf, email, telefone, endereco_id) VALUES ($1, $2, $3, $4, $5);', [nome, cpf, email, telefone, endereco_id])

return cliente.rows
}

export {
    createCliente
}