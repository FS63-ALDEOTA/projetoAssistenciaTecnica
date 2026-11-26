import * as servicosRepository from "../repositories/servicosRepository.js"

const createServico = async ({descricao}) => {
    const servico = await servicosRepository.getServicoByDescricao(descricao)
    console.log(servico.length > 0)
    if (servico.length > 0) {
        console.log("Entrou no if do 409")
        const error = new Error("Serviço já existe")
        error.status = 409
        throw error
    }
    await servicosRepository.createServico({descricao})
}

export {
    createServico
}