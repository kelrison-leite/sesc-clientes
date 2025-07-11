import { Router } from "express";
import { ClienteController } from "../controllers/cliente.controller";

const router = Router();

router.get("/", ClienteController.getAll);
router.get("/:id", ClienteController.getById);
router.put("/", ClienteController.update);
router.post("/", ClienteController.create);
router.delete("/:id", ClienteController.delete);

export default router;