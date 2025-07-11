import { Cliente } from "../models/cliente.model";

export class ClienteRepository {
  private items: Cliente[] = [
    {
      "nome": "Kelrison",
      "dataNascimento": "1985-10-15",
      "logradouro": "Rua Principal",
      "numero": "123",
      "bairro": "Centro",
      "cidade": "São Paulo",
      "estado": "SP",
      "cep": "01000-000",
      id: 200,
      dataCriacao: ""
    }
];
  private idCounter = 1;

  findAll(): Cliente[] {
    return this.items;
  }

  findById(id: number): Cliente | undefined {
    return this.items.find(i => i.id === id);
  }

  create(data: Omit<Cliente, 'id'>): Cliente {
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

  update(cliente: Cliente): Cliente | undefined {
    const index = this.items.findIndex(i => i.id === cliente.id);
    if (index !== -1) {
      this.items[index] = { ...this.items[index], ...cliente };
      return this.items[index];
    }
    return undefined;
  }
  
}