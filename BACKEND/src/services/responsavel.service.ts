import { Responsavel } from "../models/responsavel.model";
import { ResponsavelRepository } from "../repositories/responsavel.repository";

export class ResponsavelService {
  constructor(private repo: ResponsavelRepository) { }

  getAll(): Responsavel[] {
    return this.repo.findAll();
  }

  getById(id: number): Responsavel | undefined {
    return this.repo.findById(id);
  }

  create(data: Omit<Responsavel, 'id'>): Responsavel {
    return this.repo.create(data);
  }

  delete(id: number): boolean {
    return this.repo.delete(id);
  }

  update(responsavel: Responsavel): Responsavel | undefined {
    return this.repo.update(responsavel);
  }
}