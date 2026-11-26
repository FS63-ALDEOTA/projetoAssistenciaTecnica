import Servicos from "../models/Servicos.js"

const getServicosByDescricao = async (descricao) => {
    return await Servicos.findAll({
        where:{descricao: descricao}
    })
}

const createServico = async ({descricao}) => {
    return await Servicos.create({descricao})
}

export {
    createServico,
    getServicosByDescricao
}