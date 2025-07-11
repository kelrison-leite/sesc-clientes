import { Responsavel } from "../models/responsavel.model";

export class ResponsavelRepository {
  private items: Responsavel[] = [];
  private idCounter = 1;

  findAll(): Responsavel[] {
    return this.items;
  }

  findById(id: number): Responsavel | undefined {
    return this.items.find(i => i.id === id);
  }

  create(data: Omit<Responsavel, 'id'>): Responsavel {
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

  update(responsavel: Responsavel): Responsavel | undefined {
    const index = this.items.findIndex(i => i.id === responsavel.id);
    if (index !== -1) {
      this.items[index] = { ...this.items[index], ...responsavel };
      return this.items[index];
    }
    return undefined;
  }
}