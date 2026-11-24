import OrdemServicos from "../models/OrdemServico.js";



const createordemServicos = async ({
  cliente_id,
  cpf,
  email,
  telefone,
  endereco_id,
}) => {
  return await ordem_servico.create({ nome, cpf, email, telefone, endereco_id });
};
