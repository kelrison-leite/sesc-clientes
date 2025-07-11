import { Atividade } from "../models/atividade.model";
import { AtividadeRepository } from "../repositories/atividade.repository";

export class AtividadeService {
  constructor(private repo: AtividadeRepository) { }

  getAll(): Atividade[] {
    return this.repo.findAll();
  }

  getById(id: number): Atividade | undefined {
    return this.repo.findById(id);
  }

  create(data: Omit<Atividade, 'id'>): Atividade {
    return this.repo.create(data);
  }

  delete(id: number): boolean {
    return this.repo.delete(id);
  }

  update(atividade: Atividade): Atividade | undefined {
    return this.repo.update(atividade);
  }
}