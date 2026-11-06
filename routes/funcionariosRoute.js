import { Router } from "express";

import * as funcionariosController from '../controllers/funcionariosController.js'

const router = Router()

router.get("/", funcionariosController.getFuncionarios)
router.get("/:id", funcionariosController.getFuncionariobyId)
router.post("/", funcionariosController.createFuncionario)
router.put("/:id", funcionariosController.updateFuncionario)

export default router