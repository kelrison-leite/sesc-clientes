import { Request, Response } from "express";
import { ResponsavelService } from "../services/responsavel.service";
import { ResponsavelRepository } from "../repositories/responsavel.repository";

const repository = new ResponsavelRepository();
const service = new ResponsavelService(repository);

export class ResponsavelController {
  static getAll(req: Request, res: Response) {
    res.json(service.getAll());
  }

  static getById(req: Request, res: Response) {
    const id = Number(req.params.id);
    const item = service.getById(id);
    if (!item) return res.status(404).json({ message: "Responsavel not found" });
    res.json(item);
  }

  static create(req: Request, res: Response) {
    const data = req.body;
    const { nome, matricula, descricao, unidadeSesc, idResponsavel, idCliente, idAtividade } = data;
    
    if (!nome || typeof nome !== 'string') return res.status(400).json({ message: "Invalid 'nome'" });
    if (!matricula || typeof matricula !== 'string') return res.status(400).json({ message: "Invalid 'matricula'" });
    
    const now = new Date().toISOString();
    const obj = service.create({ ...data, dataCriacao: now, dataInscricao: now });
    res.status(201).json(obj);
  }

  static delete(req: Request, res: Response) {
    const id = Number(req.params.id);
    const deleted = service.delete(id);
    if (!deleted) return res.status(404).json({ message: "Responsavel not found" });
    res.status(204).send();
  }

  static update(req: Request, res: Response) {
    const data = req.body;
    const { id, nome, matricula, descricao, unidadeSesc, idResponsavel, idCliente, idAtividade } = data;

    if (!id || typeof id !== 'number') return res.status(400).json({ message: "Invalid 'id'" });
    if (!nome || typeof nome !== 'string') return res.status(400).json({ message: "Invalid 'nome'" });
    if (!matricula || typeof matricula !== 'string') return res.status(400).json({ message: "Invalid 'matricula'" });

    const responsavelUpdated = service.update(data);
    if (!responsavelUpdated) return res.status(404).json({ message: "Responsavel not found" });
    
    res.json(responsavelUpdated);
  }
}