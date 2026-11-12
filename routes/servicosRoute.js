import { Router } from "express";
import {
    getServicos,
    getServicosById,
    createServicos,
    updateServicos
} from "../controllers/servicosControllers.js"

const router = Router ();

router.get ("/",getServicos);
router.get ("/:id",getServicosById);
router.post ("/",createServicos);
router.put ("/:id", updateServicos);

export default router;