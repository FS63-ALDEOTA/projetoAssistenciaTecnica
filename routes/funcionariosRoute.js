import { Router } from "express"

import * as funcionariosControllers from "../controllers/funcionariosControllers.js"

const router = Router()

router.get("/", funcionariosControllers.getFuncionarios)
router.get("/:id", funcionariosControllers.getFuncionarioById)
router.post("/", funcionariosControllers.createFuncionario)
router.put("/:id", funcionariosControllers.updateFuncionario)

export default router