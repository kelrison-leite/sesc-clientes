import { Router } from "express";
import { AtividadeController } from "../controllers/atividade.controller";

const router = Router();

router.get("/", AtividadeController.getAll);
router.get("/:id", AtividadeController.getById);
router.post("/", AtividadeController.create);
router.put("/", AtividadeController.update);
router.delete("/:id", AtividadeController.delete);

export default router;