import * as ordemServicosRepository from '../repositories/ordemServicosRepository.js'

const createOrdemServicos = async ({
  cliente_id,
  status_id,
  funcionario_id,
  data_entrada,
}) => {
   await ordemServicosRepository.createOrdemServicos({
    cliente_id,
    status_id,
    funcionario_id,
    data_entrada,
  });
};

export {
    createOrdemServicos
}