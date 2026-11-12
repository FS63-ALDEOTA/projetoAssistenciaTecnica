import { Router } from "express";
import {
    getServicos,
    getServicosById,
    createServicos,
    uptadeServicos
} from "../controllers/servicosControllers.js"

const router = Router ();

router.get ("/",getServicos);
router.get ("/:id",getServicosById);
router.post ("/",createServicos);
router.put ("/",uptadeServicos);

export default router;