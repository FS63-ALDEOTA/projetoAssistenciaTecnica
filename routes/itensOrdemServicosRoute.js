import { Router } from "express";

import * as itensOrdemServicosControllers from "../controllers/itensOrdemServicosController.js";

const router = Router();

router.get("/:os_id", itensOrdemServicosControllers.getItensOrdemServicosByOSId);
router.get("/:id", itensOrdemServicosControllers.getItemOrdemServicoById);
router.post("/", itensOrdemServicosControllers.createItemOrdemServico);
router.patch("/:id", itensOrdemServicosControllers.updateItemOrdemServico);

export default router;
