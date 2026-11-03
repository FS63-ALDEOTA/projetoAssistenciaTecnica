import { Router } from "express";

import * as funcionarioController from '../controllers/funcionariosController.js'

const router = Router()

router.get("/", funcionarioController.getFuncionarios)
router.get("/id", funcionarioController.getFuncionariobyId)
router.get("/", funcionarioController.createFuncionario)
router.get("/id", funcionarioController.updateFuncionario)

export default router