import { Inscricao } from "../models/inscricao.model";
import { InscricaoRepository } from "../repositories/inscricao.repository";

export class InscricaoService {
  constructor(private repo: InscricaoRepository) { }

  getAll(): Inscricao[] {
    return this.repo.findAll();
  }

  getById(id: number): Inscricao | undefined {
    return this.repo.findById(id);
  }

  create(data: Omit<Inscricao, 'id'>): Inscricao {
    return this.repo.create(data);
  }

  delete(id: number): boolean {
    return this.repo.delete(id);
  }

  update(inscricao: Inscricao): Inscricao | undefined {
    return this.repo.update(inscricao);
  }
}