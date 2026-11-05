import { Router } from "express";

import * as ordemServicosControllers from "../controllers/ordemServicosControllers.js";

const router = Router();

router.get("/", ordemServicosControllers.getOrdemServicos);
router.get("/:id", ordemServicosControllers.getOrdemServicoById);
router.post("/", ordemServicosControllers.createOrdemServico);
router.put("/:id", ordemServicosControllers.updateOrdemServico);

export default router;
