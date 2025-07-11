import { Cliente } from "../models/cliente.model";
import { ClienteRepository } from "../repositories/cliente.repository";

export class ClienteService {
  constructor(private repo: ClienteRepository) { }

  getAll(): Cliente[] {
    return this.repo.findAll();
  }

  getById(id: number): Cliente | undefined {
    return this.repo.findById(id);
  }

  create(data: Omit<Cliente, 'id'>): Cliente {
    return this.repo.create(data);
  }

  update(cliente: Cliente): Cliente | undefined {
    return this.repo.update(cliente);
  }

  delete(id: number): boolean {
    return this.repo.delete(id);
  }
}