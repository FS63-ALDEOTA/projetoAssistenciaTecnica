import client from "../db.js";

const getOrdemServicos = (req, res) => {
  try {
    return res.status(200).send("Busca todas as Ordem de Serviços");
  } catch {
    return res.status(500).send("erro");
  }
  // res.send ("Busca todos os funcionários")
};

const getOrdemServicoById = async (req, res) => {
  try {
    const { id } = req.params;
    const ordemServico = await client.query("SELECT * FROM ordem_servico WHERE id = $1", [id]);
    return res.status(200).send(ordemServico.rows);
  } catch (error) {
    return res.status(500).send("Erro na requisição", error);
  }
};

const createOrdemServico = async (req, res) => {
  try {
    const { cliente_id, status_id, funcionario_id, data_entrada } = req.body;
    const ordemServico = await client.query("INSERT INTO ordem_servico (cliente_id, status_id, funcionario_id, data_entrada) VALUES ($1,$2,$3,$4);", [cliente_id, status_id, funcionario_id, data_entrada]);
    return res.status(201).send(ordemServico.rows);
  } catch (error) {
    // res.status(500).send("erro de gravação da Ordem Servico", error.message);
    return res.status(500).json({
      mensagem: "erro de gravação da Ordem Servico",
      erro_real: error.message,
    });
  }
};

const updateOrdemServico = async (req, res) => {
  try {
    const { id } = req.params;

    const { cliente_id, status_id, funcionario_id, data_entrada, data_saida } = req.body;

    const ordemServicoAtualizada = await client.query("UPDATE ordem_servico SET cliente_id = $1, status_id= $2, funcionario_id = $3, data_entrada=$4, data_saida=$5 where id=$6", [cliente_id, status_id, funcionario_id, data_entrada, data_saida, id]);
    return res.status(200).send(ordemServicoAtualizada.rows);
  } catch (error) {
    // res.status(500).send("erro de gravação da Ordem Servico", error.message);
    return res.status(500).json({
      mensagem: "erro de gravação da Ordem Servico",
      erro_real: error.message,
    });
  }

  // res.status(201).send ("cadastra OrdemServico")
};

export { getOrdemServicos, getOrdemServicoById, createOrdemServico, updateOrdemServico };
