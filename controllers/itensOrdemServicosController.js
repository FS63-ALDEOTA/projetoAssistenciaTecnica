import client from "../db.js";

const getItensOrdemServicosByOSId = async (os_id) => {
  try {
    const itensOrdemServico = await client.query("SELECT * FROM itens_ordem_servico WHERE os_id = $1;", [os_id]);
    return itensOrdemServico;
  } catch (error) {
    return "Erro ao buscar itens de ordem de serviço";
  }
};

// const getItemOrdemServicoByOSId = async (os_id) => {
//   try {
//     // const { id } = os_id;
//     const itemOS = await client.query(
//       `
//       SELECT ios.os_id,
//       eq.descricao AS descricao,
//       st.descricao AS descicao,
//       fun.nome AS funcionario,
//       serv.descricao AS servico

//       FROM itens_ordem_servico ios
//       LEFT JOIN equipamentos eq ON ios.equipamento_id = eq.id
//       LEFT JOIN status st on ios.status_id = st.id
//       LEFT JOIN funcionarios fun on ios.funcionario_id = fun.id
//       LEFT JOIN servicos serv on ios.servico_id = serv.id
//       WHERE ios.os_id = $1`,
//       [os_id],
//     );
//   } catch (error) {
//     return res.status(500).send({ mensagem: "Erro na requisição", error: error.message });
//   }
// };
// =======================================================
// const getItemOrdemServicoByOSId = async (os_id) => {
//   const itemOS = await client.query(
//     `SELECT ios.os_id,
//       eq.descricao AS equipamento,
//       st.descricao AS situacao,
//       fun.nome AS funcionario,
//       serv.descricao AS servico
//     FROM itens_ordem_servico ios
//     LEFT JOIN equipamentos eq ON ios.equipamento_id = eq.id
//     LEFT JOIN status st ON ios.status_id = st.id
//     LEFT JOIN funcionarios fun ON ios.funcionario_id = fun.id
//     LEFT JOIN servicos serv ON ios.servico_id = serv.id
//     WHERE ios.os_id = $1`,
//     [os_id],
//   );
//   return itemOS;
// };

const getItemOrdemServicoByOSId = async (os_id) => {
  try {
    const itemOS = await client.query(
      `SELECT ios.os_id,
        eq.descricao AS equipamento,
        st.descricao AS situacao,
        fun.nome AS funcionario,
        serv.descricao AS servico
      FROM itens_ordem_servico ios
      LEFT JOIN equipamentos eq ON ios.equipamento_id = eq.id
      LEFT JOIN status st ON ios.status_id = st.id
      LEFT JOIN funcionarios fun ON ios.funcionario_id = fun.id
      LEFT JOIN servicos serv ON ios.servico_id = serv.id
      WHERE ios.os_id = $1`,
      [os_id],
    );
    return itemOS;
  } catch (error) {
    console.error("Erro ao buscar itens da OS:", error.message);
    throw error; // Repassa o erro para o try/catch da rota que chamou essa função
  }
};

const getItemOrdemServicoById = async (req, res) => {
  try {
    const { id } = req.params;
    const ordemServico = await client.query("SELECT * FROM ordem_servico WHERE id = $1", [id]);
    return res.status(200).send(ordemServico.rows);
  } catch (error) {
    return res.status(500).send("Erro na requisição", error);
  }
};

const createItemOrdemServico = async (req, res) => {
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

const updateItemOrdemServico = async (req, res) => {
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

export { getItemOrdemServicoById, getItemOrdemServicoByOSId, createItemOrdemServico, updateItemOrdemServico };
