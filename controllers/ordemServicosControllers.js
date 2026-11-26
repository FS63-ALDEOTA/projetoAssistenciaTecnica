import client from "../db.js";
// import { getItensOrdemServicosByOSId } from "./itensOrdemServicosController.js";
import { getItemOrdemServicoByOSId } from "./itensOrdemServicosController.js";

const getOrdemServicos = async (req, res) => {
  try {
    const ordemServico = await client.query("SELECT * FROM ordem_servico;");
    return res.status(200).send(ordemServico.rows);
  } catch {
    return res.status(500).send("erro");
  }
  // res.send ("Busca todos os funcionários")
};

const getOrdemServicoById = async (req, res) => {
  try {
    console.log("Iniciou a requisição getOrdemServicoById");
    const { id } = req.params;
    const ordemServico = await client.query(
      `select os.id,
      cl.nome AS cliente,
      st.descricao AS situacao,
      fun.nome AS funcionario,
      os.data_entrada,
      os.data_saida,
      os.valor_total_os
      FROM ordem_servico os
      LEFT JOIN clientes cl ON os.cliente_id = cl.id
      LEFT JOIN funcionarios fun ON os.funcionario_id = fun.id
      LEFT JOIN status st ON os.status_id = st.id WHERE os.id=$1`,
      [id],
    );
    console.log(ordemServico);
    // const itensOrdemServico = await getItensOrdemServicosByOSId(id);
    const itensOrdemServico = await getItemOrdemServicoByOSId(id);

    console.log(itensOrdemServico);
    const result = {
      ordemServico: ordemServico.rows[0],
      itensOrdemServico: itensOrdemServico.rows,
    };
    return res.status(200).send(result);
  } catch (error) {
    return res.status(500).send({ mensagem: "Erro na requisição", error: error.message });
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

// const getOrdemServicos = async (req, res) => {
//   try {
//     const query = `
//       SELECT
//         os.id,
//         c.nome AS cliente,
//         s.descricao AS status,
//         f.nome AS funcionario,
//         os.data_entrada,
//         os.data_saida
//       FROM ordem_servico os
//       LEFT JOIN clientes c ON os.cliente_id = c.id
//       LEFT JOIN funcionarios f ON os.funcionario_id = f.id
//       LEFT JOIN status s ON os.status_id = s.id;
//     `;

//     const ordemServico = await client.query(query);
//     return res.status(200).send(ordemServico.rows);
//   } catch (error) {
//     return res.status(500).send({ mensagem: "Erro ao buscar ordens de serviço", erro: error.message });
//   }
// };
