import { Inscricao } from "../models/inscricao.model";

export class InscricaoRepository {
  private items: Inscricao[] = [];
  private idCounter = 1;

  findAll(): Inscricao[] {
    return this.items;
  }

  findById(id: number): Inscricao | undefined {
    return this.items.find(i => i.id === id);
  }

  create(data: Omit<Inscricao, 'id'>): Inscricao {
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

    update(inscricao: Inscricao): Inscricao | undefined {
      const index = this.items.findIndex(i => i.id === inscricao.id);
      if (index !== -1) {
        this.items[index] = { ...this.items[index], ...inscricao };
        return this.items[index];
      }
      return undefined;
    }
}