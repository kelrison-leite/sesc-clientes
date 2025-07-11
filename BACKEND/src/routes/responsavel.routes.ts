import { Router } from "express";
import { ResponsavelController } from "../controllers/responsavel.controller";

const router = Router();

router.get("/", ResponsavelController.getAll);
router.get("/:id", ResponsavelController.getById);
router.post("/", ResponsavelController.create);
router.put("/", ResponsavelController.update);
router.delete("/:id", ResponsavelController.delete);

export default router;