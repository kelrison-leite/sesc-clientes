import { Request, Response } from "express";
import { ClienteService } from "../services/cliente.service";
import { ClienteRepository } from "../repositories/cliente.repository";

const repository = new ClienteRepository();
const service = new ClienteService(repository);

export class ClienteController {
  static getAll(req: Request, res: Response) {
    res.json(service.getAll());
  }

  static getById(req: Request, res: Response) {
    const id = Number(req.params.id);
    const item = service.getById(id);
    if (!item) return res.status(404).json({ message: "Cliente not found" });
    res.json(item);
  }

  static create(req: Request, res: Response) {
    const data = req.body;
    const { nome, matricula, descricao, unidadeSesc, idResponsavel, idCliente, idAtividade } = data;
    
    if (!nome || typeof nome !== 'string') return res.status(400).json({ message: "Invalid 'nome'" });
    
    const now = new Date().toISOString();
    const obj = service.create({ ...data, dataCriacao: now, dataInscricao: now });
    res.status(201).json(obj);
  }
  static update(req: Request, res: Response) {
    const data = req.body;
    const { id, nome, matricula, descricao, unidadeSesc, idResponsavel, idCliente, idAtividade } = data;

    if (!nome || typeof nome !== 'string') return res.status(400).json({ message: "Invalid 'nome'" });

    const clientUpdated = service.update(data);
    if (!clientUpdated) return res.status(404).json({ message: "Cliente not found" });
    
    res.json(clientUpdated);
  }

  static delete(req: Request, res: Response) {
    const id = Number(req.params.id);
    const deleted = service.delete(id);
    if (!deleted) return res.status(404).json({ message: "Cliente not found" });
    res.status(204).send();
  }
}