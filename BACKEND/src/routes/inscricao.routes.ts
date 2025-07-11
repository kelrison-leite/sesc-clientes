import { Router } from "express";
import { InscricaoController } from "../controllers/inscricao.controller";

const router = Router();

router.get("/", InscricaoController.getAll);
router.get("/:id", InscricaoController.getById);
router.post("/", InscricaoController.create);
router.put("/", InscricaoController.update);
router.delete("/:id", InscricaoController.delete);

export default router;