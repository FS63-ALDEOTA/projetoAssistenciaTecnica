const getOrdemServicos = (req, res) => {
  try {
    res.status(200).res.send("Busca todas as Ordem de Serviços");
  } catch {
    res.status(500).res.send("erro");
  }
  // res.send ("Busca todos os funcionários")
};

const getOrdemServicoById = (req, res) => {
  try {
    res.status(200).res.send("Busca 1 Ordem de Serviço por ID");
  } catch {
    res.status(500).res.send("erro");
  }

  // res.send ("Busca 1 funcionários por ID")
};

const createOrdemServico = (req, res) => {
  try {
    res.status(201).send("cadastra Ordem de Servico");
  } catch {
    res.status(500).res.send("erro");
  }

  // res.status(201).send ("cadastra OrdemServico")
};

const updateOrdemServico = (req, res) => {
  try {
    res.status(201).res.send("altera Ordem de Servico");
  } catch {
    res.status(500).res.send("erro");
  }

  res.send("altera Ordem de Servico");
};

export { getOrdemServicos, getOrdemServicoById, createOrdemServico, updateOrdemServico };
