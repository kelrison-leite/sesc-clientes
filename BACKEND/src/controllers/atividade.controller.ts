import { Request, Response } from "express";
import { AtividadeService } from "../services/atividade.service";
import { AtividadeRepository } from "../repositories/atividade.repository";

const repository = new AtividadeRepository();
const service = new AtividadeService(repository);

export class AtividadeController {
  static getAll(req: Request, res: Response) {
    res.json(service.getAll());
  }

  static getById(req: Request, res: Response) {
    const id = Number(req.params.id);
    const item = service.getById(id);
    if (!item) return res.status(404).json({ message: "Atividade not found" });
    res.json(item);
  }

  static create(req: Request, res: Response) {
    const data = req.body;
    const { nome, matricula, descricao, unidadeSesc, idResponsavel, idCliente, idAtividade } = data;
    
    if (!nome || typeof nome !== 'string') return res.status(400).json({ message: "Invalid 'nome'" });
    if (!idResponsavel || typeof idResponsavel !== 'number') return res.status(400).json({ message: "Invalid 'idResponsavel'" });
    
    const now = new Date().toISOString();
    const obj = service.create({ ...data, dataCriacao: now, dataInscricao: now });
    res.status(201).json(obj);
  }

  static delete(req: Request, res: Response) {
    const id = Number(req.params.id);
    const deleted = service.delete(id);
    if (!deleted) return res.status(404).json({ message: "Atividade not found" });
    res.status(204).send();
  }

  static update(req: Request, res: Response) {
    const data = req.body;
    const { id, nome, matricula, descricao, unidadeSesc, idResponsavel, idCliente, idAtividade } = data;

    if (!nome || typeof nome !== 'string') return res.status(400).json({ message: "Invalid 'nome'" });
    if (!idResponsavel || typeof idResponsavel !== 'number') return res.status(400).json({ message: "Invalid 'idResponsavel'" });

    const atividadeUpdated = service.update(data);
    if (!atividadeUpdated) return res.status(404).json({ message: "Atividade not found" });
    
    res.json(atividadeUpdated);
  }
}