import { Router } from "express"

import * as equipamentosController from "../controllers/equipamentosController.js"

const router = Router()

router.get("/", equipamentosController.getEquipamentosByClient);
router.get("/:id", equipamentosController.getEquipamentoById);
router.put("/", equipamentosController.createEquipamento);
router.post("/:id", equipamentosController.updateEquipamento);
router.delete("/:id", equipamentosController.deleteEquipamento);

export default router