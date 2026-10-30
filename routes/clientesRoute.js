import { Router } from "express"

// import {
//     getClientes,
//     getClienteById,
//     createCliente,
//     updateCliente
// } from "../controllers/clientesController"

import * as clienteController from "../controllers/clientesController.js"
const router = Router()

router.get("/", clienteController.getClientes)
router.get("/:id", clienteController.getClienteById)
router.post("/", clienteController.createCliente)
router.put("/:id", clienteController.updateCliente)

export default router