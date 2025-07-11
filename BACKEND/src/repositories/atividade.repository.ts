import { Atividade } from "../models/atividade.model";

export class AtividadeRepository {
  private items: Atividade[] = [];
  private idCounter = 1;

  findAll(): Atividade[] {
    return this.items;
  }

  findById(id: number): Atividade | undefined {
    return this.items.find(i => i.id === id);
  }

  create(data: Omit<Atividade, 'id'>): Atividade {
    const item = { id: this.idCounter++, ...data };
    this.items.push(item);
    return item;
  }

  delete(id: number): boolean {
    const index = this.items.findIndex(i => i.id === id);
    if (index !== -1) {
      this.items.splice(index, 1);
      return true;
    }
    return false;
  }

    update(atividade: Atividade): Atividade | undefined {
      const index = this.items.findIndex(i => i.id === atividade.id);
      if (index !== -1) {
        this.items[index] = { ...this.items[index], ...atividade };
        return this.items[index];
      }
      return undefined;
    }
}