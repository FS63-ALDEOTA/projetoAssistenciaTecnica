const getFuncionarios = (req,res) => {
    try{
        res.status(200).res.send ("Busca todos os funcionários")
    }
    catch {
        res.status(500).res.send ("erro")
    }
    // res.send ("Busca todos os funcionários")
}

const getFuncionarioById = (req,res) => {
 try{
        res.status(200).res.send ("Busca 1 funcionários por ID")
    }
    catch {
        res.status(500). res.send ("erro")
    }


    // res.send ("Busca 1 funcionários por ID")
}


const createFuncionario = (req,res) => { 
    try{
        res.status(201).send("cadastra funcionario")
    }
    catch {
        res.status(500). res.send ("erro")
    }



    // res.status(201).send ("cadastra funcionario")
}


const updateFuncionario = (req,res) => {
     try{
        res.status(201). res.send("altera funcionario")
    }
    catch {
        res.status(500). res.send ("erro")
    }


    
    res.send ("altera funcionario")
}



export {
    getFuncionarios,
    getFuncionarioById,
    createFuncionario,
    updateFuncionario

}