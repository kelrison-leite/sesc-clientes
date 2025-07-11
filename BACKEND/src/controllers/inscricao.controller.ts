import { Request, Response } from "express";
import { InscricaoService } from "../services/inscricao.service";
import { InscricaoRepository } from "../repositories/inscricao.repository";

const repository = new InscricaoRepository();
const service = new InscricaoService(repository);

export class InscricaoController {
  static getAll(req: Request, res: Response) {
    res.json(service.getAll());
  }

  static getById(req: Request, res: Response) {
    const id = Number(req.params.id);
    const item = service.getById(id);
    if (!item) return res.status(404).json({ message: "Inscricao not found" });
    res.json(item);
  }

  static create(req: Request, res: Response) {
    const data = req.body;
    const { nome, matricula, descricao, unidadeSesc, idResponsavel, idCliente, idAtividade } = data;
    
    if (!idCliente || typeof idCliente !== 'number') return res.status(400).json({ message: "Invalid 'idCliente'" });
    if (!idAtividade || typeof idAtividade !== 'number') return res.status(400).json({ message: "Invalid 'idAtividade'" });
    
    const now = new Date().toISOString();
    const obj = service.create({ ...data, dataCriacao: now, dataInscricao: now });
    res.status(201).json(obj);
  }

  static delete(req: Request, res: Response) {
    const id = Number(req.params.id);
    const deleted = service.delete(id);
    if (!deleted) return res.status(404).json({ message: "Inscricao not found" });
    res.status(204).send();
  }

  static update(req: Request, res: Response) {
    const data = req.body;
    const { id, nome, matricula, descricao, unidadeSesc, idResponsavel, idCliente, idAtividade } = data;

    if (!id || typeof id !== 'number') return res.status(400).json({ message: "Invalid 'id'" });
    if (!idCliente || typeof idCliente !== 'number') return res.status(400).json({ message: "Invalid 'idCliente'" });
    if (!idAtividade || typeof idAtividade !== 'number') return res.status(400).json({ message: "Invalid 'idAtividade'" });

    const inscricaoUpdated = service.update(data);
    if (!inscricaoUpdated) return res.status(404).json({ message: "Inscricao not found" });
    
    res.json(inscricaoUpdated);
  }
}